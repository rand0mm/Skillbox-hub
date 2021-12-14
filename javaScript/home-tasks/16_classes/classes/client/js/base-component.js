/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import ComponentError from './ComponentError.js';


// базовый класс
export default class BaseComponent {
  constructor({ selector, showLoader = true, showErrorState = true }) {
    this.selector = selector;
    this.showLoader = showLoader;
    this.showErorState = showErrorState;
    if (!this.selector) {
      throw new ComponentError();
    }
    this.data = null;
  }

  set showLoader(value) {
    this._showLoader = value;
  }

  get showLoader() {
    return this._showLoader;
  }

  // html представление класс до инициализации(окно загрузки/ошибки)
  getElement() {
    // класс вовзращает в выбранный элемент окно загрузки, либо окно состояния
    // ошибки если загрузка неудачна, окно абсолютом натягивается на элемент.
    const root = document.createElement('div');
    root.classList.add('flex-fill');
    root.style.zIndex = '10';
    // проверяем идет ли загрузка
    if (this.showLoader) {
      // грузим окно загрузки
      root.innerHTML = `
      <div class="d-flex justify-content-center align-items-center spinner">
        <div class="spinner-border" role="status"  style="width: 2rem; height: 2rem;">
          <span class="visually-hidden"></span>
        </div>
      </div>
      `;
      // сохраняем узел в класс
      this.loaderRoot = root;
      return root;
    }
    // загрузка завершилась, проверяем на ошибку
    if (!this.showErorState) {
      return this.loadeRoot;
      // если ошибки нет возвращаем узел
    }
    // Если ошибка есть, вставляет в рут ошибку
    root.innerHTML = '';

    const alertRoot = document.createElement('div');
    const alertMEssage = document.createElement('div');
    const alertBtn = document.createElement('button');

    alertMEssage.textContent = 'Ошибка ;(';
    alertBtn.textContent = 'Обновить';
    alertBtn.classList.add('btn', 'btn-danger');
    alertMEssage.classList.add('text-center', 'flex-fill');
    alertRoot.classList.add('d-flex', 'justify-content-between', 'align-items-center',
      'border',
      'border-danger',
      'rounded');

    alertBtn.addEventListener('click', () => {
      this.getCount();
    });
    alertRoot.append(alertMEssage, alertBtn);
    root.append(alertRoot);
    this.loaderRoot = root;
    return root;
  }

  // как привязать getElement к условию "если в классе реализован фетч?"
}
