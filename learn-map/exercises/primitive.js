/* Как сделать так, чтобы было возможно сложение двух объектов?

    const a = { x: 3 };
    const b = { x: 5 };
    ...
    console.log(a + b); // 8
*/
// добавляем метод преобразования valueof() возвращает число из свойства х
const a = {
  x: 3,
  valueOf() {
    return this.x;
  },
}
const b = {
  x: 5,
  valueOf() {
    return this.x;
  },
};

let x = Number(a);
let y = String(a)

console.log(a + b); // 8
console.log(a); // { x: 3, valueOf: [Function: valueOf] }
console.log(x); // 3
console.log(y); // [object Object]

// Как сделать так, чтобы следующее выражение вернуло `true`?
// (c==1 && c==2 && c==3)
// решение заключается в том что метод valueOf необязательно возвращает только тип,можно вернуть любое значение)
// в данном случае возвращает на 1 больше какждый раз когда вызывается) единственно важно возвращать примитив а не объект
const c = {
  i: 1,
  valueOf: function () {
    return c.i++;
  }
}

if(c == 1 && c == 2 && c == 3) {
  console.log('Hello World!');
}
