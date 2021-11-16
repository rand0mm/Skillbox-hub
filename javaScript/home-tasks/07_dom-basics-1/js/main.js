// таймер с кнопкой запуска
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const timerValue = document.querySelector('.timer-value');
const container = document.querySelector('.container');
const timerFunc = function() {
  if(timerValue.textContent <= 0) {
    timerValue.textContent--;
  } else {
    clearInterval(timerFuncInterval);
  }
}
let timerFuncInterval;

document.addEventListener('DOMContentLoaded', function () {
  btn.addEventListener('click', function timer() {
    if (inp.value > 0) {
      timerValue.textContent = `${inp.value}`;
      var timerFuncInterval = clearInterval(timerFuncInterval);
      timerFuncInterval = setInterval(timerFunc, 1000);
    }

  })

// Вывод в диве того что в инпуте с задержкой в 0.3с
  const newDiv = document.createElement("div");
  const newH2 = document.createElement("h2");
  const newInp = document.createElement("input");
  newInp.classList.add('h2');
  newInp.classList.add('inp');
  newH2.innerHTML = "Привет!";
  container.append(newDiv);
  container.append(newInp);
  newDiv.append(newH2);
  newInp.addEventListener('input', function() {
    if(timeOut) {
      var timeOut = clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        newH2.textContent = newInp.value;
      }, 300)
    } else {
      timeOut = setTimeout(function() {
        newH2.textContent = newInp.value;
      }, 300)
    }

  });
});

