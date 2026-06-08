
/* MOBILE MENU */

const menuBtn = document.querySelector('.mobile-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');

if(menuBtn){
menuBtn.addEventListener('click',()=>{
mobileMenu.classList.add('active');
});
}

if(closeBtn){
closeBtn.addEventListener('click',()=>{
mobileMenu.classList.remove('active');
});
}

/* SCROLL ANIMATION */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});

},{threshold:.15});

document.querySelectorAll('.fade-up').forEach(el=>{
observer.observe(el);
});

/* STICKY NAV EFFECT */

window.addEventListener('scroll',()=>{

const nav=document.querySelector('.navbar');

if(window.scrollY > 80){
nav.style.padding='12px 0';
nav.style.boxShadow='0 5px 20px rgba(0,0,0,.15)';
}else{
nav.style.padding='18px 0';
nav.style.boxShadow='none';
}

});
