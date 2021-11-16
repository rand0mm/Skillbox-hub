const modalObjs    = document.querySelectorAll('.modal-obj');
const body         = document.querySelector('body');
const lockPadding  = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (modalObjs.length > 0) {
  for (let index = 0; index < modalObjs.length; index++) {
    const modalObj = modalObjs[index];
    modalObj.addEventListener('click', function(e) {
      const modalName = modalObj.getAttribute('href').replace('#', '');
      const curentModal = document.getElementById(modalName);
      modalOpen(curentModal);
      e.preventDefault();
    });
  }
}

const modalCloseIcon = document.querySelectorAll('.modal__close');

if (modalCloseIcon.length > 0) {
  for (let index = 0; index < modalCloseIcon.length; index++) {
    const el = modalCloseIcon[index];
    el.addEventListener('click', function(e){
      modalClose(el.closest('.modal'));
      e.preventDefault();
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
    setTimeout(() =>{
      curentModal.classList.add('modal_open');
  }, 100);
    curentModal.classList.add('modal_display');
    curentModal.addEventListener("click", function(e) {
      if (!e.target.closest('.modal__content')) {
        modalClose(e.target.closest('.modal'));
      }
    });
  }
}

function modalClose(modalActive, doUnlock = true) {
  if (unlock) {
    setTimeout(() =>{
      modalActive.classList.remove('modal_display');
  }, 800);
    modalActive.classList.remove('modal_open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout (function() {
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
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape') {
    const modalActive = document.querySelector('.modal.modal_open');
    if (modalActive) {
      modalClose(modalActive);
    }
  }
});

(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();

(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

