function scrollHeader() {
  window.addEventListener('scroll', () => {
    const { scrollHeight } = document.documentElement;
    const windowHeight = document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset;
    const scrollBottom = scrollHeight - windowHeight - scrollTop;
    const header = document.querySelector('.header');
    const opacityHedaer = 1 - scrollTop / 900;

    if (scrollBottom < 300) {
      header.style.opacity = 0;
      header.classList.add('hidden');
    }
    if (scrollBottom > 600) {
      console.log(opacityHedaer);
      header.style.opacity = opacityHedaer >= 0 ? opacityHedaer : 0;
      header.classList.remove('hidden');
    }
  });
}

export default scrollHeader;
