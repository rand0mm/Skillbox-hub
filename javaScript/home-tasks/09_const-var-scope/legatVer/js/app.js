// глобальные переменные
const body = document.querySelector('body');
const btnStart = document.getElementById('btn'); /* кнопка открытия формы для новой игры */
const btnPauseTimer = document.querySelector('.timer-btn'); /* кнопка паузы игры */
const timerValue = document.querySelector('.timer'); /* поле значение таймера */
const appView = document.querySelector('.header__info'); /* окошко отображения сложности */
const background = document.createElement('div');/* фон */
const gameBox = document.querySelector('.game-box'); /* поле игры */
const gameCards = gameBox.childNodes; /* игровые карточки */

let timerInterval; /* вызов функции таймера с интервалом */
let gamePause = false; /* статус паузы игры */
let time = 59; /* изначальное значение таймера */
let numberСards; /* колличество карточек */
let openCard; /* открытая карточка */
let prevOpenCard; /* предыдущая открытая карточка */
let prevPrevOpenCard; /* предпредыдущая открытая карточка */
let flippedСards; /* перевернуто карт */
let needFlippedCards; /* нужно перевернутых карт */

// создаем и возвращаем форму для начала новой игры
const formStart = (() => {
  const startForm = document.createElement('form');/* форма старта */
  const startLabel = document.createElement('label');/* описание для импута */
  const startInput = document.createElement('input');/* поле ввода значений */
  const startBtn = document.createElement('btn');/* начало игры */

  startForm.classList.add('form');
  startLabel.classList.add('label');
  startLabel.setAttribute('for', 'input');
  startLabel.textContent = 'Введите желаемое количество карточек по вертикали/горизонтали';
  startInput.classList.add('input');
  startInput.placeholder = 'Введите четную цифру от 2 до 10';
  startInput.id = 'input';
  startInput.setAttribute('type', 'number');
  startBtn.classList.add('form-btn');
  startBtn.textContent = 'Начать';

  startForm.append(startLabel);
  startLabel.append(startInput);
  startForm.append(startBtn);
  return {
    startForm, /* возвращаем форму для начала игры */
    startInput, /* импут в который вводится значение */
    startBtn,
  };
})();

// создание бекграунда
const appBackground = (() => {
  background.classList.add('background');
  return {
    background, /* фон блокирующий страницу */
  };
})();

// создание окошка конца игры
const gameOver = (() => {
  const gameOverDiv = document.createElement('div');/* поле объявления */
  const gameOverText = document.createElement('p');/* описание объявления */
  const gameOverBtn = document.createElement('btn');/* кнопка начала новой игры */

  gameOverDiv.classList.add('game-over');
  gameOverText.classList.add('game-over__text');
  gameOverBtn.classList.add('game-over__btn');
  gameOverBtn.textContent = 'Сыграть ещё раз?';

  gameOverDiv.append(gameOverText);
  gameOverDiv.append(gameOverBtn);

  return {
    gameOverDiv, /* окно законченной игры */
    gameOverText, /* сообщение об окончании игры */
    gameOverBtn, /* кнопка для вызова новой игры из окна завершения */
  };
})();

// таймер
function timer() {
  // остановка игры если выйдет время
  if (time < 1) {
    clearInterval(timerInterval);
    body.append(appBackground.background);
    gameOver.gameOverText.textContent = 'ИГРА ОКОНЧЕНА, ВЫ ПРОИГРАЛИ';
    body.append(gameOver.gameOverDiv);
  }
  timerValue.textContent = `00:${time}`;
  time -= 1;
}

// таймер игры с обработчиком паузы
function timerGame() {
  time = 59;
  timerValue.textContent = '01:00';
  if (gamePause === false) {
    clearInterval(timerInterval);
    timerInterval = setInterval(timer, 1000);
  }

  btnPauseTimer.addEventListener('click', () => {
    if (gamePause !== true) {
      gamePause = true;
    } else gamePause = false;
    if (gamePause === true) {
      clearInterval(timerInterval);
    } else {
      timerInterval = setInterval(timer, 1000);
    }
  });
  // запуск таймера если пользователь начал дальше играть
  gameCards.forEach((card) => {
    card.addEventListener('click', () => {
      gamePause = false;
      clearInterval(timerInterval);
      timerInterval = setInterval(timer, 1000);
    });
  });
}

// функция для размещения карточек новой игры
function createdNewGeme() {
  openCard = null;
  prevOpenCard = null;
  prevPrevOpenCard = null;
  // проверка на то что бы было четное число от 2 до 10
  if (formStart.startInput.value >= 2 && formStart.startInput.value
    <= 10 && formStart.startInput.value % 2 === 0) {
    numberСards = formStart.startInput.value;
  } else numberСards = '4';
  // удаление всех предыдущих карточек
  while (gameBox.firstChild) {
    gameBox.removeChild(gameBox.firstChild);
  }
  // генерация массива для значений карточек
  let arr = [];
  for (let i = 1; i <= 0.5 * (numberСards * numberСards); i++) {
    arr.push(i);
    arr.push(i);
  }
  // перемешиваем массив
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // обнуляем окошко сложности и значение импута
  appView.textContent = '';
  formStart.startInput.value = '';
  // строим сетку
  gameBox.style.gridTemplateColumns = `repeat(${numberСards}, 1fr)`;
  gameBox.style.gridTemplateRows = `repeat(${numberСards}, 1fr)`;
  // подстраиваем интерфейс относительно заданого в импуте значения
  switch (numberСards) {
    case '2':
      appView.textContent = 'Сложность: Легко';
      break;
    case '6':
      appView.textContent = 'Сложность: Сложно';
      break;
    case '8':
      appView.textContent = 'Сложность: Очень сложно';
      break;
    case '10':
      appView.textContent = 'Сложность: Невозможно';
      break;
    default:
      appView.textContent = 'Сложность: Средне';
  }
  // создаем карточки, добавляем их в поле игры и присваиваем номер
  for (let i = 0; i < arr.length; i++) {
    const card = document.createElement('div');/* карточка для игры */
    gameBox.appendChild(card).className = 'card not-inverted';
    card.textContent = arr[i];
  }
}

// функция обработчик игры
function game() {
  flippedСards = 0; /* нужно перевернуто карт */
  needFlippedCards = numberСards * numberСards; /* нужно перевернутых карт */
  // на каждую карточку присваивается обработчик события клик для игры
  gameCards.forEach((card) => {
    card.addEventListener('click', () => {
      // остлеживание с помощью переменных карточек
      prevPrevOpenCard = prevOpenCard;
      prevOpenCard = openCard;
      openCard = card;
      // обработка уже открытых карточек
      if (prevPrevOpenCard !== null && prevPrevOpenCard !== null
        && prevOpenCard.classList.contains('inverted') && prevPrevOpenCard.classList.contains('inverted')
      ) {
        if (prevPrevOpenCard.textContent === prevOpenCard.textContent) {
          prevPrevOpenCard.classList.add('inverted-const');
          prevPrevOpenCard.classList.remove('not-inverted');
          prevOpenCard.classList.add('inverted-const');
          prevOpenCard.classList.remove('not-inverted');
        } else if (
          !prevOpenCard.classList.contains('inverted-const') && !prevPrevOpenCard.classList.contains('inverted-const')) {
          prevOpenCard.classList.remove('inverted');
          prevOpenCard.classList.add('not-inverted');
          prevPrevOpenCard.classList.remove('inverted');
          prevPrevOpenCard.classList.add('not-inverted');
          flippedСards -= 2;
        }
      }
      // переворот карточки
      if (!openCard.classList.contains('inverted-const')) {
        card.classList.add('inverted'); /* присвоение класса "перевернутый" */
        card.classList.remove('not-inverted'); /* присвоение класса "не перевернутый" */
        flippedСards += 1;
      }
      // конец игры если все карты перевернуты
      setTimeout(() => {
        if (flippedСards === needFlippedCards) {
          clearInterval(timerInterval);
          body.append(appBackground.background);
          gameOver.gameOverText.textContent = 'ПОЗДРАВЛЯЕМ, ВЫ ПОБЕДИЛИ';
          body.append(gameOver.gameOverDiv);
        }
      }, 800);
    });
  });
}

// полное приложение
function appCouples() {
  // вызов функции создания новой игры
  createdNewGeme();
  // запускаем игру
  game();
  // запускаем таймер
  timerGame();
}

// обработчики событий
document.addEventListener('DOMContentLoaded', () => {
  // создаем форму для ввода значений
  btnStart.addEventListener('click', () => {
    body.append(appBackground.background);
    body.append(formStart.startForm);
  });
  // закрыть форму или конец игры без начала игры при нажатии на бекграунд
  appBackground.background.addEventListener('click', () => {
    formStart.startForm.remove();
    appBackground.background.remove();
    gameOver.gameOverDiv.remove();
  });

  // старт новой игры
  formStart.startForm.addEventListener('submit', (e) => {
    e.preventDefault(); /* блокируется отправка формы */
    // вызов функции приложения с новой игрой
    appCouples();
    // закрытие формы старта после создания игры
    formStart.startForm.remove();
    appBackground.background.remove();
  });
  formStart.startBtn.addEventListener('click', () => {
    appCouples();
    formStart.startForm.remove();
    appBackground.background.remove();
  });
  // создание формы после конца игры
  gameOver.gameOverBtn.addEventListener('click', () => {
    gameOver.gameOverDiv.remove();
    body.append(appBackground.background);
    body.append(formStart.startForm);
  });
});
