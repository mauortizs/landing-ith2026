

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

  const container2 = document.querySelector('.carousel-container.ith-cast2');
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