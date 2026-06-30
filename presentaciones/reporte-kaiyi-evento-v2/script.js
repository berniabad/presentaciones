(() => {
  "use strict";

  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const langButtons = document.querySelectorAll(".lang-toggle button");
  const navLabels = {
    es: {
      "#objetivo": "Objetivo",
      "#venue": "Venue",
      "#contenidos": "Contenidos",
      "#influencers": "Influencers",
      "#prensa": "Prensa",
      "#paid": "Paid",
      "#organico": "Organico",
      "#cierre": "Cierre",
    },
    en: {
      "#objetivo": "Objective",
      "#venue": "Venue",
      "#contenidos": "Content",
      "#influencers": "Influencers",
      "#prensa": "Press",
      "#paid": "Paid Media",
      "#organico": "Organic",
      "#cierre": "Closing",
    },
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const setLanguage = (lang) => {
    const safeLang = lang === "en" ? "en" : "es";
    document.documentElement.lang = safeLang;
    document.querySelectorAll(".nav-links a").forEach((link) => {
      const label = navLabels[safeLang][link.getAttribute("href")];
      if (label) link.textContent = label;
    });
    langButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === safeLang);
    });
    try {
      localStorage.setItem("kaiyi-event-report-lang", safeLang);
    } catch (error) {}
  };

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  try {
    setLanguage(localStorage.getItem("kaiyi-event-report-lang") || "es");
  } catch (error) {
    setLanguage("es");
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || "0";
      entry.target.style.setProperty("--delay", `${delay}ms`);
      entry.target.classList.add("in");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  document.querySelectorAll("video").forEach((video) => {
    const fallback = document.createElement("div");
    fallback.className = "video-fallback";
    fallback.innerHTML = "<strong>Video pendiente de descarga</strong><span>Reemplazar el puntero Git LFS por el MP4 original.</span>";
    video.insertAdjacentElement("afterend", fallback);

    video.addEventListener("loadedmetadata", () => {
      video.classList.remove("is-unavailable");
      fallback.remove();
    }, { once: true });

    video.addEventListener("error", () => {
      video.classList.add("is-unavailable");
      fallback.classList.add("show");
    });
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: "smooth" });
  });
})();
