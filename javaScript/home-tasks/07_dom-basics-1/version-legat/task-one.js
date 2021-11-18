document.addEventListener('DOMContentLoaded', function() {
  let inputValue = document.querySelector('.input');
  let button = document.querySelector('.button');
  let timerValue = document.querySelector('.timer');
  let timerInterval;
  function paintNumber() {
    timerValue.textContent = inputValue.value;
  };

  inputValue.addEventListener('input', paintNumber);

  function timer() {
    timerValue.textContent--;
    if (timerValue.textContent < 1) {
      clearInterval(timerInterval);
      timerValue.textContent = 0;
      return timerValue.textContent;
    }
  }


  button.addEventListener('click', function() {
    timerValue.textContent = inputValue.value;
    clearInterval(timerInterval);
    timerInterval = setInterval(timer, 1000);
  });
});

