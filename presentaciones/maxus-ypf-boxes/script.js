// Reveal on scroll
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => revObs.observe(el));

// Nav background on scroll
const nav = document.querySelector('.nav');
const onScroll = () => { nav.classList.toggle('scrolled', window.scrollY > 40); };
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Smooth anchor scroll with nav offset
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
