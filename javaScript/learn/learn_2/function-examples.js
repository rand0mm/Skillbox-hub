/**
 * Вычисление решения квадратного уравнения
 * a*x*x +b*x + c = 0
 * @return значения x
 */
function squareX(a, b, c) {
    let d = b * b - 4 * a * c;
    
    if (d < 0) {
        return ['Корней нет'];
    } else {
        if (d === 0) {
            return [-b / (2 * a)];
        }

        let dRoot = Math.sqrt(d);

        return [(-b + dRoot) / (2 * a), (-b - dRoot) / (2 * a)];
    }
}


console.log(squareX(3, 10, 5));

console.log(squareX(3, 2, 1));
