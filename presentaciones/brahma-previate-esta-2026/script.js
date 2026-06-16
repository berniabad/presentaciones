// ============================================
// TODO TORNEOS × ADMONKEY
// Interactive behaviors
// ============================================

(() => {
  'use strict';

  // ========================================
  // REVEAL ON SCROLL
  // ========================================
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  // ========================================
  // COUNTERS — animated numbers
  // ========================================
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      el.textContent = Math.floor(current) + (progress >= 1 ? suffix : '');

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = Math.floor(target) + suffix;
      }
    };

    requestAnimationFrame(animate);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // ========================================
  // VIZ BARS — animate width on enter
  // ========================================
  const vizBars = document.querySelectorAll('.viz-bar');

  const vizObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const h = entry.target.dataset.h;
        entry.target.style.setProperty('--bar-height', h);
        entry.target.classList.add('animated');
        vizObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  vizBars.forEach(b => vizObserver.observe(b));

  // ========================================
  // NAV — background opacity on scroll
  // ========================================
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
      nav.style.background = 'rgba(10, 10, 10, 0.92)';
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.12)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.5)';
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
  }, { passive: true });

  // ========================================
  // SMOOTH SCROLL on anchor links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // APP TILES — wave hover ripple
  // ========================================
  const appTiles = document.querySelectorAll('.app-tile');
  const appsGrid = document.querySelector('.apps-grid');

  if (appsGrid) {
    appsGrid.addEventListener('mousemove', (e) => {
      const rect = appsGrid.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      appTiles.forEach(tile => {
        const tileRect = tile.getBoundingClientRect();
        const tx = tileRect.left - rect.left + tileRect.width / 2;
        const ty = tileRect.top - rect.top + tileRect.height / 2;
        const dist = Math.sqrt((mx - tx) ** 2 + (my - ty) ** 2);
        const maxDist = 200;
        const factor = Math.max(0, 1 - dist / maxDist);
        const scale = 1 + factor * 0.05;
        tile.style.transform = `scale(${scale})`;
        tile.style.zIndex = factor > 0.3 ? 2 : 1;
      });
    });

    appsGrid.addEventListener('mouseleave', () => {
      appTiles.forEach(tile => {
        tile.style.transform = '';
        tile.style.zIndex = '';
      });
    });
  }

  // ========================================
  // PARALLAX subtle on hero noise
  // ========================================
  const heroNoise = document.querySelector('.hero-bg .noise-tex');
  let ticking = false;

  if (heroNoise) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < 1000) {
            heroNoise.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ========================================
  // STAT BLOCKS — tilt on hover (Apple-style)
  // ========================================
  const tiltCards = document.querySelectorAll('.partner-card, .format-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -1.5;
      const rotateY = (x - centerX) / centerX * 1.5;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  // ========================================
  // BRAHMA IDEA CARDS
  // ========================================

})();
