// створити масив з:
//    з 5 числових значень
//      5 стічкових значень
//      5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль




// let a = [1, 2, 3, 4, 5,];
// let b = ['one', 'two', 'three', 'fore', 'five'];
// let c = [ 11, 22, "some", true, false];
//     console.log(a);
//     document.write(a , `<br>`);
//
//     console.log(b);
//     document.write(b, `<br>`);
//
//     console.log(c);
//     document.write(c, `<br>`);


    // Створити пустий масив.
    // Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
    // Вивести в консоль

    //     let array = [ '', '', '', '', ''];
    //     console.log(array[0], 'one');
    //     document.write(`<div> ${array[0]} one </div>`);
    //
    //     console.log(array[0], 'two');
    //     document.write(`<div> ${array[1]} two  </div>`);
    //
    //     console.log(array[0], 'three');
    //     document.write(`<div> ${array[2]} three  </div>`);
    //
    //
    //     console.log(array[0], 'four');
    //     document.write(`<div> ${array[1]} four  </div>`);
    //
    //
    //     console.log(array[0], 'five');
    //     document.write(`<div> ${array[1]} five  </div>`);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

        // for (let i = 0; i <=10; i++){
        //     document.write(`<div> Довільний текст </div>`)
        // }
        //
        // for (let i = 0; i <=10; i++){
        // document.write(`<div> ${[i]} Довільний текст </div>`)
        // }

           // let i = 0;
           // while (i <=20) {
           //     document.write(`<h1>wasd</h1>`)
           //     i++;
           // }

           // let i = 0;
           // while (i <=20) {
           // document.write(`<h1>${[i]} Довільний текст</h1>`)
           // i++;
           //  }







// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
        // let some = [1,2,3,4,5,6,7,8,9,10]
        // for ( let i = 0; i < some.length; i++){
        //     console.log(some[i]);
        //     document.write(some[i]);
        // }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

        //
        // let string = ['a','b','c','d','e','f','g','h','i','j']
        // for ( let st of string) {
        //     console.log(st);
        //     document.write(st);
        // }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

        // let array = [1,2,3,'four','five','six', true, false, null,'ten'];
        // let i = 0;
        // while (i < array.length){
        //     console.log(array[i]);
        //     document.write(`<div> ${array[i]} </div>`);
        //     i++
        // }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
//         let array =  [ 1, true , 3,  4, 'okten', false, 'hello', true, 9, 10];
//                 for ( i = 0; i <=array.length; i++){
//                     if ( typeof array[i] === 'boolean'){
//                         console.log(array[i], ' ')
//                         document.write(array[i],' ');
//                     }
//
//                 }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

           // let array =  [ 1, true , 3,  4, 'okten', false, 'hello', true, 9, 10];
           //          for ( i = 0; i < array.length; i++){
           //              if ( typeof array[i] === 'number'){
           //                  console.log(array[i]);
           //                  document.write(array[i], ' ');
           //              }
           //          }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

              // let array =  [ 1, true , 3,  4, 'okten', false, 'hello', true, 9, 10];
              //   for ( i = 0; i <array.length; i++){
              //       if (typeof array[i] === 'string'){
              //           console.log(array[i]);
              //           document.write(array[i], ' ')
              //       }
              //   }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

                // let  elements = [];
                //      elements[0] = 'Okten';
                //      elements[1] = 2;
                //      elements[2] = 42;
                //      elements[3] = 'something';
                //      elements[4] = true;
                //      elements[5] = 1111;
                //      elements[6] = 'first';
                //      elements[7] = 'Okten2';
                //      elements[8] = false;
                //      elements[9] = 'second';
                // for ( i = 0; i < elements.length; i++){
                //     console.log(elements[i]);
                //     document.write(elements[i], `<br>`);
                // }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

                // for ( let i = 0; i <= 10; i++){
                //     console.log(i);
                //     document.write(i, `<br>`)
                // }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

                // for ( let i = 0; i <= 100; i++){
                //     console.log(i);
                //     document.write( i , `<br>`)
                // }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

                    // for ( let i = 0; i <= 100; i+=2){
                    //     console.log(i);
                    //     document.write( i , `<br>`)
                    // }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

                    // Тут не зовсім зрозумів, чим це відрізняється від минулого завдання, адже в минулому коді
                    //якраз і виводились парні числа. Можливо мається на увазі  через if
                    // for ( let i = 0; i <= 100; i++){
                    //        if ( 0 === i%2){
                    //            console.log(i);
                    //            document.write( i , `<br>`)
                    //        }
                    //    }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//                     for ( let i = 0; i <= 100; i++){
//                            if ( 0 !== i % 2 ){
//                                console.log(i);
//                                document.write( i , `<br>`)
//                            }
//                        }











