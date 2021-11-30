// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//     let arr = `hello world`;
//     let arrLenght = arr.length;
//     console.log(arrLenght);
//
//     let Arr = 'hello world';
//     console.log(Arr.length);

    // let Arr2 = 'lorem ipsum';
    // console.log(Arr2.length);

    // let Arr3 = 'javascript is cool';
    // console.log(Arr3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

    // let Arr1 = 'hello world';
    // console.log(Arr1.toUpperCase());
    //
    // let Arr2 = 'lorem ipsum';
    // console.log(Arr2.toUpperCase());
    //
    // let Arr3 = 'javascript is cool';
    // console.log(Arr3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    // let Arr1 = 'HELLO WORLD';
    // console.log(Arr1.toLowerCase());
    //
    // let Arr2 = 'LOREM IPSUM';
    // console.log(Arr2.toLowerCase());
    //
    // let Arr3 = 'JAVASCRIPT IS COOL';
    // console.log(Arr3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//     let Arr = ' dirty string   ';
//     let trim = Arr.trim();
//     console.log(trim);
//     console.log(trim.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

    // let stringToarray = (str) => {
    //     return str.split(' ');
    // }
    // let str = 'Каждый охотник желает знать'
    // console.log(stringToarray(str));
    // document.write(stringToarray(str));
    //
    // Не до кінця зрозумів, навіщо тут взагалі let arr = stringToarray(str);, але знизу пропишу з тією умовою

    // let stringToarray = (str) => {
    //     return str.split(' ');
    // }
    // let str = 'Каждый охотник желает знать';
    // let arr= stringToarray(str);
    // console.log(arr);
    // document.writeln(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

    // let delete_characters = (str,length) => {
    //     return str.substr(0, length);
    // }
    // let str = 'Каждый охотник желает знать';
    // document.write(delete_characters(str, 7));
    // let string = 'one two three';
    // document.write(delete_characters(string,6));  // Перевіряв для себе

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

    // let insert_dash = (str) => {
    //     let splitjointoUppercase = str.split(' ').join('-').toUpperCase();
    //     return splitjointoUppercase;
    // }
    // let str = 'HTML JavaScript PHP';
    // console.log(insert_dash(str));
    // document.write(insert_dash(str));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//     let func = (str) => {
//         return str[0].toUpperCase() + str.slice(1);
//     }
//     let str ='javascript is cool'
//     document.write(func(str));


