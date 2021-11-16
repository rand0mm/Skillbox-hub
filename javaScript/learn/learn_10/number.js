Number('42'); //  42
Number('3.14'); // число 3.14 (запятая не работает)
Number('-42'); // -42
Number('+42'); // 42

Number('0b1001'); // 9, работает с 2-чными 
Number('0o22'); // 18, работает с 8-чными
Number('0x22'); // 34, работает с 16-чными

Number('\n\t 42 \n\t'); // 42, пробельные символы не учитываются

Number('И как из этого сделать число?'); // NaN это Not a number

Number(true); // 1
Number(false); // 0

Number(null) // 0 
Number(undefined); //NaN

Number({}); // NaN
Number([100, 200, 300, 400, 500]); // NaN
Number(() => {}); // NaN

