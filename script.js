/* SAFE INIT */
document.addEventListener('DOMContentLoaded', () => {

  const hero = document.querySelector(".hero");
  const heroLeft = document.querySelector('.hero-left');
  const heroImg = document.querySelector('.hero-right img');
  const accents = document.querySelectorAll('.accent');

  let mouseX = 0;
  let mouseY = 0;

  /* ================= PARALLAX (LIGHT) ================= */
  if (hero && heroLeft && heroImg) {
    hero.addEventListener("mousemove", (e) => {
      mouseX = (window.innerWidth / 2 - e.clientX) / 120;  // smoother
      mouseY = (window.innerHeight / 2 - e.clientY) / 120;
    });

    anime({
      targets: {},
      update: () => {
        heroLeft.style.transform =
          `translate(${mouseX * 0.4}px, ${mouseY * 0.4}px)`;

        heroImg.style.transform =
          `translate(${-mouseX * 0.6}px, ${-mouseY * 0.6}px)`;

        accents.forEach(el => {
          el.style.transform =
            `translate(${mouseX}px, ${mouseY}px)`;
        });
      },
      duration: Infinity,
      easing: 'linear'
    });
  }

  /* ================= TEXT REVEAL ================= */
  anime({
    targets: '.hero-title span',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(80),
    duration: 600,
    easing: 'easeOutQuad'
  });

  /* ================= SCROLL INDICATOR ================= */
  anime({
    targets: '.scroll-indicator span',
    opacity: [0.3, 1],
    delay: anime.stagger(300),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

  anime({
    targets: '.scroll-indicator',
    translateY: [-8, 8],
    duration: 2500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

  /* ================= MOBILE NAV ================= */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

});