// ============================================================
//  KAIYI ARGENTINA 2026 · interactions
// ============================================================
(() => {
  'use strict';

  const NAV = {
    en: { about: 'Who We Are', market: 'Market', marketing: 'Marketing', next: "What's Next", cta: "Let's talk" },
    es: { about: 'Quiénes Somos', market: 'Mercado', marketing: 'Marketing', next: 'Qué Sigue', cta: 'Hablemos' }
  };

  // ---------- Reveal on scroll ----------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const d = parseInt(el.dataset.d || '0', 10);
        setTimeout(() => el.classList.add('visible'), d);
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  const observeReveals = (root) => {
    (root || document).querySelectorAll('.reveal:not(.visible), .stat:not(.visible)').forEach((el) => revealObserver.observe(el));
  };

  // ---------- Counters ----------
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.dec ? parseInt(el.dataset.dec, 10) : 0);
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
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { animateCount(entry.target); countObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.6 });
  const observeCounts = (root) => (root || document).querySelectorAll('.count').forEach((c) => countObserver.observe(c));

  // ---------- Chart fills (hbar / share / vbar) ----------
  const fillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const val = el.dataset.fill || '0';
      if (el.classList.contains('vb-fill')) el.style.height = val + '%';
      else el.style.width = val + '%';
      fillObserver.unobserve(el);
    });
  }, { threshold: 0.25 });
  const observeFills = (root) => (root || document).querySelectorAll('[data-fill]').forEach((el) => fillObserver.observe(el));

  // ---------- Surge SVG (draw on view) ----------
  const drawSurge = (svg) => {
    const path = svg.querySelector('.surge-line');
    const area = svg.querySelector('.surge-area');
    if (path) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.getBoundingClientRect();
      path.style.transition = 'stroke-dashoffset 1.6s var(--ease, ease)';
      path.style.strokeDashoffset = '0';
    }
    if (area) { area.style.opacity = '0'; area.getBoundingClientRect(); area.style.transition = 'opacity 1.4s ease .3s'; area.style.opacity = '1'; }
  };
  const surgeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { drawSurge(entry.target); surgeObserver.unobserve(entry.target); } });
  }, { threshold: 0.3 });
  const observeSurge = (root) => (root || document).querySelectorAll('.surge-chart svg').forEach((s) => surgeObserver.observe(s));

  // ---------- Language toggle ----------
  const deckEn = document.getElementById('deck-en');
  const deckEs = document.getElementById('deck-es');
  const langButtons = document.querySelectorAll('.lang-toggle button');
  const navLinks = document.querySelectorAll('.nav-links a[data-sec]');
  const navCta = document.querySelector('.nav-cta');
  const brandTop = document.querySelector('.nav-brand');

  const refreshDeck = (deck) => {
    observeReveals(deck); observeCounts(deck); observeFills(deck); observeSurge(deck);
  };

  const setLang = (langIn) => {
    const lang = langIn === 'es' ? 'es' : 'en';
    document.documentElement.lang = lang;
    if (deckEn) deckEn.hidden = lang !== 'en';
    if (deckEs) deckEs.hidden = lang !== 'es';
    navLinks.forEach((a) => {
      const sec = a.dataset.sec;
      a.setAttribute('href', `#${lang}-${sec}`);
      if (NAV[lang][sec]) a.textContent = NAV[lang][sec];
    });
    if (navCta) navCta.textContent = NAV[lang].cta;
    if (brandTop) brandTop.setAttribute('href', `#${lang}-top`);
    langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
    try { localStorage.setItem('kaiyi-ar-lang', lang); } catch (e) {}
    refreshDeck(lang === 'es' ? deckEs : deckEn);
  };

  langButtons.forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  let saved = 'en';
  try { saved = localStorage.getItem('kaiyi-ar-lang') || 'en'; } catch (e) {}
  setLang(saved);

  // ---------- Nav: scroll bg + mobile toggle + active link ----------
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 60) { nav.style.background = 'rgba(8,8,8,.92)'; nav.style.borderBottomColor = 'rgba(255,255,255,.14)'; }
    else { nav.style.background = 'rgba(10,10,10,.6)'; nav.style.borderBottomColor = 'rgba(255,255,255,.10)'; }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navToggle = document.querySelector('.nav-toggle');
  const navLinksWrap = document.querySelector('.nav-links');
  if (navToggle && navLinksWrap) {
    navToggle.addEventListener('click', () => {
      const open = navLinksWrap.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinksWrap.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      navLinksWrap.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // ---------- Smooth scroll (anchors) ----------
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();
