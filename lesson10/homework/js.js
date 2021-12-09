
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text"

    // let p = document.createElement('p');
    // p.id = 'text';
    // p.innerText = 'Some text';
    // // console.log(p); - перевіряв, щоб елемент створився із вказаним id
    // document.body.appendChild(p);
    //
    // let button = document.createElement("button");
    // button.innerText = 'Delete text';
    // document.body.appendChild(button);
    //
    // button.onclick = function (){
    //     p.style.display = 'none';
    //     console.log('wasd')
    // }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
//     let button = document.createElement('button');
//     button.innerText = 'Hide me';
//
//     document.body.appendChild(button);
//
//     button.onclick = function (){
//         this.style.display = 'none'
//     };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

    // let input = document.createElement('input');
    // input.type = 'number';
    // document.body.appendChild(input);
    //
    // let button = document.createElement('button');
    // button.classList.add('button2task');
    // button.innerText = 'Please enter your age';
    // document.body.appendChild(button);
    //
    // button.onclick = function (){
    //     if ( input.value < 18){
    //         document.write('You are too young');
    //     }else if ( input.value >=18 && input.value < 120){
    //         document.write('You are an adult');
    //     }else document.write('People don`t live that much');
    // }

// - Создайте меню, которое раскрывается/сворачивается при клике
//     let array = ['Gallery', 'Items', 'Contacts', 'About'];
//
//     let div = document.createElement('div');
//     div.classList.add('div4task');
//
//     let ul = document.createElement('ul');
//     ul.classList.add('ul4task');
//
//     let menu = document.createElement('div');
//     menu.classList.add('menu4task');
//
//     array.forEach(value => {
//         let li = document.createElement('li');
//         li.innerText = value;
//         ul.appendChild(li);
//     });
//
//     ul.onclick = function (){
//         this.classList.toggle('hide4task');
//     };
//
//     div.appendChild(ul);
//     document.body.appendChild(div);


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

    // let array = [
    //     {title : 'Перший коментар', body : 'Мені все сподобалось, рекомендую відвідати.'},
    //     {title : 'Другий коментар', body : 'Ці зависокі при досить низькому рівні обслуговування.'},
    //     {title : 'Третій коментар', body : 'Продам гараж.'},
    // ];
    //
    // let mainDiv = document.createElement('div');
    // mainDiv.classList.add('mainDivTask5');
    //
    // array.forEach(value => {
    //     let container = document.createElement('div');
    //     container.classList.add('containerTask5');
    //     mainDiv.appendChild(container);
    //
    //     let feedback = document.createElement('div');
    //     feedback.classList.add('feedbackTask5');
    //     feedback.innerText = value.title + ' :';
    //     container.appendChild(feedback);
    //
    //     let comment = document.createElement('div');
    //     comment.classList.add('commentTask5');
    //     comment.innerText = value.body;
    //     container.appendChild(comment);
    //
    //     let button = document.createElement('button');
    //     button.classList.add('buttonTask5')
    //     button.innerText = 'Hide/Show comment'
    //     container.appendChild(button);
    //
    //     button.onclick = function (){
    //         comment.classList.toggle('hideTask5');
    //     }
    //
    // });
    //
    // document.body.appendChild(mainDiv);








