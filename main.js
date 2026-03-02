gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.from('.hero h2', { opacity: 0, y: 80, duration: 1 });
gsap.from('.hero p', { opacity: 0, y: 50, delay: 0.3 });
gsap.from('.hero button', { opacity: 0, scale: 0.7, delay: 0.6 });

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight - 100;
  reveals.forEach(sec => {
    if (sec.getBoundingClientRect().top < trigger) {
      sec.classList.add('active');
    }
  });
});

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15 });
});

//Event entry
