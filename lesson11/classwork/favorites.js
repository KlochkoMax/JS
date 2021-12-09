
let favArray = JSON.parse(localStorage.getItem('Users'));





for (const user of favArray) {
    let div1 = document.createElement('div');

    let p = document.createElement('p');
    p.innerText = 'Name - ' + user.name + ', Age - ' + user.age + ', status - ' + user.status;


    div1.appendChild(p)
    document.body.append(div1);
}

