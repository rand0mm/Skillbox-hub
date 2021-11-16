function checkAdult(age) {
    console.log(`Вам ${age} лет`);
    if (age >= 18) return;
    console.log('Школота!');
    console.log(`Потерпи еще ${18 - age} лет до совершеннолетия`);
}

// все сообщения буду выведены
checkAdult(2);

// функция перестанет выполняться после первого сообщения
checkAdult(23);
checkAdult(18);