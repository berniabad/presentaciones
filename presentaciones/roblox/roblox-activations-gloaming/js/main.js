// Core figures come from "Gloaming Agency_Roblox Deck.pptx" and the user's brief.
// Market reference copy was checked on 2026-06-11 against:
// FIFA: https://inside.fifa.com/tournament-organisation/commercial/media-releases/fifa-and-roblox-announce-landmark-partnership-as-fifa-world-officially
// Netflix: https://www.netflix.com/tudum/roblox-nextworld
// Walmart: https://corporate.walmart.com/news/2023/09/26/walmarts-new-virtual-experience-walmart-discovered-is-inspired-by-the-community
// Vans: https://ir.roblox.com/news/news-details/2021/Vans-Launches-Vans-World-Skatepark-Experience-in-the-Roblox-Metaverse/default.aspx
// Barbie: https://corporate.mattel.com/news/mattel-and-gamefam-unveil-barbie-dreamhouse-tycoon-on-roblox
// Sonic: https://gamesbeat.com/how-gamefam-built-the-1st-branded-roblox-game-to-cross-1b-visits-sonic-speed-simulator/

const translations = {
  es: {
    sources: { label: "Fuente" },
    nav: { territory: "Territorio", roblox: "Roblox", formats: "Formatos", process: "Proceso", contact: "Contacto" },
    hero: {
      title: "LAS MARCAS TAMBIÉN SE JUEGAN",
      subtitle: "Activaciones inmersivas en Roblox, diseñadas y desarrolladas end-to-end por Gloaming.",
      cta: "Explorar propuesta",
      logoLabel: "[AGREGAR LOGO OFICIAL ROBLOX]",
      logoHelp: "Nombre sugerido: assets/images/roblox-logo.svg o roblox-logo.png"
    },
    territory: {
      title: "GAMING CAPTA MÁS",
      body: "Cuando la audiencia juega, la atención deja de ser pasiva.",
      traditional: "Media tradicional",
      traditionalBody: "Interacción promedio.",
      game: "Experiencias en videojuegos",
      gameBody: "Una marca puede ser parte de la acción, no una pausa."
    },
    audience: {
      title: "UNA AUDIENCIA MASIVA",
      body: "Gaming cruza edades, pantallas y comportamientos sociales. No es un nicho: es un hábito cultural.",
      global: "jugadores activos globales",
      adults: "de los gamers tienen más de 18 años",
      avgAge: "años de edad promedio",
      devices: "Dispositivos utilizados",
      activities: "Actividades gaming",
      a1: "jugó o descargó un juego gratuito",
      a2: "vio una transmisión en vivo",
      a3: "compartió gameplay online",
      a4: "jugó online con amigos reales",
      a5: "transmitió su gameplay"
    },
    robloxIntro: {
      title: "ENTRAMOS EN ROBLOX",
      lead: "NO ES UN SOLO JUEGO. ES UNA PLATAFORMA DE EXPERIENCIAS.",
      body: "Roblox reúne millones de experiencias interactivas creadas por usuarios, estudios y marcas. Las personas entran con un avatar para jugar, explorar, socializar, competir y participar en comunidades.",
      experiencesTitle: "EXPERIENCIAS",
      experiencesBody: "Mundos y juegos creados dentro de la plataforma.",
      identityTitle: "IDENTIDAD",
      identityBody: "Cada usuario participa y se expresa mediante su avatar.",
      communityTitle: "COMUNIDAD",
      communityBody: "Jugar también significa socializar, descubrir y compartir."
    },
    numbers: {
      title: "ROBLOX EN DATOS",
      body: "Escala, tiempo de atención, audiencias diversas y herramientas para medir comportamiento dentro de la experiencia.",
      dau: "usuarios activos diarios",
      mau: "usuarios activos mensuales",
      hours: "horas jugadas Q2 2025",
      playtime: "por usuario por día",
      mobile: "uso mobile/tablet",
      age: "Edad",
      region: "Regiones",
      gender: "Género"
    },
    market: {
      title: "MARCAS QUE YA JUEGAN",
      body: "Roblox ya es un espacio donde marcas globales construyen mundos, lanzan productos, activan comunidades y convierten la atención en participación."
    },
    solution: {
      title: "SOLUCIÓN GLOAMING",
      body: "Diseñamos, desarrollamos y ejecutamos experiencias en Roblox que conectan estrategia, creatividad, juego y medición."
    },
    formats: { title: "LO QUE CREAMOS" },
    boost: {
      title: "CÓMO LO POTENCIAMOS",
      body: "No son activaciones aisladas. Son capas que aumentan interacción, conexión y aprendizaje dentro de Minigames o Brand Experiences."
    },
    process: { title: "DE LA IDEA AL LANZAMIENTO" },
    measure: {
      title: "MEDIMOS TODO",
      body: "Cada experiencia deja señales: qué hacen los usuarios, cuánto tiempo permanecen, qué completan, qué canjean y qué aprendizajes puede usar la marca después."
    },
    closing: {
      title: "DE LA ATENCIÓN A LA INTERACCIÓN",
      body: "Creamos experiencias que las personas no solo ven: juegan, exploran, comparten y recuerdan.",
      cta: "Hablemos de tu próxima experiencia en Roblox."
    }
  },
  en: {
    sources: { label: "Source" },
    nav: { territory: "Territory", roblox: "Roblox", formats: "Formats", process: "Process", contact: "Contact" },
    hero: {
      title: "WE CREATE EXPERIENCES FOR BRANDS READY TO PLAY",
      subtitle: "Roblox activations end-to-end by Gloaming.",
      cta: "Explore proposal",
      logoLabel: "[ADD OFFICIAL ROBLOX LOGO]",
      logoHelp: "Suggested name: assets/images/roblox-logo.svg or roblox-logo.png"
    },
    territory: {
      title: "GAMING CAPTURES MORE",
      body: "When the audience plays, attention stops being passive.",
      traditional: "Traditional media",
      traditionalBody: "Average interaction.",
      game: "Videogame experiences",
      gameBody: "A brand can become part of the action, not a pause."
    },
    audience: {
      title: "A MASSIVE AUDIENCE",
      body: "Gaming crosses ages, screens and social behaviors. It is not a niche: it is a cultural habit.",
      global: "global active players",
      adults: "of gamers are over 18",
      avgAge: "average player age",
      devices: "Devices used",
      activities: "Gaming activities",
      a1: "played or downloaded a free game",
      a2: "watched a live gaming stream",
      a3: "shared gameplay online",
      a4: "played online with real-life friends",
      a5: "live-streamed gameplay"
    },
    robloxIntro: {
      title: "WE ENTER ROBLOX",
      lead: "IT IS NOT ONE GAME. IT IS A PLATFORM OF EXPERIENCES.",
      body: "Roblox brings together millions of interactive experiences created by users, studios and brands. People enter with an avatar to play, explore, socialize, compete and join communities.",
      experiencesTitle: "EXPERIENCES",
      experiencesBody: "Worlds and games created inside the platform.",
      identityTitle: "IDENTITY",
      identityBody: "Each user participates and expresses themselves through an avatar.",
      communityTitle: "COMMUNITY",
      communityBody: "Playing also means socializing, discovering and sharing."
    },
    numbers: {
      title: "ROBLOX IN DATA",
      body: "Scale, attention time, diverse audiences and tools to measure behavior inside the experience.",
      dau: "daily active users",
      mau: "monthly active users",
      hours: "hours played in Q2 2025",
      playtime: "per user per day",
      mobile: "mobile/tablet usage",
      age: "Age",
      region: "Regions",
      gender: "Gender"
    },
    market: {
      title: "BRANDS ALREADY PLAY",
      body: "Roblox is already a space where global brands build worlds, launch products, activate communities and turn attention into participation."
    },
    solution: {
      title: "GLOAMING SOLUTION",
      body: "We design, develop and execute Roblox experiences that connect strategy, creativity, play and measurement."
    },
    formats: { title: "WHAT WE CREATE" },
    boost: {
      title: "HOW WE AMPLIFY IT",
      body: "These are not standalone activations. They are layers that increase interaction, connection and learning inside Minigames or Brand Experiences."
    },
    process: { title: "FROM IDEA TO LAUNCH" },
    measure: {
      title: "WE MEASURE EVERYTHING",
      body: "Every experience leaves signals: what users do, how long they stay, what they complete, what they redeem and what the brand can learn next."
    },
    closing: {
      title: "FROM ATTENTION TO INTERACTION",
      body: "We create experiences people do not just see: they play, explore, share and remember.",
      cta: "Let's talk about your next Roblox experience."
    }
  }
};

const content = {
  es: {
    market: [
      ["Sonic Speed Simulator", "SEGA / Gamefam", "Un juego oficial de Sonic en Roblox que convirtió una franquicia global en velocidad, progresión y visitas masivas.", "market-sonic.png"],
      ["FIFA World", "FIFA", "Un hub gratuito para fans de fútbol, con experiencias conectadas a torneos, comunidad y cultura deportiva.", "market-fifa.png"],
      ["Netflix Nextworld", "Netflix", "Un universo interactivo con mundos de Stranger Things, One Piece, Squid Game y otras propiedades de entretenimiento.", "market-netflix.png"],
      ["Walmart Discovered", "Walmart", "Una experiencia orientada a descubrir creadores, UGC y dinámicas de retail dentro de Roblox.", "market-walmart.png"],
      ["Vans World", "Vans", "Un skatepark persistente donde los usuarios practican trucos, compiten y desbloquean gear virtual.", "market-vans.png"],
      ["Barbie DreamHouse Tycoon", "Mattel / Gamefam", "Una experiencia oficial donde los jugadores construyen su DreamHouse, personalizan avatares y juegan minijuegos.", "market-barbie.png"]
    ],
    solution: [
      ["01", "Estrategia de inmersión", "Definimos el rol de la marca dentro del juego y el comportamiento que queremos activar."],
      ["02", "Conceptualización creativa", "Convertimos objetivos de marca en mecánicas, misiones y momentos jugables."],
      ["03", "Desarrollo y producción", "Construimos la experiencia con lógica de plataforma, performance y escalabilidad."],
      ["04", "Implementación", "Lanzamos, integramos assets, activamos tráfico y acompañamos la salida."],
      ["05", "Medición y optimización", "Leemos comportamiento, ajustamos y convertimos datos en aprendizajes accionables."]
    ],
    creations: [
      ["MINIGAMES", "Experiencias jugables simples, rápidas y enfocadas en una mecánica clara. Ideales para campañas, lanzamientos, desafíos, participación y recordación.", "3 semanas", "Participación rápida, recordación y tráfico hacia una acción concreta.", "Mecánica custom, integración de marca, objetivos, misiones y medición básica.", "Campañas tácticas, lanzamientos, promociones y desafíos.", "Más participación en momentos clave, mayor recordación de campaña y tráfico medible hacia una acción.", "minigame-showcase.png"],
      ["BRAND EXPERIENCES", "Mundos de marca robustos donde los usuarios pueden jugar, explorar, socializar, desbloquear recompensas y conectar con productos o valores.", "1 mes", "Construcción de marca, comunidad y presencia sostenida.", "Mundo de marca, minigames, NPCs, shop/rewards, analytics y optimización.", "Brand building, campañas integrales y experiencias always-on.", "Una comunidad que vuelve, mayor tiempo de vínculo con la marca y aprendizajes para optimizar una presencia sostenida.", "brand-experience-showcase.png"]
    ],
    boost: [
      ["GAMIFICACIÓN", "Elementos que convierten el mensaje de marca en interacción dentro del gameplay.", ["NPCs / personajes", "Product placement", "Transactions", "Acciones dentro del juego"], "boost-gamification.png"],
      ["CONEXIÓN ON/OFF", "Mecánicas que conectan Roblox con acciones fuera de la plataforma, y viceversa.", ["Rewards", "Códigos", "Misiones", "Tienda virtual", "E-commerce", "Packaging / retail / redes"], "boost-on-off.png"],
      ["MEDICIÓN", "La capa que permite entender qué hacen los usuarios y cómo optimizar la experiencia.", ["Data & analytics", "Visits", "Unique players", "Playtime", "Retention", "Interactions", "Redemptions", "Traffic source"], "boost-measurement.png"]
    ],
    process: ["Discovery estratégico", "Concepto creativo", "Game design", "Desarrollo", "Testing", "Lanzamiento", "Medición y optimización"]
  },
  en: {
    market: [
      ["Sonic Speed Simulator", "SEGA / Gamefam", "An official Sonic Roblox game that turned a global franchise into speed, progression and massive visits.", "market-sonic.png"],
      ["FIFA World", "FIFA", "A free hub for football fans, with experiences connected to tournaments, community and sports culture.", "market-fifa.png"],
      ["Netflix Nextworld", "Netflix", "An interactive universe with Stranger Things, One Piece, Squid Game and other entertainment worlds.", "market-netflix.png"],
      ["Walmart Discovered", "Walmart", "An experience built around discovering creators, UGC and retail dynamics inside Roblox.", "market-walmart.png"],
      ["Vans World", "Vans", "A persistent skatepark where users practice tricks, compete and unlock virtual gear.", "market-vans.png"],
      ["Barbie DreamHouse Tycoon", "Mattel / Gamefam", "An official experience where players build a DreamHouse, customize avatars and play minigames.", "market-barbie.png"]
    ],
    solution: [
      ["01", "Immersion strategy", "We define the brand role inside the game and the behavior we want to activate."],
      ["02", "Creative concepting", "We turn brand objectives into mechanics, missions and playable moments."],
      ["03", "Development and production", "We build the experience with platform logic, performance and scalability."],
      ["04", "Implementation", "We launch, integrate assets, activate traffic and support the rollout."],
      ["05", "Measurement and optimization", "We read behavior, adjust and turn data into actionable learnings."]
    ],
    creations: [
      ["MINIGAMES", "Simple, fast playable experiences focused on one clear mechanic. Ideal for campaigns, launches, challenges, participation and recall.", "3 weeks", "Fast participation, recall and traffic toward a clear action.", "Custom mechanic, brand integration, goals, missions and basic measurement.", "Tactical campaigns, launches, promotions and challenges.", "More participation at key moments, stronger campaign recall and measurable traffic toward an action.", "minigame-showcase.png"],
      ["BRAND EXPERIENCES", "Robust brand worlds where users can play, explore, socialize, unlock rewards and connect with products or values.", "1 month", "Brand building, community and sustained presence.", "Brand world, minigames, NPCs, shop/rewards, analytics and optimization.", "Brand building, integrated campaigns and always-on experiences.", "A returning community, more time connected with the brand and learnings to optimize a sustained presence.", "brand-experience-showcase.png"]
    ],
    boost: [
      ["GAMIFICATION", "Elements that turn the brand message into interaction inside gameplay.", ["NPCs / characters", "Product placement", "Transactions", "In-game actions"], "boost-gamification.png"],
      ["ON/OFF CONNECTION", "Mechanics that connect Roblox with actions outside the platform, and back again.", ["Rewards", "Codes", "Missions", "Virtual store", "E-commerce", "Packaging / retail / social"], "boost-on-off.png"],
      ["MEASUREMENT", "The layer that helps understand what users do and how to optimize the experience.", ["Data & analytics", "Visits", "Unique players", "Playtime", "Retention", "Interactions", "Redemptions", "Traffic source"], "boost-measurement.png"]
    ],
    process: ["Strategic discovery", "Creative concept", "Game design", "Development", "Testing", "Launch", "Measurement and optimization"]
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let currentLang = "es";

function t(path) {
  return path.split(".").reduce((obj, key) => obj && obj[key], translations[currentLang]) || "";
}

function setByPath(obj, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((acc, key) => acc[key] ||= {}, obj);
  target[last] = value;
}

function captureHtmlSpanishCopy() {
  $$("[data-i18n]").forEach((el) => {
    const value = el.textContent.trim();
    if (value) setByPath(translations.es, el.dataset.i18n, value);
  });
}

function mediaSlot(file, label, small = false) {
  const asset = file.replace(/\.(png|jpe?g|webp|gif|svg|mp4|webm)$/i, "");
  return `<div class="media-slot ${small ? "media-slot--small" : ""} js-media-slot" data-asset="${asset}" data-label="${label}">
    <div class="media-mirror" aria-hidden="true"></div>
    <div class="media-empty">
      <strong>${label}</strong>
      <span>assets/images/${asset}.png</span>
      <small>${currentLang === "es" ? `o assets/videos/${asset}.mp4` : `or assets/videos/${asset}.mp4`}</small>
    </div>
  </div>`;
}

function renderDynamicContent() {
  $("#market-row").innerHTML = content[currentLang].market.map(([name, category, body, file]) => `
    <article class="market-card reveal visible">
      ${mediaSlot(file, name)}
      <span>${category}</span>
      <h3>${name}</h3>
      <p>${body}</p>
    </article>
  `).join("");

  $("#solution-stack").innerHTML = content[currentLang].solution.map(([num, title, body]) => `
    <article class="solution-card reveal visible solution-card--${num}">
      <i class="solution-node"></i>
      <span>${num}</span>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `).join("");

  $("#creation-grid").innerHTML = content[currentLang].creations.map(([title, desc, timing, objective, includes, ideal, result, file]) => `
    <article class="creation-card reveal visible">
      <div class="media-slot js-media-slot" data-asset="${file.replace(/\.(png|jpe?g|webp|gif|svg|mp4|webm)$/i, "")}" data-label="${title}">
        <div class="media-mirror" aria-hidden="true"></div>
        <div class="media-empty">
          <strong>${title}</strong>
          <span>assets/images/${file.replace(/\.(png|jpe?g|webp|gif|svg|mp4|webm)$/i, "")}.png</span>
          <small>${currentLang === "es" ? `o assets/videos/${file.replace(/\.(png|jpe?g|webp|gif|svg|mp4|webm)$/i, "")}.mp4` : `or assets/videos/${file.replace(/\.(png|jpe?g|webp|gif|svg|mp4|webm)$/i, "")}.mp4`}</small>
        </div>
      </div>
      <div class="creation-copy">
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="info-grid">
          <span><b>${currentLang === "es" ? "Tiempo de producción" : "Production time"}</b>${timing}</span>
          <span><b>${currentLang === "es" ? "Objetivo" : "Objective"}</b>${objective}</span>
          <span><b>${currentLang === "es" ? "Qué incluye" : "Includes"}</b>${includes}</span>
          <span><b>${currentLang === "es" ? "Ideal para" : "Best for"}</b>${ideal}</span>
        </div>
        <div class="creation-result">
          <b>${currentLang === "es" ? "Resultado esperado" : "Expected result"}</b>
          <p>${result}</p>
        </div>
      </div>
    </article>
  `).join("");

  $("#boost-grid").innerHTML = content[currentLang].boost.map(([title, body, items, file]) => `
    <article class="boost-card reveal visible">
      ${mediaSlot(file, title, true)}
      <h3>${title}</h3>
      <p>${body}</p>
      <div class="tag-cloud">${items.map(item => `<span>${item}</span>`).join("")}</div>
    </article>
  `).join("");

  $("#game-map").innerHTML = content[currentLang].process.map((step, index) => `
      <article class="map-node reveal visible">
        <i class="checkpoint-flag"></i>
        <i></i>
        <span>Level ${String(index + 1).padStart(2, "0")}</span>
        <h3>${step}</h3>
      </article>
    `).join("");

  hydrateMediaSlots();
  requestAnimationFrame(updateMarketArrows);
}

function updateMarketArrows() {
  const row = $("#market-row");
  const prev = $(".market-prev");
  const next = $(".market-next");
  if (!row || !prev || !next) return;
  const maxScroll = Math.max(0, row.scrollWidth - row.clientWidth);
  prev.disabled = row.scrollLeft <= 4;
  next.disabled = row.scrollLeft >= maxScroll - 4 || maxScroll <= 4;
}

function hydrateMediaSlots(root = document) {
  $$(".js-media-slot", root).forEach((slot) => {
    if (slot.dataset.resolved === "true") return;
    const asset = slot.dataset.asset;
    const label = slot.dataset.label || asset;
    const candidates = [
      { type: "image", src: `assets/images/${asset}.webp` },
      { type: "image", src: `assets/images/${asset}.png` },
      { type: "image", src: `assets/images/${asset}.jpg` },
      { type: "image", src: `assets/images/${asset}.jpeg` },
      { type: "video", src: `assets/videos/${asset}.mp4` },
      { type: "video", src: `assets/videos/${asset}.webm` }
    ];
    tryMediaCandidate(slot, candidates, label, 0);
  });
}

function tryMediaCandidate(slot, candidates, label, index) {
  if (index >= candidates.length) return;
  const candidate = candidates[index];
  const media = document.createElement(candidate.type === "video" ? "video" : "img");
  media.className = "slot-media";
  if (candidate.type === "video") {
    media.muted = true;
    media.loop = true;
    media.autoplay = true;
    media.playsInline = true;
    media.preload = "metadata";
    media.setAttribute("muted", "");
    media.setAttribute("loop", "");
    media.setAttribute("autoplay", "");
    media.setAttribute("playsinline", "");
    media.addEventListener("loadeddata", () => {
      setMirror(slot, candidate.src, true);
      slot.prepend(media);
      slot.classList.add("has-media");
      slot.dataset.resolved = "true";
      media.play().catch(() => {});
    }, { once: true });
  } else {
    media.alt = label;
    media.addEventListener("load", () => {
      setMirror(slot, candidate.src, false);
      slot.prepend(media);
      slot.classList.add("has-media");
      slot.dataset.resolved = "true";
    }, { once: true });
  }
  media.addEventListener("error", () => tryMediaCandidate(slot, candidates, label, index + 1), { once: true });
  media.src = candidate.src;
  if (candidate.type === "video") media.load();
}

function setMirror(slot, src, isVideo) {
  const mirror = $(".media-mirror", slot);
  if (!mirror) return;
  mirror.innerHTML = "";
  const media = document.createElement(isVideo ? "video" : "img");
  media.src = src;
  if (isVideo) {
    media.muted = true;
    media.loop = true;
    media.autoplay = true;
    media.playsInline = true;
    media.setAttribute("muted", "");
    media.setAttribute("loop", "");
    media.setAttribute("autoplay", "");
    media.setAttribute("playsinline", "");
    media.play().catch(() => {});
  } else {
    media.alt = "";
  }
  mirror.append(media);
}

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });
  $$(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
  renderDynamicContent();
  hydrateMediaSlots();
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const delay = entry.target.dataset.delay || 0;
    entry.target.style.setProperty("--delay", `${delay}ms`);
    entry.target.classList.add("visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.14 });

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.45 });

function animateCounter(el) {
  const target = Number(el.dataset.target);
  const decimals = Number(el.dataset.decimals || 0);
  const duration = 1100;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function init() {
  captureHtmlSpanishCopy();
  renderDynamicContent();
  $$("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });
  $$(".reveal").forEach((el) => revealObserver.observe(el));
  $$(".counter").forEach((el) => counterObserver.observe(el));
  $$(".bar").forEach((bar) => {
    bar.style.setProperty("--value", bar.dataset.value);
  });

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$(".bar", entry.target).forEach((bar) => bar.classList.add("animated"));
      if (entry.target.classList.contains("bar")) entry.target.classList.add("animated");
      barObserver.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  $$(".bar, .data-panel, .chart-card").forEach((el) => barObserver.observe(el));

  $$(".lang-btn").forEach((btn) => btn.addEventListener("click", () => applyTranslations(btn.dataset.lang)));

  const marketPrev = $(".market-prev");
  const marketNext = $(".market-next");
  const marketRow = $("#market-row");
  if (marketPrev && marketNext && marketRow) {
    const marketStep = () => Math.max(320, marketRow.clientWidth * 0.72);
    marketPrev.addEventListener("click", () => {
      marketRow.scrollBy({ left: -marketStep(), behavior: "smooth" });
    });
    marketNext.addEventListener("click", () => {
      marketRow.scrollBy({ left: marketStep(), behavior: "smooth" });
    });
    marketRow.addEventListener("scroll", updateMarketArrows, { passive: true });
    window.addEventListener("resize", updateMarketArrows, { passive: true });
    updateMarketArrows();
  }

  const menu = $(".menu-toggle");
  const panel = $("#nav-panel");
  menu.addEventListener("click", () => {
    const open = !panel.classList.contains("open");
    panel.classList.toggle("open", open);
    menu.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });
  $$(".nav-panel a").forEach((link) => link.addEventListener("click", () => {
    panel.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }));

  const topButton = $(".back-top");
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => topButton.classList.toggle("visible", window.scrollY > 720), { passive: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
