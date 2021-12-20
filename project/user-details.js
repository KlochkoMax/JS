
    let userDetails = JSON.parse(localStorage.getItem('Users'));
    // console.log(userDetails)

    let user_id = Object.values(userDetails[0])
    // console.log(user_id[0])


    let main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    let ul = document.createElement('ul');
    ul.innerHTML = `<h2>Detailed info:</h2>`;
    main.appendChild(ul);

    function printObj(obj) {
        for (let key in obj) {
            let value = obj[key];
            if (typeof value === 'object') {
                let lK = document.createElement('li');
                lK.classList.add('lK')
                lK.innerHTML = `<b>${key}</b>:`;
                ul.appendChild(lK);
                printObj(value);
            } else {
                let li = document.createElement('li');
                li.classList.add('li');
                li.innerText = `${key} : ${value}`;
                ul.appendChild(li)
            }
        }
    }

     printObj(userDetails);
     let button = document.createElement('button');
     button.innerText = `Post of current user`;
     button.classList.add('btn');

     main.appendChild(button)

     button.onclick = function (){
        fetch(`https://jsonplaceholder.typicode.com/users/${user_id[0]}/posts`)
            .then(posts => posts.json())
            .then( posts => {
                let postDiv = document.createElement('div');
                postDiv.classList.add('postdiv');
                main.appendChild(postDiv);
                localStorage.clear();

                for (let post of posts) {
                    let postCard = document.createElement('div');
                    postCard.classList.add('postcard');
                    postCard.innerText = post.title;
                    postDiv.appendChild(postCard);
                    // console.log(postCard);
                    button.disabled = true;

                    let postButton = document.createElement('button');
                    postButton.classList.add('postBtn');
                    postButton.innerText = 'Post details';
                    postCard.appendChild(postButton);

                    postButton.onclick = function (){
                        let postDetails = JSON.parse(localStorage.getItem('Users')) || [];
                        postDetails.push(post);
                        localStorage.setItem('Users', JSON.stringify(postDetails));
                        location.href = 'post-details.html';
                    }
                }

            })
    }






