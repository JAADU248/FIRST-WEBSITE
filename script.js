const elements = document.querySelectorAll('.reveal');

function animateOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger && !el.classList.contains('done')) {
      
      anime({
        targets: el,
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      });

      el.classList.add('done');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);