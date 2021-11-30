// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//     let func = (name) => {
//         let newname = name
//                           .replaceAll('..', ' ')
//                           .replaceAll('---','  ')
//                           .replaceAll('__','  ')
//         return newname
//
//     }
//     let n1 = 'Harry..Potter';
//     let n2 = 'Ron---Whisley';
//     let n3 = 'Hermione__Granger';
//     document.write(func(n1),'<br>');
//     document.write(func(n2),'<br>');
//     document.write(func(n3),'<br>');


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    // let arr = (length, numbers) => {
    //         let Newarr = [];
    //         for ( let i = 0; i < length; i++){
    //             Newarr.push(Math.floor(Math.random() * numbers));
    //         }
    //         return Newarr;
    // }
    // document.write(arr(10,10));
    // console.log(arr(10,10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//         let arr = (length, numbers) => {
//                 let Newarr = [];
//                 for ( let i = 0; i < length; i++){
//                     Newarr.push(Math.floor(Math.random() * numbers));
//                 }
//                 return Newarr;
//         }
//
//         let sortArr = arr(10,10);
//         document.write(sortArr.sort(),'<br>');
//         document.write(sortArr.sort((a,b) => b - a));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//             let arr = (length, numbers) => {
//                     let Newarr = [];
//                     for ( let i = 0; i < length; i++){
//                         Newarr.push(Math.floor(Math.random() * numbers));
//                     }
//                     return Newarr
//             }
//
//             let randomArr = arr(10,50);
//
//             const evenNumbers = randomArr.filter ( value => value % 2 === 0);
//             document.write(evenNumbers);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

        // let arr = (length, numbers) => {
        //                     let Newarr = [];
        //                     for ( let i = 0; i < length; i++){
        //                         Newarr.push(Math.floor(Math.random() * numbers));
        //                     }
        //                     return Newarr;
        //             }
        // let randomArr = arr(10,50);
        // let stringArr = randomArr.map(value => value.toString());
        // console.log(stringArr);
        // document.write(stringArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.





