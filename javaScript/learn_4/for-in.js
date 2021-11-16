let rating = ['Катя', 'Вася', 'Маша', 'Петя', 'Лена'];

console.log('Рейтинг студентов:');
for (let i in rating) {
    console.log(`${parseInt(i) + 1} место: ${rating[i]}`);
}
