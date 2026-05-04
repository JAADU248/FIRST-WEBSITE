anime({
  targets: '.hero-left',
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutExpo'
});
anime({
  targets: '.cta-btn',
  scale: [0.8, 1],
  opacity: [0, 1],
  delay: 300,
  duration: 800,
  easing: 'easeOutBack'
});
anime({
  targets: '.accent',
  translateY: [-10, 10],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 2000
});