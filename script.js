anime.timeline({
  easing: 'easeOutExpo'
})

/* TEXT ENTRY */
.add({
  targets: '.hero-title span',
  translateY: [60, 0],
  opacity: [0, 1],
  delay: anime.stagger(120),
  duration: 800
})

/* DESCRIPTION */
.add({
  targets: '.desc',
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 600
}, '-=500')

/* BUTTON */
.add({
  targets: '.cta-btn',
  scale: [0.8, 1],
  opacity: [0, 1],
  duration: 500
}, '-=400')

/* IMAGE */
.add({
  targets: '.hero-right img',
  opacity: [0, 1],
  scale: [1.1, 1],
  duration: 1000
}, '-=800')

/* ACCENTS */
.add({
  targets: '.accent',
  opacity: [0, 1],
  scale: [0.5, 1],
  delay: anime.stagger(200),
  duration: 600
}, '-=700');


/* FLOAT LOOP (continuous motion) */
anime({
  targets: '.accent',
  translateY: [-10, 10],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 2000
});