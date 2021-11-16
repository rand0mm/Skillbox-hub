// плохой пример
function qazxsw(n, m) {
    let x = Math.abs(m-n)
    let y = Math.round(Math.random() * x);
    let z = Math.min(n, m);
    return z + y;
}

// понятное наименование
function generateRandomNumber(n, m) {
    let range = Math.abs(m - n)
    let numberInRange = Math.round(Math.random() * range);
    let min = Math.min(n, m);
    return min + numberInRange;
}

// понятное наименование 
function generateRandomNumber(n, m) {
    let range = Math.abs(m - n)
    let numberInRange = Math.round(Math.random() * range);
    let min = Math.min(n, m);
    return min + numberInRange;
}