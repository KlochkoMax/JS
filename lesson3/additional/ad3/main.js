// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

    // let arr = [];
    //     for (let i = 0, j = 0; j < 50;  j++) {
    //         let number = Math.round(Math.random()*100);
    //         if ( number%2 === 0){
    //             arr[i] = number
    //         }
    //         arr[j] = arr[i]
    //
    //
    //
    //
    //     }
    //     console.log(arr)
    //     document.write(arr)


        // Знизу другий варіант, простіший, на першому застряг на годину десь. Таке питання, інколи при ітерації
           // бува пару позицій undefind, це глюк якийсь, чи я припустився помилки?

    // let arr = [];
    // for (let i = 2, j = 0; i <50; i += 2, j++) {
    //     arr[j] = i;
    // }
    // console.log(arr);



//     b. заповнити його 50 непарними числами за допомоги циклу.

    // let array = [];
    //     for (let i = 0, j = 0; j < 50; j++){
    //         number = Math.round(Math.random()*100);
    //         if (number%2 !== 0 ){
    //             array[i] = number;
    //         }
    //         array[j]= array[i];
    //     }
    //
    //     console.log(array)
    //     document.write(array)

        // let array = [];
        //     for (let i = 1, j = 0; j<50; i+=2, j++){
        //         array[j] = i;
        //     }
        //
        // console.log(array)
        // document.write(array)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

        // let array = [];
        //     for ( i = 0; i < 20; i++){
        //         array[i] = Math.round(Math.random()*100);
        //     }
        // console.log(array);
        // document.write(array)

// Заповнити масив 20ма
// рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

    // let array = []
    //     for ( let i = 0; i < 20; i++){
    //         array[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    //
    //     }
    //     console.log(array);
    //     document.write(array);

// 2. Вивести за допомогою console.log кожен третій елемент

let array = [];
    for (let  i = 0; i < 10; i++) {
        array[i] = Math.round(Math.random() * 10);

    }

    document.write(array);
    console.log(array);