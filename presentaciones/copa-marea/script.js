// ============================================================
//  COPA MAREA 2026 · by GLOAMING
//  Reveal · counters · nav · smooth scroll
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
    const dur = 1400;
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

  /* ---------- NAV: scroll state + mobile toggle ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (nav.classList.contains('open')) return;
      nav.style.background = window.scrollY > 60 ? 'rgba(0,0,0,.88)' : 'rgba(0,0,0,.55)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const toggle = nav.querySelector('.nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (!open) onScroll();
      });
      nav.querySelectorAll('.nav-links a').forEach((a) =>
        a.addEventListener('click', () => {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          onScroll();
        })
      );
    }
  }

  /* ---------- SMOOTH SCROLL with nav offset ---------- */
  document.addEventListener('click', (ev) => {
    const link = ev.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#' || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    ev.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();
