window.addEventListener("load", () => {

  anime.timeline({
    easing: 'easeOutExpo'
  })

  /* TEXT */
  .add({
    targets: '.hero-title span',
    translateY: [40, 0],
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
    scale: [1.05, 1],
    duration: 900
  }, '-=700');

});