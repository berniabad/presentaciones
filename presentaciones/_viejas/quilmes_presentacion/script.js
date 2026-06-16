// ============================================================
//  QUILMES × GLOAMING · Modo Mundial 2026
//  Reveal · counters · bars · nav · cans (Lata Campeona)
// ============================================================
(() => {
  'use strict';

  /* ---------- REVEAL ON SCROLL ---------- */
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        const delay = parseInt(el.dataset.d || '0', 10);
        setTimeout(() => el.classList.add('in'), delay);
        revObs.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => revObs.observe(el));

  /* ---------- ANIMATED COUNTERS ---------- */
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const dur = 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };
  const cntObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); cntObs.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.count').forEach((c) => cntObs.observe(c));

  /* ---------- BAR CHARTS ---------- */
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const bar = e.target;
        bar.style.width = (bar.dataset.w || 0) + '%';
        barObs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.bar').forEach((b) => barObs.observe(b));

  /* ---------- NAV: scroll state + mobile toggle ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.style.background = window.scrollY > 60 ? 'rgba(0,0,0,.88)' : 'rgba(0,0,0,.55)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const toggle = nav.querySelector('.nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.querySelectorAll('.nav-links a').forEach((a) =>
        a.addEventListener('click', () => {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        })
      );
    }
  }

  /* ---------- SMOOTH SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (ev) => {
      const id = link.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      ev.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- LATA CAMPEONA · trivia hover ---------- */
  const cans = document.querySelectorAll('.can-wrapper');
  const prompt = document.getElementById('trivia-prompt');
  const question = document.getElementById('trivia-question');
  const box = document.querySelector('.trivia-question-box');
  const trivia = {
    '1978': { prompt: 'Trivia · Mundial 1978', question: '« ¿Qué jugador levantó la copa en el 78? »' },
    '1986': { prompt: 'Trivia · Mundial 1986', question: '« ¿Contra quién fue la final del 86? »' },
    '2022': { prompt: 'Trivia · Qatar 2022', question: '« ¿Quién pateó el último penal en Qatar? »' },
  };
  cans.forEach((w) => {
    const key = w.dataset.trivia;
    const activate = () => {
      cans.forEach((c) => c.classList.remove('active'));
      w.classList.add('active');
      if (trivia[key] && box) {
        box.classList.remove('active');
        void box.offsetWidth;
        prompt.textContent = trivia[key].prompt;
        question.textContent = trivia[key].question;
        box.classList.add('active');
      }
    };
    w.addEventListener('mouseenter', activate);
    w.addEventListener('click', activate);
  });
})();
