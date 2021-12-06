// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//   створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//     let usersArray = [
//         user1 = new User(3, 'misha', 'shyshka', 'shyshka@gmail.com','0630000001'),
//         user2 = new User(2, 'grisha', 'grusha', 'grushka@gmail.com','0630000002'),
//         user3 = new User(1, 'alisha', 'lishka', 'lishka@gmail.com','0630000003'),
//         user4 = new User(5, 'parnisha', 'parnishka', 'parnishka@gmail.com','0630000004'),
//         user5 = new User(4, 'jora', 'priora', 'lada@gmail.com','0630000005'),
//         user6 = new User(8, 'georgiy', 'geolog', 'skala@gmail.com','0630000006'),
//         user7 = new User(7, 'james', 'bond', '007@gmail.com','0630000007'),
//         user8 = new User(6, 'misha2', 'shysha2', 'shyshka2@gmail.com','0630000008'),
//         user9 = new User(9, 'misha3', 'shysha3', 'shyshka3@gmail.com','0630000009'),
//         user10 = new User(10, 'misha4', 'shysha4', 'shyshka4@gmail.com','06300000010'),
//     ];

    // console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    // let userFilter = usersArray.filter(value => value.id % 2 === 0);
    // console.log(userFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    // let userSort = usersArray.sort((a, b) => a.id - b.id);
    // console.log(userSort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

    // class Client {
    //     constructor(id, name, surname , email, phone, order) {
    //         this.id = id;
    //         this.name = name;
    //         this.surname = surname;
    //         this.email = email;
    //         this.phone = phone;
    //         this.order = order;
    //     }
    // }
    //
    // let arrayClient = [
    //     new Client(1,'Anry','Tierry', 'anry228@gmail.com','0970070707',['banana','juice']),
    //     new Client(2,'Anry2','Tierry2', 'anry2228@gmail.com','0970070701',['banana', 'apple', 'juice']),
    //     new Client(3,'Anry3','Tierry3', 'anry3228@gmail.com','0970070702',['apple']),
    //     new Client(4,'Anry4','Tierry4', 'anry4228@gmail.com','0970070703',['banana', 'apple', 'juice','meat']),
    //     new Client(5,'Anry5','Tierry5', 'anry5228@gmail.com','0970070704',['banana', 'apple', 'juice','mivina','meat','beer']),
    //     new Client(6,'Anry6','Tierry6', 'anry6228@gmail.com','0970070705',['banana']),
    //     new Client(7,'Anry7','Tierry7', 'anry7228@gmail.com','0970070706',['banana', 'apple', 'juice','cigarettes']),
    //     new Client(8,'Anry8','Tierry8', 'anry8228@gmail.com','0970070708',['banana', 'apple', 'juice', 'cat food']),
    //     new Client(9,'Anry9','Tierry9', 'anry9228@gmail.com','0970070709',['banana', 'apple', 'juice','pizza']),
    //     new Client(10,'Anry10','Tierry10', 'anry10228@gmail.com','09700707010',['banana', 'apple', 'juice']),
    // ];

    // console.log(arrayClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    // let clientSort = arrayClient.sort((a, b) => a.order.length - b.order.length);
    // console.log(clientSort);