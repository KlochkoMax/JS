// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square (a,b) {
//     return a * b;
// }
// document.write(square(2,6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function square (r) {
//     return 3.14 * r**2;
// }
// document.write(square(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function square (h,r){
//     return 2 * 3.14 * r *(h + r);
// }
//
// document.write(square(2,5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr  (array){
//      for ( i = 0; i < array.length; i++){
//          console.log(array[i]);
//      }
// }
//
// arr([1,2,3,4,5,6])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function newP (text){
//     return `<p>${text}</p>`;
// }
//
// document.write(newP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, suscipit!'))


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list (listText){
//     return `<ul>
//                 <li>${listText}</li>
//                 <li>${listText}</li>
//                 <li>${listText}</li>
//             </ul>`
// }
//
// document.write(list('Some text'));


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list (size, text) {
//     document.write(`<ul>`);
//             for ( let i = 0; i <size; i++){
//                 document.write(`<li>${text}</li>`);
//             }
//
//             document.write(`</ul>`);
// }
//
// list(4,"TEXT");



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function Arr (array) {
//     document.write(`<ul>`)
//         for (let i=0; i <array.length; i++){
//             document.write(`<li>${array[i]}</li>`)
//         }
//     document.write(`</ul>`)
// }
//
// Arr ([1,2,3,'string',true,false])




//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let massive = [{id: 1, name : 'Bart', age: 16} ,
//     {id: 2, name : 'Gomer', age: 46},
//     {id: 3, name : 'Marge', age: 42}];
//
//
// function block (array) {
//     document.write(`<div>`)
//         for (let i=0; i < array.length; i++){
//             let arr = array[i];
//             document.write(`<div>${arr.id}. NAME - ${arr.name}. Age - ${arr.age}</div>`)
//         }
//     document.write(`</div>`)
// }
// block(massive);



