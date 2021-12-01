function timeoutMenu() {setTimeout(function() {
  gsap.fromTo(".nav__list", {y: 70}, {duration: 1, y: 0, opacity: 1});
}, 500)};
function timeoutText(){setTimeout(function() {
  gsap.fromTo(".social",{y: 20}, {duration: 1.2, y: 0, opacity: 1});
  gsap.fromTo(".menu__right",{y: 20}, {duration: 1.2, y: 0, opacity: 1});
}, 1200)};

// открытие меню
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#btn-open').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('menu--open');
      gsap.to(".menu", {duration: 1.5, opacity: 1});
      gsap.to(".menu__top", {duration: 0.4, opacity: 1});
      clearTimeout(timeoutMenu());
      clearTimeout(timeoutText());
  });

  document.querySelector('#btn-closed').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu--open');
    // возврат изначальных значений
    gsap.to(".menu", {duration: 0, opacity: 0});
    gsap.to(".nav__list",{duration:0, opacity: 0});
    gsap.to(".menu__top", {duration: 0, opacity: 0});
    gsap.to(".social", {duration: 0, opacity: 0});
    gsap.to(".menu__right", {duration: 0, opacity: 0});
})
})

// анимации загрузки
gsap.fromTo(".hero__title", {y: 70}, {duration: 1, opacity: 1, y: 0});
gsap.fromTo(".hero__btn", {y: 70}, {duration: 1, opacity: 1, y: 0});
setTimeout(function(){
  gsap.to(".hero__descr", {duration: 1, opacity: 1});
}, 1100);
setTimeout(function(){
  gsap.fromTo("#image-one", {scale: 0.5}, {duration: 1, opacity: 1, scale: 1});
}, 1300);
setTimeout(function(){
  gsap.fromTo("#image-two", {scale: 0.5}, {duration: 1, opacity: 1, scale: 1});
}, 1600);
setTimeout(function(){
  gsap.fromTo("#image-three", {scale: 0.5}, {duration: 1, opacity: 1, scale: 1});
}, 1900);
setTimeout(function(){
  gsap.to(".photos__author", {duration: 3, opacity: 1});
}, 1950);



