document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      document.querySelectorAll('.tabs__btn').forEach(function(tabContent){
        tabContent.classList.remove('tabs__item-active')
      })
      event.target.classList.toggle('tabs__item-active')
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})
