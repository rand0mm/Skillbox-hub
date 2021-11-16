function makeCounter() {
  let count = 0;
  console.log('1', count);
  return function() {
    console.log('2', count);
    return count++;
  };
}

count = 0;
let counter = makeCounter();
let counter2 = makeCounter();

console.log('3',counter()); // 0
console.log('3',counter()); // 1


// Сумма с помощью замыканий
function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4


// Фильтрация с помощью функции
//  нас есть встроенный метод arr.filter(f) для массивов.
// Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2



// Сортировать по полю
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => console.log(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => console.log(user.name)); // Pete, Ann, John
