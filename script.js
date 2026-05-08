/* ================= HERO PARALLAX (index.html) ================= */

const hero = document.querySelector(".hero");

if (hero) {
  let mouseX = 0;
  let mouseY = 0;

  /* TEXT REVEAL ON PAGE LOAD */
  anime({
    targets: '.hero-title span',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: anime.stagger(100),
    duration: 800,
    easing: 'easeOutElastic(1, .6)'
  });

  /* lower sensitivity */
  hero.addEventListener("mousemove", (e) => {
    mouseX = (window.innerWidth / 2 - e.clientX) / 80;
    mouseY = (window.innerHeight / 2 - e.clientY) / 80;
  });

  /* smooth loop */
  anime({
    targets: {},
    update: function () {

      /* image slightly opposite */
      const heroRightImg = document.querySelector('.hero-right img');
      if (heroRightImg) {
        heroRightImg.style.transform =
          `translate(${-mouseX * 0.8}px, ${-mouseY * 0.8}px)`;
      }

      /* accents slightly more */
      document.querySelectorAll('.accent').forEach(el => {
        el.style.transform =
          `translate(${mouseX * 1.2}px, ${mouseY * 1.2}px)`;
      });

      /* overlay parallax */
      document.querySelectorAll('.overlay-wire, .overlay-cross, .overlay-line').forEach(el => {
        el.style.transform =
          `translate(${mouseX * 1.2}px, ${mouseY * 1.2}px)`;
      });

    },
    duration: Infinity,
    easing: 'linear'
  });
}

/* ================= CCTV PARALLAX (pages/cctv.html) ================= */

const cctvHero = document.querySelector(".cctv-hero");

if (cctvHero) {
  let cctvMouseX = 0;
  let cctvMouseY = 0;

  /* TEXT REVEAL ON PAGE LOAD */
  anime({
    targets: '.cctv-hero-title span',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: anime.stagger(100),
    duration: 800,
    easing: 'easeOutElastic(1, .6)'
  });

  /* CCTV PARALLAX */
  cctvHero.addEventListener("mousemove", (e) => {
    cctvMouseX = (window.innerWidth / 2 - e.clientX) / 100;
    cctvMouseY = (window.innerHeight / 2 - e.clientY) / 100;
  });

  anime({
    targets: {},
    update: function () {
      /* text subtle movement */
      const cctvLeft = document.querySelector('.cctv-hero-left');
      if (cctvLeft) {
        cctvLeft.style.transform =
          `translate(${cctvMouseX * 0.4}px, ${cctvMouseY * 0.4}px)`;
      }

      /* image opposite movement */
      const cctvMainImg = document.querySelector('.cctv-main-image');
      if (cctvMainImg) {
        cctvMainImg.style.transform =
          `translate(${-cctvMouseX * 0.7}px, ${-cctvMouseY * 0.7}px)`;
      }

      /* wireframe overlay slightly different */
      const cctvWireframe = document.querySelector('.cctv-wireframe-overlay');
      if (cctvWireframe) {
        cctvWireframe.style.transform =
          `translate(${-cctvMouseX * 0.5}px, ${-cctvMouseY * 0.5}px)`;
      }

      /* red accent more movement */
      const cctvAccents = document.querySelectorAll('.cctv-hero-right .accent');
      cctvAccents.forEach(el => {
        el.style.transform =
          `translate(${cctvMouseX * 1.3}px, ${cctvMouseY * 1.3}px)`;
      });
    },
    duration: Infinity,
    easing: 'linear'
  });
}

/* ================= SOLAR PARALLAX (pages/solar.html) ================= */

const solarHero = document.querySelector(".solar-hero");

if (solarHero) {
  let solarMouseX = 0;
  let solarMouseY = 0;

  /* TEXT REVEAL ON PAGE LOAD */
  anime({
    targets: '.solar-hero-title span',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: anime.stagger(100),
    duration: 800,
    easing: 'easeOutElastic(1, .6)'
  });

  /* SOLAR PARALLAX */
  solarHero.addEventListener("mousemove", (e) => {
    solarMouseX = (window.innerWidth / 2 - e.clientX) / 120;
    solarMouseY = (window.innerHeight / 2 - e.clientY) / 120;
  });

  anime({
    targets: {},
    update: function () {
      /* image opposite movement (subtle) */
      const solarMainImg = document.querySelector('.solar-main-image');
      if (solarMainImg) {
        solarMainImg.style.transform =
          `translate(${-solarMouseX * 0.5}px, ${-solarMouseY * 0.5}px)`;
      }

      /* wireframe overlay slightly different */
      const solarWireframe = document.querySelector('.solar-wireframe-overlay');
      if (solarWireframe) {
        solarWireframe.style.transform =
          `translate(${-solarMouseX * 0.3}px, ${-solarMouseY * 0.3}px)`;
      }

      /* yellow accent more movement */
      const solarAccents = document.querySelectorAll('.solar-hero-right .accent.yellow');
      solarAccents.forEach(el => {
        el.style.transform =
          `translate(${solarMouseX * 1.1}px, ${solarMouseY * 1.1}px)`;
      });
    },
    duration: Infinity,
    easing: 'linear'
  });

  /* FLOATING SHAPES ANIMATION */
  anime({
    targets: '.solar-float-shape',
    translateX: function() { return anime.random(-15, 15); },
    translateY: function() { return anime.random(-15, 15); },
    duration: 18000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    delay: anime.stagger(2000)
  });
}
/* ================= COMPUTER PARALLAX (pages/computer.html) ================= */

const computerHero = document.querySelector(".computer-hero");

if (computerHero) {
  let computerMouseX = 0;
  let computerMouseY = 0;

  /* TEXT REVEAL ON PAGE LOAD */
  anime({
    targets: '.computer-hero-title span',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: anime.stagger(100),
    duration: 800,
    easing: 'easeOutElastic(1, .6)'
  });

  /* COMPUTER PARALLAX */
  computerHero.addEventListener("mousemove", (e) => {
    computerMouseX = (window.innerWidth / 2 - e.clientX) / 100;
    computerMouseY = (window.innerHeight / 2 - e.clientY) / 100;
  });

  anime({
    targets: {},
    update: function () {
      /* text subtle movement */
      const computerLeft = document.querySelector('.computer-hero-left');
      if (computerLeft) {
        computerLeft.style.transform =
          `translate(${computerMouseX * 0.4}px, ${computerMouseY * 0.4}px)`;
      }

      /* image opposite movement */
      const computerMainImg = document.querySelector('.computer-main-image');
      if (computerMainImg) {
        computerMainImg.style.transform =
          `translate(${-computerMouseX * 0.7}px, ${-computerMouseY * 0.7}px)`;
      }

      /* wireframe overlay slightly different */
      const computerWireframe = document.querySelector('.computer-wireframe-overlay');
      if (computerWireframe) {
        computerWireframe.style.transform =
          `translate(${-computerMouseX * 0.5}px, ${-computerMouseY * 0.5}px)`;
      }

      /* blue accent more movement */
      const computerAccents = document.querySelectorAll('.computer-hero-right .accent.blue');
      computerAccents.forEach(el => {
        el.style.transform =
          `translate(${computerMouseX * 1.3}px, ${computerMouseY * 1.3}px)`;
      });
    },
    duration: Infinity,
    easing: 'linear'
  });
}

/* SCROLL INDICATOR ANIMATION (index.html only) */
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
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
}

/* ================= REVEAL ANIMATION (Scroll-triggered) ================= */

function handleReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
        anime({
          targets: element,
          opacity: [0, 1],
          translateY: [60, 0],
          duration: 800,
          easing: 'easeOutCubic'
        });
      }
    }
  });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

/* ================= MOBILE MENU TOGGLE ================= */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    /* Close menu when a link is clicked */
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    /* Close menu when clicking outside */
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

  /* Trigger initial reveal check */
  handleReveal();
});
