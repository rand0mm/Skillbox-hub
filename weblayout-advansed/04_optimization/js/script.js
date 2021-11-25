// menu
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-menu').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active');
        document.querySelector('#img-open').classList.toggle('is-active');
        document.querySelector('#img-close').classList.toggle('is-active');
    })
})
// tabs
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click',function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})
// jquery
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'boolean'
  },
});

$(function () {
  $("#accordion").accordion({
    active: false,
    collapsible: true,
    heightStyle: "content"
  });
});

// lazyload
lazyload()
