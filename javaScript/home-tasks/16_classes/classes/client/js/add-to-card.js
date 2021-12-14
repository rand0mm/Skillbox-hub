/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import BaseComponent from './base-component.js';

// для теста, с ошибком вернуть реджек без ошибки вернуть резолв
function wait(ms) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// сам класс
export default class AddToCartComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    this.count = null;
  }

  set count(value) {
    this._count = value;
    if (this.countDisplay) this.countDisplay.textContent = value;
  }

  get count() {
    return this._count;
  }

  //  возвращаем html представление
  getElement() {
    if (this.count > 0) {
      const root = document.createElement('div');
      const plusBtn = document.createElement('button');
      const minusBtn = document.createElement('button');
      const countDisplay = document.createElement('div');

      countDisplay.classList.add('text-center', 'flex-fill');
      root.classList.add('d-flex', 'flex-fill');
      plusBtn.classList.add('btn', 'btn-primary');
      minusBtn.classList.add('btn', 'btn-primary');
      plusBtn.textContent = '+';
      minusBtn.textContent = '-';
      countDisplay.textContent = this.count;

      this.countDisplay = countDisplay;

      plusBtn.addEventListener('click', () => {
        this.count += 1;
        this.inst();
      });

      minusBtn.addEventListener('click', () => {
        this.count -= 1;
        this.inst();
      });

      root.append(plusBtn, countDisplay, minusBtn);
      return root;
    }
    const addBtn = document.createElement('button');
    addBtn.classList.add('btn', 'btn-primary');
    addBtn.textContent = 'Добавить в корзину';
    addBtn.addEventListener('click', () => {
      this.count += 1;
      this.inst();
    });
    return addBtn;
  }

  // получаем кол-во нажатий (сюда должна вставляться работа с АПИ) но тут wait для теста
  async inst() {
    this.selector.innerHTML = '';
    if (this.instRoot) {
      this.instRoot.remove();
      this.showLoader = true;
    }
    this.selector.append(super.getElement());
    try {
      await wait(1500);
      this.showLoader = false;
      this.showErorState = false;
      this.instRoot.remove();
      if (this.count === null) this.count = 0;
      this.selector.append(this.getElement());
      return 0;
    } catch (error) {
      this.showLoader = false;
      this.instRoot.remove();
      this.selector.append(super.getElement());
    }
    return null;
  }
}
