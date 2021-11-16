const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const timerValue = document.querySelector('.timer-value');
const container = document.querySelector('.container');
const timerFunc = function() {
  timerValue.textContent--;
  if (timerValue.textContent == 0) {
    clearInterval(timerFuncInterval);
  }
}
let timerFuncInterval;
let timeOut;

document.addEventListener('DOMContentLoaded', function () {
  btn.addEventListener('click', function timer() {
    timerValue.textContent = `${inp.value}`;
      timerFuncInterval = clearInterval(timerFuncInterval);
      timerFuncInterval = setInterval(timerFunc, 1000);
  })


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
      timeOut = clearTimeout(timeOut);
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

