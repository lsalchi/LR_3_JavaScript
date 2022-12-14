console.log("" + 1 + 0);           //10     Преобразование в строку и посимвольное сложение
console.log("" - 1 + 0);           //-1     "-" относится к строке, единица складывается с нулем
console.log(true + false);         // 1     Преобразование в 1 + 0, вывод результата сложения
console.log(6 / "3");              // 2     Результат деления (числа)
console.log("2" * "3");            // 6     Результат умножения (числа)
console.log(4 + 5 + "px");         // 9px   Cложение двух чисел, т.е. ответом будет 9, далее из-за сложения числа со строкой произойдет преобразование числа в строку
console.log("$" + 4 + 5);          // $45   Текстовый формат вывода, вывод символов
console.log("4" - 2);              // 2     Результат вычитания (как математическая операция)
console.log("4px" - 2);            // nan   При вычитании происходит преобразование строки к числу, но значение px невозможно преобразовать в число, т.е. на выходе ошибка
console.log(" -9 " + 5);           // -9 5  При сложении строки и числа произойдет преобразование числа в строку (cложение строки с символом)
console.log(" -9 " - 5 );          // -14   Математическое вычитание
console.log(null + 1);             // 1     NULL преобразуется в 0
console.log(undefined + 1);        // NaN   В строке undefined, проиcходит преобразование в nan
console.log(" \t \n" - 2);         // -2    Символы обрезаются, из непустой строки считывается число
