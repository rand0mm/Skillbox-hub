// функция с 2-мя аргументами
// при этом второй аргумент имеет значение по умолчанию
function findCard(cards, wantedCard = 'Туз') {
    console.log('Ищем в колоде карту ' + wantedCard)

    let found = false;

    for (let card of cards) {
        console.log(`Из колоды вытянута карта ${card}`);
        if (card === wantedCard) {
            found = true;
            break;
        }
    }

    console.log(found ?
        `Мы  нашли карту ${wantedCard}!` :
        `В колоде нет карты ${wantedCard} :(`);
}

let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король']

// ищем туза в переданной колоде карт
findCard(myCards);
// ищем пятёрку в переданной колоде карт
findCard(myCards, '5');

// calcSum(10, 9);
// calcSum(100, 1);
// calcSum(1000, 5);
// calcSum(49999, 3);
// calcSum(1000, 1, 'ДАРИМ300');
// calcSum(820, 9, 'ДАРИМ300');
// calcSum(100, 1, 'ДАРИМ300');
// calcSum(100, 15, 'ДАРИМ300');
// calcSum(100, 10);
// calcSum(500, 15);
// calcSum(500, 17, 'ДАРИМ300');
// calcSum(180, 12, 'ДАРИМ300');

// calcSum(50000, 2);
// calcSum(50100, 1, 'ДАРИМ300');
// calcSum(52300, 30, 'ДАРИМ300');
// calcSum(52000, 22);
// calcSum(60300, 1, 'ДАРИМ300');
// calcSum(70000, 12);
// calcSum(70300, 12, 'ДАРИМ300');

// calcSum(19000, 4, 'СКИДКА15')
// calcSum(20000, 2, 'СКИДКА15')
// calcSum(21000, 12, 'СКИДКА15')
// calcSum(60000, 1, 'СКИДКА15')
// calcSum(60000, 94, 'СКИДКА15')
