// ============================================================
//  MAXUS SNOW 2026 · Gloaming · interactions
// ============================================================
(() => {
  'use strict';

  // Reveal on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const d = parseInt(el.dataset.d || '0', 10);
        setTimeout(() => el.classList.add('visible'), d);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // Counters
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = el.dataset.dec ? parseInt(el.dataset.dec, 10) : 0;
    const dur = 1600;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = target * eased;
      el.textContent = dec ? cur.toFixed(dec) : Math.floor(cur).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = dec ? target.toFixed(dec) : Math.floor(target).toLocaleString('en-US');
    };
    requestAnimationFrame(step);
  };
  const cObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { animate(e.target); cObs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  document.querySelectorAll('.count').forEach((c) => cObs.observe(c));

  // Nav scroll bg
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 60) { nav.style.background = 'rgba(7,8,8,.94)'; nav.style.borderBottomColor = 'rgba(255,255,255,.14)'; }
    else { nav.style.background = 'rgba(7,8,8,.6)'; nav.style.borderBottomColor = 'rgba(255,255,255,.10)'; }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Smooth scroll
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();
