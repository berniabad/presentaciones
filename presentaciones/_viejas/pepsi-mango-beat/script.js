// ============================================
// PEPSI BLACK MANGO BEAT × PREVIATE ESTA × ADMONKEY
// Interactive behaviors
// ============================================

(() => {
  'use strict';

  // ========================================
  // HAMBURGER MENU (mobile)
  // ========================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

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
  // DEMO BARS — animate width on enter
  // ========================================
  const demoBars = document.querySelectorAll('.demo-bar-fill');

  const demoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const w = entry.target.dataset.w;
        entry.target.style.width = w + '%';
        demoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  demoBars.forEach(b => demoObserver.observe(b));

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
        const offset = 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // PARALLAX subtle on hero can
  // ========================================
  const heroCan = document.querySelector('.hero-can');
  const heroGlow = document.querySelector('.hero-mango-glow');
  let ticking = false;

  if (heroCan) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < 1000) {
            heroCan.style.transform = `rotate(-8deg) translateY(${scrollY * -0.08}px)`;
            if (heroGlow) {
              heroGlow.style.transform = `translateY(calc(-50% + ${scrollY * 0.15}px))`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ========================================
  // TILT on hover (mechanic + prize + context cards)
  // ========================================
  const tiltCards = document.querySelectorAll('.mechanic-card, .prize-card, .context-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -2;
      const rotateY = (x - centerX) / centerX * 2;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

})();
