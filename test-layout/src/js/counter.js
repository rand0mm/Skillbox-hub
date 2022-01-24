function counter() {
  const countBtns = document.querySelectorAll('.counter__btn');
  const countDisplay = document.querySelector('.counter__display');
  countBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.textContent === '+') {
        countDisplay.textContent = parseInt(`${countDisplay.textContent}`, 10) + 1;
      } else if (e.target.textContent === '-') {
        if (countDisplay.textContent >= 1) {
          countDisplay.textContent -= 1;
        }
      }
    });
  });
}

export default counter;
