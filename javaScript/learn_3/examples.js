/*
Вычисление дискриминанта и решение квадратного уравенния
a*x*x + b*x + c = 0
Даны параметры a, b, и c для квадратного уравнения.
Нужно вывести возможные значения x этого уравнения.
*/

let a = 3;
let b = 10;
let c = 5;

let d = b * b - 4 * a * c;

/* старое решение
let dRoot = Math.sqrt(d);
console.log('x1 =', (-b + dRoot) / (2 * a));
console.log('x2 =', (-b - dRoot) / (2 * a));
*/

if (d < 0) {
  console.log('Квадратное уравнение не имеет решений');
} else if (d === 0) {
  let x = -b / (2 * a);
  console.log('Квадратное уравнение имеет одно решение, x = ' + x);
} else {
  let dRoot = Math.sqrt(d);
  let x1 = (-b + dRoot) / (2 * a);
  let x2 = (-b - dRoot) / (2 * a);
  console.log(`Квадратное уравнение имеет 2 решения:\nx1 = ${x1}\nx2 = ${x2}`)
}

/*
Определяем день недели как выходной или будний день.
*/

let day = 'Вторник';

switch (day) {
  case 'Понедельник':
  case 'Вторник':
  case 'Среда':
  case 'Четверг':
  case 'Пятница':
    console.log(day + ' - это будний день');
    break;
  case 'Суббота':
  case 'Воскресенье':
    console.log(day + ' - это выходной день');
    break; 
  default:
    console.log('Я не слышал о дне недели, который называется ' + day);
}

/*
Определяем чётность числа.
*/

let num = 2;

if (num % 2 === 0) {
  console.log(`Число ${num} чётное`);
} else {
  console.log(`Число ${num} нечетное`);
}