function burger() {
  const btnClose = document.querySelector('.burger__close');
  const btnOpen = document.querySelector('.burger-open-btn');
  const burgerMenu = document.querySelector('.burger');
  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.remove('anim');
    setTimeout(() => {
      burgerMenu.classList.remove('is-open');
    }, 600);
  });
  btnOpen.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.add('is-open');
    setTimeout(() => {
      burgerMenu.classList.add('anim');
    }, 60);
  });
}
export default burger;
