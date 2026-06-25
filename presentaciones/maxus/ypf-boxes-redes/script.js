// ===== Lightbox (visor: ver en grande + navegar) =====
const lightbox = document.querySelector('[data-lightbox]');
const lbImg = document.querySelector('[data-lb-img]');
const lbPrev = document.querySelector('[data-lb-prev]');
const lbNext = document.querySelector('[data-lb-next]');
const lbCounter = document.querySelector('[data-lb-counter]');
let lbItems = [], lbIndex = 0, lbOnNav = null;

function lbRender() {
  const it = lbItems[lbIndex];
  if (!it) return;
  lbImg.src = it.src; lbImg.alt = it.alt || '';
  const multi = lbItems.length > 1;
  lbPrev.style.display = multi ? '' : 'none';
  lbNext.style.display = multi ? '' : 'none';
  lbCounter.style.display = multi ? '' : 'none';
  if (multi) {
    lbCounter.innerHTML = '<b>' + (lbIndex + 1) + '</b> / ' + lbItems.length;
    lbPrev.disabled = lbIndex === 0;
    lbNext.disabled = lbIndex === lbItems.length - 1;
  }
}
function lbGo(i) {
  lbIndex = Math.max(0, Math.min(lbItems.length - 1, i));
  lbRender();
  if (lbOnNav) lbOnNav(lbIndex);
}
function openLightbox(items, index, onNav) {
  if (!lightbox) return;
  lbItems = items; lbIndex = index; lbOnNav = onNav || null;
  lbRender();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
if (lightbox) {
  lightbox.addEventListener('click', closeLightbox); // clic en el fondo cierra
  // clics en la imagen / flechas / contador no cierran
  [lbImg, lbPrev, lbNext, lbCounter].forEach((el) => el && el.addEventListener('click', (e) => e.stopPropagation()));
  lbPrev.addEventListener('click', () => lbGo(lbIndex - 1));
  lbNext.addEventListener('click', () => lbGo(lbIndex + 1));
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbGo(lbIndex - 1);
    if (e.key === 'ArrowRight') lbGo(lbIndex + 1);
  });
  // swipe dentro del visor
  let lbStartX = null;
  lbImg.addEventListener('touchstart', (e) => { lbStartX = e.touches[0].clientX; }, { passive: true });
  lbImg.addEventListener('touchend', (e) => {
    if (lbStartX === null) return;
    const dx = e.changedTouches[0].clientX - lbStartX;
    if (Math.abs(dx) > 40) lbGo(lbIndex + (dx < 0 ? 1 : -1));
    lbStartX = null;
  }, { passive: true });
}

// ===== Carruseles =====
document.querySelectorAll('[data-carousel]').forEach((root) => {
  const track = root.querySelector('[data-track]');
  const slides = Array.from(track.children);
  const prevBtn = root.querySelector('[data-prev]');
  const nextBtn = root.querySelector('[data-next]');
  const dotsWrap = root.querySelector('[data-dots]');
  const curEl = root.querySelector('[data-cur]');
  const total = slides.length;
  let index = 0;

  const dots = slides.map((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' is-active' : '');
    d.setAttribute('aria-label', 'Ir a la placa ' + (i + 1));
    d.addEventListener('click', () => go(i));
    dotsWrap.appendChild(d);
    return d;
  });

  function go(i) {
    index = Math.max(0, Math.min(total - 1, i));
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('is-active', di === index));
    if (curEl) curEl.textContent = String(index + 1);
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;
  }

  prevBtn && prevBtn.addEventListener('click', () => go(index - 1));
  nextBtn && nextBtn.addEventListener('click', () => go(index + 1));

  root.tabIndex = 0;
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
  });

  // swipe / drag (con detección de movimiento para no confundir con un click)
  let startX = null, dragging = false, moved = false;
  const frame = root.querySelector('.frame');
  const onDown = (x) => { startX = x; dragging = true; moved = false; };
  const onMove = (x) => { if (dragging && startX !== null && Math.abs(x - startX) > 10) moved = true; };
  const onUp = (x) => {
    if (!dragging || startX === null) return;
    const dx = x - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    dragging = false; startX = null;
  };
  frame.addEventListener('touchstart', (e) => onDown(e.touches[0].clientX), { passive: true });
  frame.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX), { passive: true });
  frame.addEventListener('touchend', (e) => onUp(e.changedTouches[0].clientX), { passive: true });
  frame.addEventListener('mousedown', (e) => { e.preventDefault(); onDown(e.clientX); });
  window.addEventListener('mousemove', (e) => onMove(e.clientX));
  window.addEventListener('mouseup', (e) => onUp(e.clientX));

  // datos del grupo para el visor
  const groupItems = slides.map((s) => { const im = s.querySelector('img'); return { src: im.src, alt: im.alt }; });
  // click en la imagen -> visor con navegación (si no fue un arrastre)
  slides.forEach((slide, si) => {
    const img = slide.querySelector('img');
    img.addEventListener('click', () => { if (!moved) openLightbox(groupItems, si, (i) => go(i)); });
  });

  go(0);
});

// ===== Click en la story -> visor (una sola imagen, sin flechas) =====
document.querySelectorAll('.story-img').forEach((img) => {
  img.addEventListener('click', () => openLightbox([{ src: img.src, alt: img.alt }], 0, null));
});

// ===== Nav background on scroll =====
const nav = document.querySelector('.nav');
const onScroll = () => { if (nav) nav.classList.toggle('scrolled', window.scrollY > 40); };
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Reveal on scroll =====
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); } });
}, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => revObs.observe(el));

// ===== Smooth anchor scroll =====
document.addEventListener('click', (ev) => {
  const a = ev.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length < 2) return;
  const t = document.querySelector(id);
  if (!t) return;
  ev.preventDefault();
  window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 66, behavior: 'smooth' });
});
