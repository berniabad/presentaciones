(() => {
  "use strict";

  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const langButtons = document.querySelectorAll(".lang-toggle button");
  const pageTitle = {
    es: "Kaiyi Argentina Launch Event · Reporte",
    en: "Kaiyi Argentina Launch Event · Report",
  };
  const pageDescription = {
    es: "Reporte del evento de lanzamiento de Kaiyi en Argentina: experiencia, contenidos, influencers, prensa, paid media, medios directos y resultados orgánicos.",
    en: "Report on Kaiyi's launch event in Argentina: experience, content, influencers, press, paid media, direct media and organic results.",
  };
  const labels = {
    es: {
      menu: "Menú principal",
      toggle: "Abrir menú",
      lang: "Cambiar idioma",
      guestChart: "Distribución de asistentes por tipo",
      campaignPeriod: "Período de la campaña",
      newCampaignPeriod: "Período de la nueva campaña",
      growth: "Crecimiento de seguidores en Instagram",
      videoFallbackTitle: "Video pendiente de descarga",
      videoFallbackBody: "Reemplazar el puntero Git LFS por el MP4 original.",
    },
    en: {
      menu: "Main menu",
      toggle: "Open menu",
      lang: "Change language",
      guestChart: "Attendee distribution by type",
      campaignPeriod: "Campaign period",
      newCampaignPeriod: "New campaign period",
      growth: "Instagram follower growth",
      videoFallbackTitle: "Video pending download",
      videoFallbackBody: "Replace the Git LFS pointer with the original MP4.",
    },
  };
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
  const translations = {
    "Reporte de evento · Argentina": "Event report · Argentina",
    "Kaiyi Launch Event.": "Kaiyi Launch Event<span>.</span>",
    "Una mirada ejecutiva sobre la presentación oficial de Kaiyi en Argentina: experiencia, contenidos, amplificación, prensa y resultados del lanzamiento.": "An executive view of Kaiyi's official presentation in Argentina: experience, content, amplification, press and launch results.",
    "Personas asistentes": "Attendees",
    "Medios invitados": "Invited media",
    "Visualizaciones totales": "Total views",
    "Leads generados": "Leads generated",
    "01 · Objetivo": "01 · Objective",
    "Instalar la llegada de Kaiyi con una experiencia de marca completa.": "Establish Kaiyi's arrival with a complete brand experience.",
    "El evento fue pensado como el punto de partida público para Kaiyi en Argentina: presentar la marca, poner en escena su propuesta de producto, generar contenido propietario y activar una conversación amplificada por prensa, influencers, paid media y canales orgánicos.": "The event was designed as Kaiyi's public starting point in Argentina: presenting the brand, showcasing its product proposition, generating owned content and activating a conversation amplified by press, influencers, paid media and organic channels.",
    "Brand awareness": "Brand awareness",
    "Dar visibilidad al desembarco.": "Drive visibility for the market entry.",
    "Construir una primera impresión fuerte y consistente para la marca en el mercado argentino.": "Build a strong and consistent first impression for the brand in the Argentine market.",
    "Producto": "Product",
    "Presentar la gama y el X7 Hybrid.": "Present the lineup and the X7 Hybrid.",
    "Ordenar el relato alrededor de los modelos disponibles y del lanzamiento de la SUV híbrida.": "Structure the story around the available models and the hybrid SUV launch.",
    "Amplificación": "Amplification",
    "Convertir el evento en contenido.": "Turn the event into content.",
    "Generar materiales audiovisuales, cobertura editorial y publicaciones sociales para extender la vida del lanzamiento.": "Generate audiovisual assets, editorial coverage and social posts to extend the life of the launch.",
    "02 · Venue y asistentes": "02 · Venue and attendees",
    "180 invitados en Arena Estudios.": "<span class=\"red\">180 guests</span> at Arena Estudios.",
    "El evento se realizó en Arena Estudios, ubicado en Av. Don Pedro de Mendoza 965, La Boca, Buenos Aires. El venue funcionó como escenario de presentación, punto de encuentro y set de contenido para introducir oficialmente a Kaiyi en Argentina.": "The event took place at Arena Estudios, located at Av. Don Pedro de Mendoza 965, La Boca, Buenos Aires. The venue worked as a presentation stage, meeting point and content set to officially introduce Kaiyi in Argentina.",
    "Asistieron medios de nicho, dueños de concesionarias, potenciales clientes y referentes de la industria automotor argentina.": "Niche media, dealership owners, potential customers and key figures from Argentina's automotive industry attended.",
    "asistentes": "attendees",
    "Corporativo": "Corporate",
    "Prensa e influencers": "Press and influencers",
    "Concesionarios": "Dealers",
    "03 · Videos producidos": "03 · Produced videos",
    "Contenido audiovisual creado especialmente para el lanzamiento.": "Audiovisual content created especially for the launch.",
    "El evento contó con piezas desarrolladas para instalar estética, expectativa y recordación. Estos materiales permitieron abrir el reporte, vestir la experiencia y extender la conversación en redes.": "The event included pieces developed to build aesthetics, anticipation and recall. These materials opened the report, shaped the experience and extended the conversation on social media.",
    "Pre evento": "Pre-event",
    "Reel de expectativa": "Anticipation reel",
    "Contenido publicado antes del evento para anticipar la presentación y activar interés.": "Content published before the event to preview the presentation and spark interest.",
    "Contenido producido": "Produced content",
    "Ejemplo de pieza audiovisual": "Audiovisual piece example",
    "Ejemplo de los contenidos producidos para construir identidad visual, clima de lanzamiento y material de apoyo para la experiencia.": "Example of the content produced to build visual identity, launch atmosphere and support material for the experience.",
    "04 · Influencers": "04 · Influencers",
    "Referentes contratados para asistir y amplificar el evento.": "Creators hired to attend and amplify the event.",
    "La estrategia combinó perfiles de automotive, lifestyle y creadores con afinidad de audiencia para transformar la asistencia al evento en contenido distribuido en distintas plataformas. Peto Colombo acompañó la experiencia como host del evento.": "The strategy combined automotive and lifestyle profiles, plus creators with audience affinity, to turn event attendance into content distributed across different platforms. Peto Colombo hosted the experience.",
    "Host del evento": "Event host",
    "Resultados de contenidos": "Content results",
    "La amplificación generó más de 1,2 M de visualizaciones.": "Amplification generated more than 1.2M views.",
    "Se relevaron 17 piezas o formatos con resultados reportados entre Instagram Reels, TikTok, Facebook Reels, YouTube Shorts y YouTube Video. Matías Antico fue el perfil de mejor performance.": "17 pieces or formats were tracked across Instagram Reels, TikTok, Facebook Reels, YouTube Shorts and YouTube Video. Matías Antico was the best-performing profile.",
    "Visualizaciones acumuladas": "Accumulated views",
    "Contenidos subidos": "Content pieces uploaded",
    "Views Matías Antico": "Matías Antico views",
    "Inversión realizada": "Investment made",
    "Instagram Reels · 5 contenidos": "Instagram Reels · 5 pieces",
    "TikTok · 4 contenidos": "TikTok · 4 pieces",
    "Facebook Reels · 4 contenidos": "Facebook Reels · 4 pieces",
    "YouTube Shorts · 3 contenidos": "YouTube Shorts · 3 pieces",
    "YouTube Video · 1 contenido": "YouTube Video · 1 piece",
    "reproducciones": "plays",
    "Reproducciones": "Plays",
    "Best performance": "Best performance",
    "Más contenidos destacados": "More featured content",
    "visualizaciones": "views",
    "07 · Medios y prensa": "07 · Media and press",
    "Cobertura amplia en medios Argentinos y verticales automotive.": "Broad coverage across Argentine media and automotive verticals.",
    "El evento generó una respuesta editorial relevante, con notas enfocadas en la presentación oficial de Kaiyi en Argentina, la gama de modelos y el lanzamiento del X7 Hybrid.": "The event generated relevant editorial response, with articles focused on Kaiyi's official presentation in Argentina, the model lineup and the X7 Hybrid launch.",
    "Nota destacada · TN.com": "Featured article · TN.com",
    "visualizaciones estimadas": "estimated views",
    "notas publicadas": "published articles",
    "medios relevados": "tracked media outlets",
    "alcance estimado": "estimated reach",
    "Notas destacadas": "Featured articles",
    "Hacé click y mirá el clipping completo del evento": "Click to view the full event clipping",
    "08 · Paid Media + medios directos · 26 mayo al 30 junio": "08 · Paid Media + direct media · May 26 to June 30",
    "Performance digital con captación, visibilidad y banners en medios afines.": "Digital performance with lead generation, visibility and banners in relevant media.",
    "La inversión combinó paid media de performance y medios directos para sostener la presencia del lanzamiento durante el período de medición, del 26 de mayo al 30 de junio.": "The investment combined performance paid media and direct media to sustain launch presence during the measurement period, from May 26 to June 30.",
    "Impresiones totales": "Total impressions",
    "Volumen consolidado de medios directos, campaña de expectativa y nueva etapa X7 Hybrid.": "Consolidated volume from direct media, the anticipation campaign and the new X7 Hybrid stage.",
    "Clics totales": "Total clicks",
    "Interacciones acumuladas entre medios directos y las dos campañas X7 Hybrid.": "Accumulated interactions across direct media and the two X7 Hybrid campaigns.",
    "Leads totales": "Total leads",
    "Inversión total": "Total investment",
    "CPL promedio": "Average CPL",
    "Costo promedio por lead sobre el total consolidado.": "Average cost per lead over the consolidated total.",
    "CPM promedio": "Average CPM",
    "Costo promedio por mil impresiones del mix consolidado.": "Average cost per thousand impressions for the consolidated mix.",
    "Alcance total": "Total reach",
    "Suma consolidada de medios directos, expectativa y nueva etapa.": "Consolidated sum of direct media, anticipation and the new stage.",
    "CTR promedio": "Average CTR",
    "Ratio de clics consolidado sobre impresiones totales.": "Consolidated click-through rate over total impressions.",
    "Campaña de generación de expectativa del evento": "Event anticipation campaign",
    "X7 Hybrid - Lanzamiento": "X7 Hybrid - Launch",
    "Período de campaña": "Campaign period",
    "26 mayo": "May 26",
    "al": "to",
    "10 junio": "June 10",
    "Leads": "Leads",
    "Impresiones": "Impressions",
    "Clics": "Clicks",
    "Alcance": "Reach",
    "La campaña generó una base relevante de usuarios interesados y sostuvo la expectativa previa al lanzamiento oficial del modelo.": "The campaign generated a relevant base of interested users and sustained anticipation ahead of the model's official launch.",
    "Nueva campaña X7 Hybrid": "New X7 Hybrid campaign",
    "X7 Hybrid - Nueva etapa": "X7 Hybrid - New stage",
    "11 junio": "June 11",
    "30 junio": "June 30",
    "La nueva etapa de campaña consolidó 221 leads, 1.956 clics y más de 184 mil impresiones, extendiendo la captación post lanzamiento del X7 Hybrid.": "The new campaign stage consolidated 221 leads, 1,956 clicks and more than 184K impressions, extending post-launch acquisition for the X7 Hybrid.",
    "Medios directos": "Direct media",
    "Conseguimos más de 1.000.000 de impresiones mediante acciones de medios directos.": "We achieved more than <span class=\"red\">1,000,000</span> impressions through direct media actions.",
    "La pauta directa sumó 1.022.895 impresiones, 2.519 clics y una viewability promedio de 75,92%. iProfesional fue el medio más eficiente en interacción, con 1.215 clics y CTR de 0,51%.": "Direct media added 1,022,895 impressions, 2,519 clicks and an average viewability of 75.92%. iProfesional was the most efficient outlet for interaction, with 1,215 clicks and a 0.51% CTR.",
    "1.215 clics": "1,215 clicks",
    "407.411 imp.": "407,411 imp.",
    "309.200 imp.": "309,200 imp.",
    "1.022.895 imp.": "1,022,895 imp.",
    "09 · Orgánico Instagram · 26 mayo al 30 junio": "09 · Organic Instagram · May 26 to June 30",
    "El lanzamiento produjo un pico claro de visibilidad y crecimiento.": "The launch produced a clear spike in visibility and growth.",
    "El contenido orgánico del lanzamiento generó 553.439 visualizaciones, 127.756 cuentas alcanzadas, 2.637 interacciones, 4.628 clics y 7.580 visitas al perfil. La comunidad pasó de 530 seguidores al inicio del período a 1.826 seguidores actuales.": "Organic launch content generated 553,439 views, 127,756 accounts reached, 2,637 interactions, 4,628 clicks and 7,580 profile visits. The community grew from 530 followers at the start of the period to 1,826 current followers.",
    "seguidores actuales": "current followers",
    "seguidores nuevos": "new followers",
    "Inicio": "Start",
    "Hoy": "Today",
    "10 · Resultados finales": "10 · Final results",
    "La acción superó los objetivos principales del lanzamiento.": "The action exceeded the launch's main objectives.",
    "El cierre compara las metas previstas con los resultados conseguidos en asistencia, visualizaciones, captación de leads y cobertura de prensa.": "The closing section compares planned targets with results achieved in attendance, views, lead generation and press coverage.",
    "Asistencia": "Attendance",
    "Invitados al evento": "Event guests",
    "Esperados": "Expected",
    "Esperadas": "Expected",
    "Reales": "Actual",
    "Influencers": "Influencers",
    "Visualizaciones generadas": "Generated views",
    "Paid media": "Paid media",
    "Conseguidos": "Achieved",
    "Evento": "Event",
    "Leads en evento": "Event leads",
    "Incluye contactos corporativos, concesionarios, GEP y otros asistentes registrados durante el evento.": "Includes corporate contacts, dealerships, GEP and other attendees registered during the event.",
    "Medios": "Media",
    "Notas publicadas": "Published articles",
    "Orgánico": "Organic",
    "Seguidores nuevos": "New followers",
    "Gracias.": "Thank you<span class=\"red\">.</span>",
    "Kaiyi Launch Event: experiencia, contenidos y resultados del lanzamiento en Argentina.": "Kaiyi Launch Event: experience, content and launch results in Argentina.",
    "© 2026 · GEP y Kaiyi Argentina<br>Kaiyi Argentina 2026 · Reporte de evento": "© 2026 · GEP and Kaiyi Argentina<br>Kaiyi Argentina 2026 · Event report",
  };

  const translateNode = (node, lang) => {
    if (lang === "es") {
      if (node.dataset.i18nEs) node.innerHTML = node.dataset.i18nEs;
      return;
    }
    const source = node.dataset.i18nKey || node.textContent.trim().replace(/\s+/g, " ");
    const translated = translations[source];
    if (!translated) return;
    if (!node.dataset.i18nEs) node.dataset.i18nEs = node.innerHTML;
    if (!node.dataset.i18nKey) node.dataset.i18nKey = source;
    node.innerHTML = translated;
  };

  const translatePage = (lang) => {
    const safeLang = lang === "en" ? "en" : "es";
    document.title = pageTitle[safeLang];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pageDescription[safeLang]);
    const currentLabels = labels[safeLang];
    const menu = document.querySelector(".nav-links");
    if (menu) menu.setAttribute("aria-label", currentLabels.menu);
    if (toggle) toggle.setAttribute("aria-label", currentLabels.toggle);
    const langToggle = document.querySelector(".lang-toggle");
    if (langToggle) langToggle.setAttribute("aria-label", currentLabels.lang);
    const guestPie = document.querySelector(".guest-pie");
    if (guestPie) guestPie.setAttribute("aria-label", currentLabels.guestChart);
    const periods = document.querySelectorAll(".campaign-period");
    if (periods[0]) periods[0].setAttribute("aria-label", currentLabels.campaignPeriod);
    if (periods[1]) periods[1].setAttribute("aria-label", currentLabels.newCampaignPeriod);
    const growth = document.querySelector(".growth-line");
    if (growth) growth.setAttribute("aria-label", currentLabels.growth);
    document.querySelectorAll(".video-fallback").forEach((fallback) => {
      fallback.innerHTML = `<strong>${currentLabels.videoFallbackTitle}</strong><span>${currentLabels.videoFallbackBody}</span>`;
    });

    document.querySelectorAll("h1, h2, h3, p, span, small, strong, em, a, .footer .f-meta").forEach((node) => {
      if (node.closest(".lang-toggle")) return;
      if (node.children.length && !translations[node.textContent.trim().replace(/\s+/g, " ")]) return;
      translateNode(node, safeLang);
    });
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
    translatePage(safeLang);
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
    fallback.innerHTML = `<strong>${labels[document.documentElement.lang === "en" ? "en" : "es"].videoFallbackTitle}</strong><span>${labels[document.documentElement.lang === "en" ? "en" : "es"].videoFallbackBody}</span>`;
    fallback.dataset.i18nEs = `<strong>${labels.es.videoFallbackTitle}</strong><span>${labels.es.videoFallbackBody}</span>`;
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
