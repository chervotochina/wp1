let x = '855';
/*
if (x>9) {
    const y = x.split('');
    console.log(y);

    for (step = 0; step < 5; step++) {
        // Запускается 5 раз, с шагом от 0 до 4.
        console.log('Идём 1 шаг на восток');
      }
      }

// проверяем условия цикла - цифр еще больше одной?

// если больше, то передаем в функцию суммирования цифр



function summ(n) {
    let arr = n.split(', ');
    console.log(arrayOfStrings);
}
summ(3);
*/

let n = '1235615';


function summa(n = 0) {
    let summ = 0;
    let length = n.length;

    for (let i=0; i < length; i++) {
        summ += +n[i];
        }
    return summ;
    
}

console.log(summa('1234567890'));


for (;summ>=10; j++){
    summa(summ);
}