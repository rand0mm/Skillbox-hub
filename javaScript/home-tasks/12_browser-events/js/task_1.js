document.addEventListener('DOMContentLoaded', event => {
  const dropBtn = document.querySelector('.dropdown-toggle');
  const dropList = document.querySelector('.dropdown-menu')

  dropBtn.addEventListener('click', () => {
    if(dropList.style.display === 'block') {
      dropList.style.display = 'none';
      return;
    }
    dropList.style.display = 'block';
  })

  window.addEventListener('click', event => {
    if(event.target.closest('.dropdown')) return;
    dropList.style.display = 'none';
  })
})
