const hero = document.querySelector(".hero");

let mouseX = 0;
let mouseY = 0;

/* lower sensitivity */
hero.addEventListener("mousemove", (e) => {
  mouseX = (window.innerWidth / 2 - e.clientX) / 80;
  mouseY = (window.innerHeight / 2 - e.clientY) / 80;
});

/* smooth loop */
anime({
  targets: {},
  update: function () {

    /* very subtle text movement */
    document.querySelector('.hero-left').style.transform =
      `translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)`;

    /* image slightly opposite */
    document.querySelector('.hero-right img').style.transform =
      `translate(${-mouseX * 0.8}px, ${-mouseY * 0.8}px)`;

    /* accents slightly more */
    document.querySelectorAll('.accent').forEach(el => {
      el.style.transform =
        `translate(${mouseX * 1.2}px, ${mouseY * 1.2}px)`;
    });

  },
  duration: Infinity,
  easing: 'linear'
});
anime({
  targets: '.scroll-indicator span',
  opacity: [0.2, 1],
  delay: anime.stagger(300),
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

/* SCROLL INDICATOR FLOAT */
anime({
  targets: '.scroll-indicator',
  translateY: [-10, 10],
  duration: 3000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});