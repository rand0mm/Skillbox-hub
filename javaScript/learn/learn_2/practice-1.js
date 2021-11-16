let entrances = 4;
let floors = 9;
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log('Квартир в подъезде', flatsPerEntrance);

let flats = entrances * flatsPerEntrance;
console.log('Всего квартир в доме', flats);

let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

let volume = 500;

let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

console.log(vodka * k);


// Вычисление дискрименанта и решение квадратного уровнения
// a*x*x + b*x + c = 0

let a = 3;
let b = 10;
let c = 5;

let d = b * b - 4 * a * c;


let dRoot = Math.sqrt(d);
console.log('x1 =', (-b + dRoot) / (2 * a));
console.log('x2 =', (-b - dRoot) / (2 * a));

/*
Вычисляем n чисел ряда Фибоначчи.
Каждое следующее число - сумма двух предыдущих.
*/

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;


while (n-- > 0) {
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log(current);
}