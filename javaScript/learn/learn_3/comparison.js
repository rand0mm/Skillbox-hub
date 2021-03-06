true === true; //true  
true !== true; //false
true === false; //false
true !== false; //true

"строка" === 'строка'; // true
'строка' === `строка`; // true
"строка" === `строка`; // true

"строка" === 'строка' === `строка`; // false, важен порядок вычеслений

'строка1' !== 'строка2'; //true

// === и !== всегда венет false при сравнении разных типов
false !== 0;
true !==1;
0 !== '';
3 !== '3'; // вот это поворот!
false !== '';
true !== 'true';

// сравнение строк происходит посимвольно по кодам символа, условно по "алфавиту"
'z' > 'a'; // 122 > 97
'az' > 'axzzz'; // a === a, z > a, дальше не проверяем
'z' > 'Z'; // 122 > 90  
'10' < '5'; // вот так сюрприз
'10' > '05'; // а вот теперь все на своих местах

// сравнение строк и чисел
'10' > 5; // true
10 > '5'; // true
10 > 'x'; // false, 'x' не число (NaN) 
10 < 'x'; // false, 'x' не число (NaN)

// сравнение с boolean всегда сводятся к сравнению чисел
// true - 1, false - 0
1 > false; //true, 1 > 0
0 < true; // true, 0 < 1
'10' > true; // true, 10 > 1
'1' > true; // false, 1 > 1
'1' > false; // true, 1 > 0
'x' > true; // false, NaN > 1

