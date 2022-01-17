// переменные для начала игры
const btnFormStart = document.querySelector('.btn'); /*кнопка открытия формы для новой игры*/
// const gameBox = document.querySelector('.game-box');/*поле игры*/
// const gameCard = document.querySelector('.card');/*карточка игры*/
// const gameCardFlipper = document.querySelector('.flipper');/*перевернуть карточку*/


// создаем и возвращаем форму для начала новой игры
function createFormStart() {
  const startForm = document.createElement('form');/*форма старта*/
  const startLabel = document.createElement('label');/*описание для импута*/
  const startInput = document.createElement('input');/*поле ввода значений*/
  const startBtn = document.createElement('btn');/*начало игры*/

  startForm.classList.add('.form');
  startLabel.classList.add('.label');
  startLabel.setAttribute('for', 'input')
  startLabel.textContent = 'Введите желаемое количество карточек по вертикали/горизонтали'
  startInput.classList.add('.input');
  startInput.id = 'input'
  startBtn.classList.add('.game-over__btn')
  startBtn.textContent = 'Сыграть ещё раз?'
  // атрибут disabled при создании формы
  startBtn.setAttribute('disabled', 'disabled');

  startForm.append(startLabel);
  startLabel.append(startInput);
  startForm.append(startBtn);

  return {
    startForm,
    startInput,
    startBtn,
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const btnFormStart = document.querySelector('.btn'); /*кнопка открытия формы для новой игры*/

  // создаем и возвращаем форму для начала новой игры
  const createFormStart = function createFormStart() {
  const startForm = document.createElement('form');/*форма старта*/
  const startLabel = document.createElement('label');/*описание для импута*/
  const startInput = document.createElement('input');/*поле ввода значений*/
  const startBtn = document.createElement('btn');/*начало игры*/

  startForm.classList.add('.form');
  startLabel.classList.add('.label');
  startLabel.setAttribute('for', 'input')
  startLabel.textContent = 'Введите желаемое количество карточек по вертикали/горизонтали'
  startInput.classList.add('.input');
  startInput.id = 'input'
  startBtn.classList.add('.game-over__btn')
  startBtn.textContent = 'Сыграть ещё раз?'
  // атрибут disabled при создании формы
  startBtn.setAttribute('disabled', 'disabled');

  startForm.append(startLabel);
  startLabel.append(startInput);
  startForm.append(startBtn);

  return {
    startForm,
    startInput,
    startBtn,
  };
}


  btnFormStart.addEventListener('click', () => {
    document.append(createFormStart.form)
  });
})