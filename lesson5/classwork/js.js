// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    // let func = (a,b,c) => {
    //     if (a < b && a < c){
    //         console.log(a);
    //         document.write(`Найменше число - `,a);
    //     }
    //     else if (b < a && b < c){
    //         console.log(b);
    //         document.write(`Найменше число - `,b);
    //     }
    //     else if ( c < a && c < b){
    //         console.log(c);
    //         document.write(`Найменше число - `,c);
    //     }
    //     else {
    //         document.write(`Помилка`)
    //     }
    // }
    //
    // func(5,15,25)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

    // let func = (a,b,c) => {
    //     if (a > b && a > c){
    //         console.log(a);
    //         document.write(`Найбільше число - `,a);
    //     }
    //     else if (b > a && b > c){
    //         console.log(b);
    //         document.write(`Найбільше число - `,b);
    //     }
    //     else if ( c > a && c > b){
    //         console.log(c);
    //         document.write(`Найбільше число - `,c);
    //     }
    //     else {
    //         document.write(`Помилка`)
    //     }
    // }
    //
    // func(5,15,25)

// - створити функцію яка повертає найбільше число з масиву
//     let func = (...array) => {
//         let number = array[0];
//         for (const numbeElement of array) {
//             if ( numbeElement > number){
//                 number = numbeElement;
//                 }
//             }
//         return number;
//     }
//     document.write(func(3,2,15,13));

// - створити функцію яка повертає найменьше число з масиву
//     let func = (...array) =>{
//         let lower = array[0];
//         for (const lowerElement of array) {
//             if ( lowerElement < lower){
//                 lower = lowerElement
//             }
//         }
//         return lower
//     }
//     document.write(func(15,3,22,2))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    // let func = (...array) =>{
    //     let equal = 0
    //     for (const equalElement of array) {
    //         equal = equal + equalElement;
    //     }
    //     return equal
    // }
    // document.write(func(5,10,15));
    // console.log(func(5,10,15));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    // let func = (...array) =>{
    //     let equal = 0
    //     for (const equalElement of array) {
    //         equal = equal + equalElement;
    //     }
    //     return equal/array.length;
    // }
    // document.write(func(5,15,10));
    // console.log(func(5,10,15));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

    // let func = (...array) => {
    //     minNum = array[0];
    //     maxNum = array[0];
    //     for (const arrayElement of array) {
    //         if ( arrayElement < minNum){
    //             minNum = arrayElement;
    //         }
    //         if ( arrayElement > maxNum) {
    //             maxNum = arrayElement;
    //         }
    //     }
    //     console.log(maxNum);
    //     return minNum;
    // }
    // document.write(`Найменше число - `, func(2,3,4,5));

// - створити функцію яка заповнює масив рандомними числами

    // let func = (size,...array) => {
    //     for (let i = 0; i < size; i++){
    //         array[i] = Math.floor(Math.random()*100);
    //     }
    //     return array
    // }
    // document.write(func(5,[]));
    // console.log(func(5, []))

    // let func = (size) =>{
    //     let emptyArray = [];
    //     for ( let i = 0; i < size; i++){
    //         emptyArray.push(Math.round(Math.random()*100))
    //     }
    //     return emptyArray
    // }
    //
    // document.write(func(5))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

    // let func = (size,limit,...array) => {
    //     for (let i = 0; i < size; i++){
    //         array[i] = Math.floor(Math.random()*limit);
    //     }
    //     return array
    // }
    // document.write(func(5,35,[]))

    // let func = (size,limit) =>{
    //     let emptyArray = [];
    //     for ( let i = 0; i < size; i++){
    //         emptyArray.push(Math.round(Math.random()*limit))
    //     }
    //     return emptyArray
    // }
    //
    // document.write(func(10,50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

    // let func = (...array) => {
    //     let arrayReverse = [];
    //     for (let i = array.length - 1; i >=0; i-- ){
    //         let arrElement = array[i];
    //         arrayReverse.push(arrElement)
    //     }
    //     return arrayReverse
    // }
    //
    // document.write(func(10,20,30))

















