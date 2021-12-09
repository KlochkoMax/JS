// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених
// обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


    let arrFavorites = [];
    for (const user of users) {
        let div1 = document.createElement('div');

        let p = document.createElement('p');
        p.innerText = 'Name - ' + user.name + ', Age - ' + user.age + ', status - ' + user.status;

        let btn = document.createElement('button');
        btn.innerText = 'Add to favorites';

        let btn1 = document.createElement('button');
        btn1.innerText = 'go to favorites';



        btn.onclick = function () {
            arrFavorites.push(user);
            let newFavor = JSON.stringify(arrFavorites);
            localStorage.setItem( 'Users' , newFavor );
        }

        btn1.onclick = function () {
            location.href = 'favorites.html';
        }

        div1.appendChild(p);
        div1.appendChild(btn);
        div1.appendChild(btn1);
        document.body.appendChild(div1);
    }

    localStorage.clear()

