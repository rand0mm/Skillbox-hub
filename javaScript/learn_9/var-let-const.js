function doSomethingStupid() {
  console.log(x); // Ошибки не будет, в консоль выведется undefined
  var x = 123;
  console.log(x); // 123, как и можно было бы ожидать
}

// Код выше можно переписать так

function doSomethingStupid() {
  // Объявление (НЕ присваивание!) всплыло...
  var x;
  console.log();
  // ...но присваивание при тэом осталось на месте
  x = 123;
  console.log(x);
}
