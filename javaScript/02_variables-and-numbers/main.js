//* 1

function squareS (x1, y1, x2, y2) {
  const cathetus1 = Math.abs(x1 - x2)
  const cathetus2 = Math.abs(y1 - y2)

  console.log('Площадь прямоугольника =', (cathetus1 * cathetus2))
}

console.log(squareS(2, 3, 10, 5))
console.log(squareS(10, 5, 2, 3))
console.log(squareS(-5, 8, 10, 5))
console.log(squareS(5, 8, 5, 5))
console.log(squareS(8, 1, 5, 1))

//* 2

function compare (a, b, n) {
  const precision = n

  const afractional = Math.floor(a % 1 * Math.pow(10, precision))

  const bfractional = Math.floor(b % 1 * Math.pow(10, precision))

  console.log('Дробная часть числа a =', afractional)
  console.log('Дробная часть числа b =', bfractional)

  console.log('Числа равны', afractional === bfractional)
  console.log('Числа не равны', afractional !== bfractional)
  console.log('a больше b', afractional > bfractional)
  console.log('a меньше b', afractional < bfractional)
  console.log('a больше или равно b', afractional >= bfractional)
  console.log('a меньше или равно b', afractional <= bfractional)
}

console.log(compare(13.123456789, 2.123, 5))
console.log(compare(13.890123, 2.891564, 2))
console.log(compare(13.890123, 2.891564, 3))

//* 3

function oddRandom (n, m) {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  let min = Math.min(n, m)
  min = min + !(min % 2)
  let max = Math.max(n, m)
  max = max - !(max % 2)
  return min + random(0, (max - min) / 2) * 2
}

let i

for (i = 0; i < 5; i++) {
  console.log('odd a =', oddRandom(0, 100))
  console.log('odd b =', oddRandom(2, 5))
  console.log('odd c =', oddRandom(100, -5))
  console.log('odd d =', oddRandom(-3, -10))
}

function EvenRandom (n, m) {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  let min = Math.min(n, m)
  min = min + Math.abs(min % 2)
  const max = Math.max(n, m)
  return min + random(0, (max - min) / 2) * 2
}

for (i = 0; i < 5; i++) {
  console.log('Even a =', EvenRandom(0, 100))
  console.log('Even b =', EvenRandom(2, 5))
  console.log('Even c =', EvenRandom(100, -5))
  console.log('Even d =', EvenRandom(-3, -10))
}
