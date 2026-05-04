anime.timeline({
  easing: 'easeOutExpo',
  duration: 800
})
.add({
  targets: '.hero-title span',
  translateY: [40, 0],
  opacity: [0, 1],
  delay: anime.stagger(150)
});