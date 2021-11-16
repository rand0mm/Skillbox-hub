console.log(NaN === 0);
console.log(NaN === NaN);
console.log(NaN > 0);
console.log(NaN > NaN);
console.log(NaN < 0);
console.log(NaN < NaN);
console.log(NaN >= 0);
console.log(NaN >= NaN);
console.log(NaN <= 0);
console.log(NaN <= NaN);
// все false


// Этот код не сработает, так как выражение NaN === NaN вернет false
const value = 'Точно не сило';
if (Number(value) === NaN) {
    console.log('Не удалось разобрать число');
}

// а вот это сработает как надо 
if (isNaN(Number(value))) {
    console.log('Не удалось разобрать число')
}