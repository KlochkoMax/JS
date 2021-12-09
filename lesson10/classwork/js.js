//    - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//        Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

    // let form1 = document.createElement('form');
    // let form2 = document.createElement('form');
    //
    // let inputF11 = document.createElement('input');
    // let inputF12 = document.createElement('input');
    //
    // let inputF21 = document.createElement('input');
    // let inputF22 = document.createElement('input');
    //
    // let btn = document.createElement('button');
    // btn.innerText = 'Press';
    //
    // btn.onclick = function () {
    //     console.log(inputF11.value);
    //     console.log(inputF12.value);
    //     console.log(inputF21.value);
    //     console.log(inputF22.value);
    // }
    //
    // form1.appendChild(inputF11);
    // form1.appendChild(inputF12);
    // form2.appendChild(inputF21);
    // form2.appendChild(inputF22);
    // document.body.appendChild(form1);
    // document.body.appendChild(form2);
    // document.body.appendChild(btn);

    //Зробив цей варіант, але здається він не відповідає умовам.
    //нижче другий варіант.

    // let form1 = document.createElement('form');
    // form1.name = 'f1';
    // let form2 = document.createElement('form');
    // form2.name = 'f2';
    //
    // let inputF11 = document.createElement('input');
    // inputF11.name = 'inp11';
    // let inputF12 = document.createElement('input');
    // inputF12.name = 'inp12';
    //
    // let inputF21 = document.createElement('input');
    // inputF21.name = 'inp21';
    // let inputF22 = document.createElement('input');
    // inputF22.name = 'inp22';
    //
    // let btn = document.createElement('button');
    // btn.innerText = 'Press';
    //
    // btn.onclick = function () {
    //     let firstinput = document.forms.f1.inp11.value;
    //     let secondinput = document.forms.f1.inp12.value;
    //     let thirdinput = document.forms.f2.inp21.value;
    //     let fourthinput = document.forms.f2.inp22.value;
    //     console.log(firstinput,secondinput,thirdinput,fourthinput);
    // }
    //
    // form1.appendChild(inputF11);
    // form1.appendChild(inputF12);
    // form2.appendChild(inputF21);
    // form2.appendChild(inputF22);
    // document.body.appendChild(form1);
    // document.body.appendChild(form2);
    // document.body.appendChild(btn);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

    // let form = document.createElement('form');
    //
    // let input1 = document.createElement('input');
    // input1.type = 'number';
    // let input2 = document.createElement('input');
    // input2.type = 'number';
    // let input3 = document.createElement('input');
    // input3.type = 'text';
    //
    // let btn = document.createElement('button');
    // btn.innerText = 'Build the table';
    //
    // let table = document.createElement('table');
    //
    // btn.onclick = function (){
    //     let tr = input1.value;
    //     let td = input2.value;
    //     let text = input3.value;
    //
    //     for (let i = 0; i < tr; i++) {
    //         let tableTr = document.createElement('tr');
    //         for (let j = 0; j < td; j++) {
    //             let tableTd = document.createElement('td');
    //             tableTr.appendChild(tableTd);
    //             tableTd.innerText = text;
    //
    //         }
    //         table.appendChild(tableTr);
    //     }
    //
    // }
    //
    // form.appendChild(input1);
    // form.appendChild(input2);
    // form.appendChild(input3);
    //
    //
    // document.body.appendChild(form);
    // document.body.appendChild(btn);
    // document.body.appendChild(table);

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

    // let array = ['fuck', 'asshole', 'cunt', 'boner', 'slut', 'nigger', 'bitch'];
    //
    // let input = document.createElement('input');
    //
    // let btn = document.createElement('button');
    // btn.innerText = 'Enter the word';
    //
    // btn.onclick = function () {
    //     for (const word of array) {
    //         if ( word === input.value){
    //             alert('Bad word');
    //         }
    //
    //     }
    // }
    //
    //
    //
    // document.body.appendChild(input);
    // document.body.appendChild(btn);


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//

    // let array = ['fuck', 'asshole', 'cunt', 'boner', 'slut', 'nigger', 'bitch'];
    //
    // let input = document.createElement('input');
    //
    //
    // let btn = document.createElement('button');
    // btn.innerText = 'Enter the word';
    //
    // btn.onclick = function () {
    //     for (const word of array) {
    //         if ( input.value.includes(word)){
    //             alert('Bad word');
    //         }
    //
    //     }
    // }
    //
    // document.body.appendChild(input);
    // document.body.appendChild(btn);
