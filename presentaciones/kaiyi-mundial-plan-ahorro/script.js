// ============================================================
//  KAIYI × MUNDIAL 2026 · by GLOAMING
//  Reveal · counters · nav · smooth scroll · EN/ES toggle
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

  /* ---------- LANGUAGE TOGGLE (EN / ES) ---------- */
  const NAV = {
    en: { top: '', objective: 'Objective', benefit: 'The Benefit', wording: 'Wording', amplify: 'Amplification', instore: 'In-store', cta: "Let's talk" },
    es: { top: '', objective: 'Objetivo', benefit: 'El Beneficio', wording: 'Wording', amplify: 'Amplificación', instore: 'Concesionarias', cta: 'Hablemos' },
  };
  const deckEn = document.getElementById('deck-en');
  const deckEs = document.getElementById('deck-es');
  const langButtons = document.querySelectorAll('.lang-toggle button');

  const forceReveal = (root) => {
    if (!root) return;
    root.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    root.querySelectorAll('.count').forEach((c) => { c.textContent = c.dataset.count; });
  };

  const setLang = (lang, { animate: doAnimate } = {}) => {
    if (lang !== 'es') lang = 'en';
    document.documentElement.lang = lang;
    if (deckEn) deckEn.hidden = lang !== 'en';
    if (deckEs) deckEs.hidden = lang !== 'es';

    // nav links: href + label
    document.querySelectorAll('[data-sec]').forEach((a) => {
      const sec = a.dataset.sec;
      a.setAttribute('href', `#${lang}-${sec}`);
      const label = NAV[lang][sec];
      if (label) a.textContent = label;
    });
    const cta = document.querySelector('[data-cta]');
    if (cta) cta.textContent = NAV[lang].cta;

    langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));

    if (doAnimate) forceReveal(lang === 'es' ? deckEs : deckEn);

    try { localStorage.setItem('kaiyi-pda-lang', lang); } catch (e) {}
  };

  langButtons.forEach((b) => {
    b.addEventListener('click', () => setLang(b.dataset.lang, { animate: true }));
  });

  // initial language (saved preference, default EN). No force: scroll observers animate.
  let saved = 'en';
  try { saved = localStorage.getItem('kaiyi-pda-lang') || 'en'; } catch (e) {}
  setLang(saved, { animate: saved === 'es' });

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
