(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const progress = document.querySelector(".progress span");
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = Math.min(Number(entry.target.dataset.delay || 0), 120);
      window.setTimeout(() => entry.target.classList.add("visible"), delay);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  reveals.forEach((el) => revealObserver.observe(el));

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const current = max <= 0 ? 0 : window.scrollY / max;
    progress.style.width = `${Math.min(100, Math.max(0, current * 100))}%`;
  };

  const nearestSlideIndex = () => {
    const middle = window.scrollY + window.innerHeight / 2;
    let best = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, index) => {
      const center = slide.offsetTop + slide.offsetHeight / 2;
      const distance = Math.abs(center - middle);
      if (distance < bestDistance) {
        best = index;
        bestDistance = distance;
      }
    });
    return best;
  };

  const goToSlide = (delta) => {
    const next = Math.min(slides.length - 1, Math.max(0, nearestSlideIndex() + delta));
    slides[next].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  document.querySelector(".slide-control.prev").addEventListener("click", () => goToSlide(-1));
  document.querySelector(".slide-control.next").addEventListener("click", () => goToSlide(1));

  window.addEventListener("keydown", (event) => {
    if (["ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      goToSlide(1);
    }
    if (["ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      goToSlide(-1);
    }
  });

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
})();
