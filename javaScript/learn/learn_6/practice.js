// Результат?
// function makeUser() {
//     return {
//       name: "Джон",
//       ref: this
//     };
//   };

//   let user = makeUser();

//   alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

// Рабочий вариант
function makeUser() {
  return {
    name: "Джон",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

console.log(user.ref().name); // Джон

// // создайте калькулятор
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read(); 
// alert(calculator.sum());
// alert(calculator.mul());


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  }
};

// Измените код методов up, down и showStep таким образом,
// чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

ladder.up().up().down().showStep();