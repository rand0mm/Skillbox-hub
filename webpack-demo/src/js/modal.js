function modal() {
  const modalObjs = document.querySelectorAll('.modal-obj');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');
  const modalCloseIcon = document.querySelectorAll('.modal__close');
  const timeout = 800;
  let unlock = true;

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
    const lockPaddingValue = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;

    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
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

  if (modalObjs.length > 0) {
    for (let index = 0; index < modalObjs.length; index++) {
      const modalObj = modalObjs[index];
      modalObj.addEventListener('click', (e) => {
        const modalName = modalObj.getAttribute('href').replace('#', '');
        const curentModal = document.getElementById(modalName);
        console.log(e.img)
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
        e.preventDefault();
      });
    }
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
}
export default modal;
