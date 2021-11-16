window.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 2,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickableClass: 'swiper-pagination-clickable',
      clickable: true,
    },
  });
})
