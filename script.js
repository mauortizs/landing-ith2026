(function () {
  const container = document.querySelector('.aladdin-stars');
  if (!container) return;

  // Mantén una cuenta moderada; más grandes, no necesariamente más cantidad
  const STAR_COUNT = 220;
  const sizes = ['s-xs','s-sm','s-md','s-lg'];
  const weightedSizes = ['s-xs','s-sm','s-sm','s-md','s-md','s-md','s-lg','s-lg'];

  // Crear estrellas
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('span');
    const cls = weightedSizes[Math.floor(Math.random() * weightedSizes.length)];
    star.classList.add('star', cls);

    star.style.left = (Math.random() * 100) + 'vw';
    star.style.top  = (Math.random() * 100) + 'vh';

    // Twinkle base
    const dur = (Math.random() * 3 + 3).toFixed(2); // 3–6s
    const delay = (Math.random() * 6).toFixed(2);   // 0–6s
    star.style.setProperty('--twinkle', dur + 's');
    star.style.animationDelay = delay + 's';

    // Sutil variedad de glow
    if (Math.random() < 0.35) {
      star.style.boxShadow = '0 0 14px rgba(255,255,255,0.95), 0 0 26px rgba(255,255,220,0.70)';
    }

    container.appendChild(star);
  }

  // Sparkle aleatorio
  const stars = Array.from(container.querySelectorAll('.star'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function scheduleSparkle() {
    if (reduceMotion.matches || stars.length === 0) return;

    const n = Math.floor(Math.random() * 3) + 1; // 1–3 destellos por ciclo
    for (let i = 0; i < n; i++) {
      const s = stars[Math.floor(Math.random() * stars.length)];
      if (!s.classList.contains('sparkle')) {
        s.classList.add('sparkle');
        const off = 450 + Math.floor(Math.random() * 250); // 0.45–0.7s
        setTimeout(() => s.classList.remove('sparkle'), off);
      }
    }
    const next = 220 + Math.floor(Math.random() * 260); // 0.22–0.48s
    setTimeout(scheduleSparkle, next);
  }
  scheduleSparkle();

  // Parallax desactivado para evitar bandas oscuras al hacer scroll.
  // Mantén solo la animación de gradiente (skyBreath) en CSS.
  const sky = document.querySelector('.aladdin-skyline-sky');
  const skyline = document.querySelector('.aladdin-skyline');

  function onScroll() {
    // Intencionalmente vacío: no movemos estrellas, cielo ni skyline.
  }
  if (!reduceMotion.matches) {
    // No registramos el listener; dejamos la función por si se reactiva en el futuro.
    // window.addEventListener('scroll', onScroll, { passive: true });
  }
})();

document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const leftArrow = container.querySelector('.left-arrow');
    const rightArrow = container.querySelector('.right-arrow');
    if (!track || !leftArrow || !rightArrow) { return; }

    const updateArrows = () => {
      const scrollLeft = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      leftArrow.style.display = scrollLeft > 10 ? 'block' : 'none';
      rightArrow.style.display = scrollLeft < maxScroll - 10 ? 'block' : 'none';
    };

    updateArrows();
    setTimeout(updateArrows, 0); // ✅ reemplazo compatible

    track.addEventListener('scroll', updateArrows);

    rightArrow.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
    });

    leftArrow.addEventListener('click', () => {
      track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
    });
  });

  const container2 = document.querySelector('.carousel-container.aladdin-cast2');
  if (container2) {
    const track2 = container2.querySelector('.carousel-track');
    const leftArrow2 = container2.querySelector('.left-arrow-cast2');
    const rightArrow2 = container2.querySelector('.right-arrow-cast2');

    const updateArrows2 = () => {
      const scrollLeft = track2.scrollLeft;
      const maxScroll = track2.scrollWidth - track2.clientWidth;
      leftArrow2.style.display = scrollLeft > 10 ? 'block' : 'none';
      rightArrow2.style.display = scrollLeft < maxScroll - 10 ? 'block' : 'none';
    };

    updateArrows2(); // inicial
    setTimeout(updateArrows2, 0); // segundo chequeo

    track2.addEventListener('scroll', updateArrows2);

    rightArrow2.addEventListener('click', () => {
      track2.scrollBy({ left: track2.clientWidth, behavior: 'smooth' });
    });

    leftArrow2.addEventListener('click', () => {
      track2.scrollBy({ left: -track2.clientWidth, behavior: 'smooth' });
    });
  }










  
  const containerTeachers = document.querySelector('.carousel-container.carousel-teachers');
  if (containerTeachers) {
    const track = containerTeachers.querySelector('.carousel-track-teachers');
    const leftArrow = containerTeachers.querySelector('.left-arrow-teachers');
    const rightArrow = containerTeachers.querySelector('.right-arrow-teachers');

    const updateArrows = () => {
      const scrollLeft = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      leftArrow.style.display = scrollLeft > 10 ? 'block' : 'none';
      rightArrow.style.display = scrollLeft < maxScroll - 10 ? 'block' : 'none';
    };

    updateArrows();
    setTimeout(updateArrows, 0);

    track.addEventListener('scroll', updateArrows);

    rightArrow.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
    });

    leftArrow.addEventListener('click', () => {
      track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
    });
  }