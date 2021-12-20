localStorage.clear();

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then (value => value.json())
    .then ( value => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('main');

        for (let user of value) {
            let userCard = document.createElement('div')
            userCard.classList.add('userCard');

            let userName = document.createElement('div');
            userName.classList.add('userName');
            userName.innerHTML = `<h4>${user.id}. ${user.name}</h4>`;
            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'Details';

            button.onclick = function (){
                let userDetails = JSON.parse(localStorage.getItem('Users')) || [];
                userDetails.push(user);
                localStorage.setItem('Users', JSON.stringify(userDetails));
                location.href = 'user-details.html';
            }

            userCard.append(userName, button);
            mainDiv.appendChild(userCard);
        }


        document.body.appendChild(mainDiv);
    })