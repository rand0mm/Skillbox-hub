/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
const btnPause = document.querySelector('.game__btn-pause');
const btnNewApp = document.querySelector('.game__btn-start');
const appBox = document.querySelector('.game__box');
const appInit = document.querySelector('.btn-start');
const initForm = document.querySelector('.form');
const initFormInput = initForm.querySelector('.input');
const appTimer = document.getElementById('app');
const appView = document.querySelector('.level-text');
const progress = document.querySelector('.progress-bar');

let cardValue;
let prevprevCard;
let prevCard;
let couples = null;
let openCouples = null;
let timeOut;
let scale = 4;
const timeLimit = 60;
const timePassed = 0;
let timeLeft = 60;
let timerInterval = null;
let pauseON = false;
let timePaused = null;
let progressBar = null;

// timer
appTimer.innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft,
  )}</span>
  </div>
`;

appInit.setAttribute('disabled', 'disabled');

function startTimer(timeLimit) {
  btnPause.removeAttribute('disabled');
  let timePassed = 0;
  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = timeLimit - timePassed;
    document.querySelector('.base-timer__label').innerHTML = formatTime(
      timeLeft,
    );
    if (timeLeft < 1) {
      stopApp(false);
      clearInterval(timerInterval);
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
// timer

// ?????????????????? ?????????? ????????????
initFormInput.addEventListener('input', () => {
  if (timeOut) {
    timeOut = clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      if (initFormInput.value !== '') {
        appInit.removeAttribute('disabled');
        if (initFormInput.value >= 2 && initFormInput.value <= 10) {
          scale = initFormInput.value;
        } else {
          scale = 4;
        }
      } else {
        appInit.setAttribute('disabled', 'disabled');
      }
    }, 300);
  } else {
    timeOut = setTimeout(() => {
      if (initFormInput.value !== '') {
        appInit.removeAttribute('disabled');
        if (initFormInput.value >= 2 && initFormInput.value <= 10) {
          scale = initFormInput.value;
        } else {
          scale = 4;
        }
      } else {
        appInit.setAttribute('disabled', 'disabled');
      }
    }, 300);
  }
});

// ??????????????  ?????????????????? ????????????????????
function stopApp(status) {
  if (!status) {
    const curentModal = document.getElementById('modal_2');
    appBox.removeEventListener('click', appGame, false);
    btnPause.removeEventListener('click', stopTimer);
    btnPause.setAttribute('disabled', 'disabled');
    modalOpen(curentModal);
  } else if (status) {
    const curentModal = document.getElementById('modal_1');
    appBox.removeEventListener('click', appGame, false);
    btnPause.setAttribute('disabled', 'disabled');
    btnPause.removeEventListener('click', stopTimer);
    modalOpen(curentModal);
  }
}

// ?????????? ??????????????
function stopTimer() {
  if (!pauseON) {
    document.querySelector('.base-timer__label').innerHTML = formatTime(
      timeLeft,
    );
    pauseON = true;
    timePaused = timeLeft;
    clearInterval(timerInterval);
  } else {
    pauseON = false;
    clearInterval(timerInterval);
    startTimer(timePaused);
  }
}

// ?????????????????????? ????????????????
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ???????????????????? ??????????
function makeRows(rows, cols, arr) {
  progress.style.width = `${0}%`;
  appView.textContent = '';
  appBox.innerHTML = '';
  switch (rows) {
    case '2':
      appView.textContent += ' Easy';
      break;
    case '4':
      appView.textContent += ' Medium';
      break;
    case '6':
      appView.textContent += ' Heavy';
      break;
    case '8':
      appView.textContent += ' Very hard';
      break;
    case '10':
      appView.textContent += ' Impossible';
      break;
    default:
      appView.textContent += ' Medium';
  }
  appBox.style.setProperty('--grid-rows', rows);
  appBox.style.setProperty('--grid-cols', cols);
  for (const el of arr) {
    const card = document.createElement('div');
    appBox.appendChild(card).className = 'grid-item';
    card.innerHTML = `<div class="flipper"><div class="front"></div><div class="back">${el}</div></div>`;
  }
}

// ?????????????? ????????????????????
const appGame = function (event) {
  const { target } = event;
  if (!target.closest('.grid-item')) {
    return;
  }
  if (target.closest('.flip')) {
    return;
  }
  target.closest('.grid-item').classList.toggle('flip');
  if (prevCard && prevprevCard) {
    prevCard.closest('.grid-item').classList.remove('flip');
    prevprevCard.closest('.grid-item').classList.remove('flip');
    cardValue = target.parentNode.lastChild.textContent;
    prevprevCard = undefined;
    prevCard = target;
    cardValue = target.parentNode.lastChild.textContent;
    prevCard = target;
    return;
  }
  if (prevCard) {
    prevprevCard = prevCard;
    prevCard = target;
    if (cardValue === target.parentNode.lastChild.textContent) {
      prevprevCard.closest('.grid-item').classList.remove('flip');
      prevCard.closest('.grid-item').classList.remove('flip');
      prevprevCard.closest('.grid-item').classList.add('fliped');
      prevCard.closest('.grid-item').classList.add('fliped');
      prevprevCard = undefined;
      prevCard = undefined;
      openCouples += 1;
      progressBar += 100 / couples;
      progress.style.width = `${progressBar}%`;
      if (openCouples === couples) {
        stopApp(true);
        clearInterval(timerInterval);
      }
    }
  } else {
    cardValue = target.parentNode.lastChild.textContent;
    prevCard = target;
  }

  if (pauseON) {
    pauseON = false;
    clearInterval(timerInterval);
    startTimer(timePaused);
  }
};

const startApp = (e) => {
  if (e) e.preventDefault();
  appBox.removeEventListener('click', appGame, false);
  couples = scale * (scale / 2);
  // eslint-disable-next-line prefer-spread
  let cardsArr = Array.apply(null, { length: couples }).map((currentElement, i) => i + 1);
  cardsArr = cardsArr.concat(cardsArr);
  shuffle(cardsArr);
  initFormInput.value = '';
  startTimer(60);
  cardValue = '';
  appInit.setAttribute('disabled', 'disabled');
  makeRows(scale, scale, cardsArr);
  appBox.addEventListener('click', appGame, false);
  btnPause.addEventListener('click', stopTimer);
  stopTimer();
  // ?????????? ????????????????????
  btnNewApp.addEventListener('click', () => {
    clearInterval(timerInterval);
  });
};

// ?????????? ????????????????????
initForm.addEventListener('submit', startApp);
window.onload = startApp();
