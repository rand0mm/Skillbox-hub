Infinity > 100500; // true
-Infinity < -100500; // true



Infinity === Infinity; // true

Infinity > Infinity; // false
Infinity < Infinity; // false

Infinity >= Infinity; // true
Infinity <= Infinity; // true

Infinity + Infinity; // infinity
-Infinity - Infinity; // -infinity

Infinity - Infinity; // NaN
-Infinity + Infinity; // NaN
Infinity / Infinity; // NaN

Infinity / 10; // Infinity
Infinity * 10; // Infinity
Infinity ** 10; // Infinity
Infinity ** Infinity; // Infinity

Infinity ** -Infinity; // 0
(-Infinity) ** Infinity; // Infinity

/*
- Не ипсользуйте Infinity без явной необходимости
- Все, что делает бесконечность еще более бесконечной, возвращает бесконечность
- Любые операции с бесконечностью и числом вернуть бесконечность
- Уменьшение бесконечности при делении или вычитании ( прибавлении для отрицательной) бесконечности в JavaScript не работает
- Две бесконечности равны
- Деление на 0 дает бесконечность
*/