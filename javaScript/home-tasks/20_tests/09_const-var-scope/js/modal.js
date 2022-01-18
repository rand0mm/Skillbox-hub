/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
const modalObjs = document.querySelectorAll('.modal-obj');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const modalCloseIcon = document.querySelectorAll('.modal__close');
const modalCloseIconB = document.querySelectorAll('.modal__close-b');
const timeout = 800;

let unlock = true;

if (modalObjs.length > 0) {
  for (let index = 0; index < modalObjs.length; index++) {
    const modalObj = modalObjs[index];
    modalObj.addEventListener('click', (e) => {
      const curentModal = document.getElementById('modal_3');
      modalOpen(curentModal);
      e.preventDefault();
    });
  }
}

if (modalCloseIcon.length > 0) {
  for (let index = 0; index < modalCloseIcon.length; index++) {
    const el = modalCloseIcon[index];
    el.addEventListener('click', (e) => {
      modalClose(el.closest('.modal'));
      if (timePaused < 60 && timePassed > 0) {
        startTimer(timePaused);
      }
      e.preventDefault();
    });
  }
}

if (modalCloseIconB.length > 0) {
  for (let index = 0; index < modalCloseIconB.length; index++) {
    const el = modalCloseIconB[index];
    el.addEventListener('click', () => {
      modalClose(el.closest('.modal'));
    });
  }
}

function modalOpen(curentModal) {
  if (curentModal && unlock) {
    const modalActive = document.querySelector('.modal_open');
    if (modalActive) {
      modalClose(modalActive, false);
    } else {
      bodyLock();
    }
    setTimeout(() => {
      curentModal.classList.add('modal_open');
    }, 100);
    curentModal.classList.add('modal_display');
    curentModal.addEventListener('click', (e) => {
      if (!e.target.closest('.modal__content')) {
        modalClose(e.target.closest('.modal'));
      }
    });
  }
}

function modalClose(modalActive, doUnlock = true) {
  if (unlock) {
    setTimeout(() => {
      modalActive.classList.remove('modal_display');
    }, 800);
    modalActive.classList.remove('modal_open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  body.classList.add('lock');
  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modalActive = document.querySelector('.modal.modal_open');
    if (modalActive) {
      modalClose(modalActive);
    }
  }
});

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      let node = this;

      while (node) {
        if (node.matches(css)) return node;
        node = node.parentElement;
      }
      return null;
    };
  }
}());

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector
      || Element.prototype.webkitMatchesSelector
      || Element.prototype.mozMatchesSelector
      || Element.prototype.msMatchesSelector;
  }
}());
