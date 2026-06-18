// ============================================================
//  THE HAWK × GLOAMING · interactions
// ============================================================
(() => {
  'use strict';

  // Reveal on scroll
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const d = parseInt(el.dataset.d || '0', 10);
        setTimeout(() => el.classList.add('visible'), d);
        revObs.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => revObs.observe(el));

  // Sticky nav background on scroll
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 50) { nav.style.background = 'rgba(0,0,0,.92)'; nav.style.borderBottomColor = 'rgba(255,255,255,.14)'; }
    else { nav.style.background = 'rgba(0,0,0,.6)'; nav.style.borderBottomColor = 'rgba(255,255,255,.10)'; }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Smooth scroll for anchors
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
    if (links) links.classList.remove('open');
  });

  // Carrusel mobile: ocultar el swipe-hint una vez que el bloque previo se desliza
  document.querySelectorAll('.swipe-hint').forEach((hint) => {
    const scroller = hint.previousElementSibling;
    if (!scroller) return;
    scroller.addEventListener('scroll', () => {
      if (scroller.scrollLeft > 12) hint.style.opacity = '0';
    }, { passive: true, once: true });
  });
})();
