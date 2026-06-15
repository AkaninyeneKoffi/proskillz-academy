// Mobile menu
const toggle = document.querySelector('.mobile-toggle');
const menu   = document.getElementById('mobileMenu');
const close  = document.getElementById('closeMenu');

if(toggle) toggle.addEventListener('click', () => menu.classList.add('active'));
if(close)  close.addEventListener('click',  () => menu.classList.remove('active'));

// Scroll fade-up
const faders = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.15 });
faders.forEach(el => observer.observe(el));
