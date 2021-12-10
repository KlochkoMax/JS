// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function first (arg1, arg2){
//     if (arguments.length === 1){
//         console.log(arg1)
//     }else if (arguments.length === 2){
//         console.log(arg1 + arg2);
//     }
//
// }
//
// first(5, 15);



// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

    // let array1 = [2,4,6,8];
    // let array2 = [8,6,4,2];
    //
    //
    // function sum (newArr,ar1, ar2) {
    //     for (let i = 0, j = 0; i < ar1.length, j <ar2.length; i++, j++) {
    //         let result = ar1[i] + ar2[j];
    //         newArr.push(result);
    //     }
    //     return newArr;
    // }
    //
    // console.log(sum([],array1,array2));



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


        // let array = [
        //     {name: 'jora', age: 20, sex: 'male'},
        //     {name: 'gena', age: 22, sex: 'male'},
        //     {name: 'irina', age: 32, sex: 'female'},
        //     {name: 'sergey', age: 20, sex: 'male'},
        //     {name: 'alice', age: 20, sex: 'female'}
        // ];
        //
        //     function keyArray ( arg1, arg2) {
        //         for (let i = 0; i < arg2.length; i++) {
        //             let newKey = Object.keys(arg2[i]);
        //             arg1.push(newKey);
        //         }
        //         return arg1;
        //     }
        //
        //     console.log(keyArray([],array));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// function keyArray ( arg1, arg2) {
//     for (let i = 0; i < arg2.length; i++) {
//         let newKey = arg2[i].name +' ' + arg2[i].age +' ' + arg2[i].sex ;
//         arg1.push(newKey);
//     }
//     return arg1;
// }
//
// console.log(keyArray([],array));













