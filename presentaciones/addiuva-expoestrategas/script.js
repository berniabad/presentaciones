(() => {
  const reveals = document.querySelectorAll(".reveal");
  const progressBar = document.querySelector(".scroll-progress-bar");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const interactiveSurfaces = document.querySelectorAll(".interactive-surface");
  const parallaxImages = document.querySelectorAll(".idea-image");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const delay = Number(entry.target.dataset.delay || 0);
      window.setTimeout(() => {
        entry.target.classList.add("is-visible");
      }, delay);
      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px"
  });

  reveals.forEach((element) => revealObserver.observe(element));

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", active);
      });
    });
  }, {
    threshold: 0.45
  });

  sections.forEach((section) => sectionObserver.observe(section));

  const surfaceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-inview", entry.isIntersecting && entry.intersectionRatio > 0.45);
    });
  }, {
    threshold: [0.2, 0.45, 0.7]
  });

  interactiveSurfaces.forEach((surface) => {
    surfaceObserver.observe(surface);

    surface.addEventListener("mousemove", (event) => {
      if (window.innerWidth < 960) {
        return;
      }

      const rect = surface.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      surface.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      surface.style.setProperty("--my", `${(y / rect.height) * 100}%`);
      const rotateY = ((x / rect.width) - 0.5) * 5;
      const rotateX = ((y / rect.height) - 0.5) * -5;
      surface.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    surface.addEventListener("mouseleave", () => {
      surface.style.transform = "";
      surface.style.removeProperty("--mx");
      surface.style.removeProperty("--my");
    });
  });

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.animate([
        { transform: "scale(0.965) translateY(28px)", opacity: 0.2 },
        { transform: "scale(1) translateY(0)", opacity: 1 }
      ], {
        duration: 950,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards"
      });

      imageObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.22
  });

  parallaxImages.forEach((image) => imageObserver.observe(image));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
})();
