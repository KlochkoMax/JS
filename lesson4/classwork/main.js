// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function lowerNumber (a,b,c){
//     if (a < b && a < c){
//         document.write(a,`<br>`);
//     } else if(b < c && b < a){
//         document.write(b,`<br>`);
//     }
//         else if(c < b && c < a){
//         document.write(c,`<br>`);
//     }
//     else {
//         document.write('Впишіть РІЗНІ числа');
//     }
// }
//
// lowerNumber(50,40,15,);
// lowerNumber(25,25,25);

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function lowerNumber (a,b,c){
//     if (a > b && a > c){
//         document.write(a,`<br>`);
//     } else if(b > c && b > a){
//         document.write(b,`<br>`);
//     }
//         else if(c > b && c > a){
//         document.write(c,`<br>`);
//     }
//     else {
//         document.write('Впишіть РІЗНІ числа');
//     }
// }
//
// lowerNumber(50,40,15,);
// lowerNumber(25,25,25);

// - створити функцію яка повертає найбільше число з масиву


    // function maxnumber (lists){
    //     let bigger = lists[0];
    //     for (const number of lists) {
    //         if ( number > bigger ){
    //             bigger = number;
    //         }
    //
    //     }
    //     return bigger;
    // }
    // let array = [25,15,25,35,3,49,33];
    // document.write(maxnumber(array));

// створити функцію яка повертає найменьше число з масиву

    // let array = [ 19,23,3,28,33,5 ];
    // function minNumber (lists){
    //     let lower = lists[0];
    //     for (const lowerElement of lists) {
    //         if (lowerElement < lower){
    //             lower = lowerElement
    //         }
    //
    //     }
    //     return lower;
    // }
    //
    // document.write(minNumber(array))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    // function sum (numbers){
    //      let equal = 0;
    //     for (const number of numbers) {
    //         equal = equal + number
    //     }
    //     return equal;
    // }
    //
    // let array = [5,15,25,50]
    // document.write(sum(array))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    // function sum (numbers){
    //      let equal = 0;
    //     for (const number of numbers) {
    //         equal = equal + number;
    //     }
    //
    //     return equal/numbers.length;
    //
    // }
    //
    // let array = [5,10,10,15]
    // document.write(sum(array))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

    // function mm ( numbers){
    //     let minN = numbers[0];
    //     let maxN = numbers[0];
    //     for (const number of numbers) {
    //         if ( number > maxN) {
    //             maxN = number
    //         }
    //
    //         if (number < minN){
    //             minN = number
    //         }
    //     }
    //     document.write(maxN);
    //     return minN
    // }
    //
    // let array = [2,4,6,9,13,7,0.5,25,20]
    // document.write(`<div>${mm(array)}</div>`);

// створити функцію яка заповнює масив рандомними числами

    // function random (array,size){
    //     for ( let i = 0; i < size; i++){
    //         array[i] = Math.round(Math.random()*100);
    //     }
    //     return array
    // }
    //
    // document.write(random([],10))

// створити функцію яка заповнює масив рандомними числами
// в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

    // function random (array,size,limit){
    //     for ( let i = 0; i < size; i++){
    //         array[i] = Math.round(Math.random()*limit);
    //     }
    //     return array
    // }
    //
    // document.write(random([],15,10))

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


    // function reverse (arr){
    //     let newarray = [];
    //     for (let i = arr.length - 1; i >= 0; i--) {
    //         let arrElement = arr[i];
    //         newarray.push(arrElement)
    //     }
    //     return newarray
    // }
    //
    // let array = [5,10,15];
    // document.write(reverse(array))

