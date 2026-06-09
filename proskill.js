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

/* STICKY HEADER */

window.addEventListener('scroll',function(){

const nav = document.querySelector('.navbar');

if(window.scrollY > 50){

nav.style.padding = '14px 0';
nav.style.boxShadow = '0 10px 30px rgba(0,0,0,.15)';

}else{

nav.style.padding = '20px 0';
nav.style.boxShadow = 'none';

}

});

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

});

});
