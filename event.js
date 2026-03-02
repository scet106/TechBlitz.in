gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.event-card').forEach(card => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
});

