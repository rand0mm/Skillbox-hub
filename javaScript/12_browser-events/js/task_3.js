document.addEventListener('DOMContentLoaded', event => {
  const btn = document.querySelector('.btn')

  window.addEventListener('scroll', el => {
    if(window.pageYOffset > 100 ) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none'
    }
  }, {passive: true})

  btn.addEventListener('click', () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  })
})
