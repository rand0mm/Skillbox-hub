// таймер с кнопкой запуска
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const timerValue = document.querySelector('.timer-value');
const container = document.querySelector('.container');
const timerFunc = () => {
  if(timerValue.textContent > 0) {
    timerValue.textContent--;
  } else {
    clearInterval(timerFuncInterval);
  }
}
const delay = () => {
  newH2.textContent = newInp.value;
}
let timerFuncInterval;
let timeOut;


function timer() {
  if (Math.ceil(inp.value) > 0) {
    timerValue.textContent = `${Math.ceil(inp.value)}`;
    timerFuncInterval = clearInterval(timerFuncInterval);
    timerFuncInterval = setInterval(timerFunc, 1000);
  }
}

btn.addEventListener('click', timer)

// Вывод в диве того что в инпуте с задержкой в 0.3с
const newDiv = document.createElement("div");
const newH2 = document.createElement("h2");
const newInp = document.createElement("input");
newH2.classList.add('h2');
newInp.classList.add('inp');
newH2.innerHTML = "Привет!";
container.append(newDiv);
container.append(newInp);
newDiv.append(newH2);


newInp.addEventListener('input', function() {

  timeOut = clearTimeout(timeOut);

  timeOut = setTimeout(delay, 300)

});

