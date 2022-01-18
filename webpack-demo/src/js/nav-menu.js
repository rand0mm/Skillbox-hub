function navMenuFunc() {
  document.querySelector('#open-nav-menu-btn').addEventListener('click', () => {
    const headerHeight = document.querySelector('.header').offsetHeight + document.querySelector('.hero').offsetHeight;
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.height = `${headerHeight}px`;
    document.body.classList.add('lock');
    document.querySelector('#nav-menu').classList.add('nav-menu-is');
    setTimeout(() => {
      document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active');
    }, 300);
  });

  document.querySelector('#close-nav-menu-btn').addEventListener('click', () => {
    document.body.classList.remove('lock');
    document.querySelector('#nav-menu').classList.toggle('nav-menu-is-active');
    document.getElementById('nav-menu').removeAttribute('style');
    setTimeout(() => {
      document.querySelector('#nav-menu').classList.remove('nav-menu-is');
    }, 600);
  });
}
export default navMenuFunc;
