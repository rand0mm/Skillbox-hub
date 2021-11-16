let salaries = {
  "John": 100,
  "Pen": 300,
  "Pete": 300,
  "Mary": 250
};


function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary(salaries));


// В JavaScript есть 8 основных типов.

// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
// bigint для целых чисел произвольной длины.
// string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true/false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// object для более сложных структур данных.
// symbol для уникальных идентификаторов.
// Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

// Имеет две формы: typeof x или typeof(x).
// Возвращает строку с именем типа. Например, "string".
// Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.