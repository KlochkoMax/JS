// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    // function Cars (model, manufacturer, year, maxSpeed, engineVolume){
    //     this.model = model;
    //     this.manufacturer = manufacturer;
    //     this.year = year;
    //     this.maxSpeed = maxSpeed;
    //     this.engineVolume = engineVolume;
    //
    //     this.drive = function (){
    //         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
    //     };
    //
    //     this.info = function () {
    //         console.log(`Модель машини - ${this.model}`+`\n`
    //                    +`Виробник - ${this.manufacturer}`+`\n`
    //                    +`Рік випуску -${this.year} `+`\n`
    //                    +`Максимальна швидкість - ${this.maxSpeed} км на годину`+`\n`
    //                    +` Об'єм двигуна - ${this.engineVolume}`+`\n`
    //                    +` Водій - ${this.driver}`
    //         )
    //     };
    //
    //     this.increaseMaxSpeed = function (newSpeed){
    //         this.maxSpeed = this.maxSpeed + newSpeed;
    //         console.log(this.maxSpeed);
    //     };
    //
    //     this.changeYear = function (newValue) {
    //         this.year = newValue;
    //     };
    //
    //     this.addDriver = function (driver){
    //         this.driver = driver;
    //     };
    //
    // }
    //
    // let car1 = new Cars ('vaz','sovok','1950',100, '2');
    // console.log(car1);
    // car1.info();
    // car1.drive();
    // car1.increaseMaxSpeed(30);
    // car1.addDriver('Фьодор Іванич');
    // car1.info();


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    // class Cars {
    //     constructor(model,manufacturer,year,maxSpeed,engineVolume) {
    //         this.model = model;
    //         this.manufacturer = manufacturer;
    //         this.year = year;
    //         this.maxSpeed = maxSpeed;
    //         this.engineVolume = engineVolume;
    //     }
    //     drive () {
    //         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    //     };
    //
    //     info () {
    //         for (let item in this) {
    //             console.log(`${item} - ${this[item]}`);
    //         }
    //     };
    //     increaseMaxSpeed (newSpeed){
    //         this.maxSpeed = this.maxSpeed + newSpeed;
    //         console.log(this.maxSpeed);
    //     };
    //
    //     changeYear (newValue) {
    //         this.year = newValue;
    //
    //     };
    //
    //     addDriver (driver) {
    //         this.driver = driver;
    //     };
    // }
    //
    // let car1 = new Cars ('vaz','sovok','1950',100, '2');
    // console.log(car1)
    // car1.drive();
    // car1.info();
    // car1.increaseMaxSpeed(30);
    // car1.changeYear(1965);
    // car1.info();
    // // перевіряв, чи змінило рік випуску
    // car1.addDriver('Фьодор Іванич');
    // car1.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popelyushka {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
//
// let Popelyushki = [
//     new Popelyushka('Pope1', 21, 35),
//     new Popelyushka('Pope2', 22, 36),
//     new Popelyushka('Pope3', 21, 33),
//     new Popelyushka('Pope4', 19, 39),
//     new Popelyushka('Pope5', 18, 45),
//     new Popelyushka('Pope6', 24, 33),
//     new Popelyushka('Pope7', 25, 38),
//     new Popelyushka('Pope8', 26, 41),
//     new Popelyushka('Pope9', 15, 42),
//     new Popelyushka('Pope10', 35, 44),
// ]
//
// console.log(Popelyushki);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
//     class Prince {
//         constructor(name,age,shoeSize) {
//             this.name = name;
//             this.age = age;
//             this.shoeSize = shoeSize;
//         }
//
//     }
//
//     let prince1 = new Prince('Adam',30, 45);
//     console.log(prince1)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

        // let fate = (pope,pr) => {
        //     for ( let item of Popelyushki){
        //         if ( item.footSize === prince1.shoeSize){
        //             console.log(`right choice - ${item.name}`)
        //         }
        //     }
        // }
        //
        // fate(Popelyushki,prince1)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

        // console.log(Popelyushki.find(value => value.footSize === prince1.shoeSize));




