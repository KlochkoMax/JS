//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

    // let n1 = 'Harry..Potter'
    // let n2 = 'Ron---Whisley'
    // let n3 = 'Hermione__Granger'
    //
    // let func = (name) =>{
    //     newname = name.replace('..', ' ').replace('---', ' ').replace('__', ' ')
    //     return newname
    // }
    //
    // document.write(func(n1) + '<br>');
    // document.write(func(n2) + '<br>');
    // document.write(func(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    // let func = (arrSize) => {
    //         let array = [];
    //         for (let i = 0; i < arrSize; i++) {
    //             array.push(Math.floor(Math.random() * 100));
    //     }
    //         return array;
    // }
    // document.write(func(5));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

    // let func = (arrSize) => {
    //         let array = [];
    //         for (let i = 0; i < arrSize; i++) {
    //             array.push(Math.floor(Math.random() * 100));
    //     }
    //         return array;
    // }
    // let newArray = func(10);
    // let sort = newArray.sort((a, b) => {
    //     return a - b
    // });
    // document.write(sort);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

    // let func = (arrSize) => {
    //         let array = [];
    //         for (let i = 0; i < arrSize; i++) {
    //             array.push(Math.floor(Math.random() * 100));
    //     }
    //         return array;
    // }
    // let newArray = func(10);
    // let filter = newArray.filter(value => value % 2 === 0);
    // document.write(filter)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let func = (arrSize) => {
//         let array = [];
//         for (let i = 0; i < arrSize; i++) {
//             array.push(Math.floor(Math.random() * 100));
//     }
//         return array;
// }
// let newArray = func(10);
// let toString = newArray.map(value => value.toString());
// document.write(toString);
// console.log(toString);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

    // let array = [ 2,3,6,8,0,3,23,12];
    // let sortNums= (someArray,direction) => {
    //     if (direction === 'ascending'){
    //         return someArray.sort((a, b) => a - b);
    //     }else if (direction === 'descending'){
    //          return someArray.sort((a, b) => b - a);
    //     }
    // }
    //
    // document.write(sortNums(array,'ascending'));



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
];
//
//     let sort = coursesAndDurationArray.sort((dur1,dur2) =>
//         dur2.monthDuration - dur1.monthDuration
//     );
//     console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    // let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
    // console.log(filter);

