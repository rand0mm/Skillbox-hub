const mydropdown1 = document.getElementById("mydrop-down-1");
const mydropdown2 = document.getElementById("mydrop-down-2");
const mydropdown3 = document.getElementById("mydrop-down-3");
const mydropdown4 = document.getElementById("mydrop-down-4");
const mydropdown5 = document.getElementById("mydrop-down-5");
const dropBtns    = document.querySelectorAll(".drop-btn");

function one() {
  var dropdowns1 = document.getElementsByClassName("drop-down-content");
  var i;
  for (i = 0; i < dropdowns1.length; i++) {
    const opendropDown = dropdowns1[i];
    if (opendropDown.classList.contains('show')) {
      opendropDown.classList.remove('show--opacity');
      setTimeout(() =>{
        opendropDown.classList.remove('show');
      }, 300);
    }
  };
  if (mydropdown1.classList.contains('show')) {
    mydropdown1.classList.remove('show--opacity');

    setTimeout(() =>{
      mydropdown1.classList.remove('show');
    }, 300);
  } else {
    mydropdown1.classList.add('show');
    setTimeout(() =>{
      mydropdown1.classList.add('show--opacity');
    }, 100);

  };
  for (i = 0; i < dropBtns.length; i++) {
    const dropBtn  = dropBtns[i];
    if (!i === 0) {
      console.log(dropBtn);
      dropBtn.classList.remove('drop-btn--active');
    }
  };

};

function two() {
  for (i = 0; i < dropBtns.length; i++) {
    const dropBtn  = dropBtns[i];
    if (!i === 1) {
      console.log(dropBtn);
      dropBtn.classList.remove('drop-btn--active');
    }
  };
  var dropdowns1 = document.getElementsByClassName("drop-down-content");
  var i;
  for (i = 0; i < dropdowns1.length; i++) {
    const opendropDown = dropdowns1[i];
    if (opendropDown.classList.contains('show')) {
      opendropDown.classList.remove('show--opacity');
      setTimeout(() =>{
        opendropDown.classList.remove('show');
      }, 300);
    }
  };

  if (mydropdown2.classList.contains('show')) {
    mydropdown2.classList.remove('show--opacity');
    setTimeout(() =>{
      mydropdown2.classList.remove('show');
    }, 300);
  }

  else {
    mydropdown2.classList.add('show');
    setTimeout(() =>{
      mydropdown2.classList.add('show--opacity');
    }, 100);
  };
};

function three() {
  for (i = 0; i < dropBtns.length; i++) {
    const dropBtn  = dropBtns[i];
    if (!i === 2) {
      console.log(dropBtn);
      dropBtn.classList.remove('drop-btn--active');
    }
  };
  var dropdowns1 = document.getElementsByClassName("drop-down-content");
  var i;
  for (i = 0; i < dropdowns1.length; i++) {
    const opendropDown = dropdowns1[i];
    if (opendropDown.classList.contains('show')) {
      opendropDown.classList.remove('show--opacity');
      setTimeout(() =>{
        opendropDown.classList.remove('show');
      }, 300);
    }
  };

  if (mydropdown3.classList.contains('show')) {
    mydropdown3.classList.remove('show--opacity');
    setTimeout(() =>{
      mydropdown3.classList.remove('show');
    }, 300);
  }

  else {
    mydropdown3.classList.add('show');
    setTimeout(() =>{
      mydropdown3.classList.add('show--opacity');
    }, 100);
  };
};

function four() {
  for (i = 0; i < dropBtns.length; i++) {
    const dropBtn  = dropBtns[i];
    if (!i === 3) {
      console.log(dropBtn);
      dropBtn.classList.remove('drop-btn--active');
    }
  };
  var dropdowns1 = document.getElementsByClassName("drop-down-content");
  var i;
  for (i = 0; i < dropdowns1.length; i++) {
    const opendropDown = dropdowns1[i];
    if (opendropDown.classList.contains('show')) {
      opendropDown.classList.remove('show--opacity');
      setTimeout(() =>{
        opendropDown.classList.remove('show');
      }, 300);
    }
  };

  if (mydropdown4.classList.contains('show')) {
    mydropdown4.classList.remove('show--opacity');
    setTimeout(() =>{
      mydropdown4.classList.remove('show');
    }, 300);
  }

  else {
    mydropdown4.classList.add('show');
    setTimeout(() =>{
      mydropdown4.classList.add('show--opacity');
    }, 100);
  };
};

function five() {
  for (i = 0; i < dropBtns.length; i++) {
    const dropBtn  = dropBtns[i];
    if (!i === 4) {
      console.log(dropBtn);
      dropBtn.classList.remove('drop-btn--active');
    }
  };
  var dropdowns1 = document.getElementsByClassName("drop-down-content");
  var i;
  for (i = 0; i < dropdowns1.length; i++) {
    const opendropDown = dropdowns1[i];
    if (opendropDown.classList.contains('show')) {
      opendropDown.classList.remove('show--opacity');
      setTimeout(() =>{
        opendropDown.classList.remove('show');
      }, 300);
    }
  };

  if (mydropdown5.classList.contains('show')) {
    mydropdown5.classList.remove('show--opacity');
    setTimeout(() =>{
      mydropdown5.classList.remove('show');
    }, 300);
  }

  else {
    mydropdown5.classList.add('show');
    setTimeout(() =>{
      mydropdown5.classList.add('show--opacity');
    }, 100);
  };
};


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

window.onclick = function(event) {
  if (event.target.closest('.drop-btn')) {
    event.target.classList.toggle('drop-btn--active')
  }
  if (!event.target.closest('.drop-btn')) {
    var dropButtons = document.querySelectorAll('.drop-btn');
    dropButtons.forEach(function(item){
      console.log(item);
      item.classList.remove('drop-btn--active')
   })
    var dropdowns = document.getElementsByClassName("drop-down-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      const opendropDown = dropdowns[i];
      if (opendropDown.classList.contains('show')) {
        opendropDown.classList.remove('show--opacity');
        setTimeout(() =>{
          opendropDown.classList.remove('show');
        }, 300);

      }
    };
  }
  };
