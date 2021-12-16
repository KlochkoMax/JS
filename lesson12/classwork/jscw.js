
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста



    // id title body


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(array => array.json())
        .then(array => {
            let main = document.createElement('div');
            main.classList.add('mainCW');
            for (let item of array) {
                let divCW = document.createElement('div');
                divCW.classList.add('divClassWork');


                let titleCW = document.createElement('h2');
                titleCW.classList.add('title');
                titleCW.innerText = `${item.id}.   ${item.title}`;

                let bodyCW = document.createElement('div');
                bodyCW.classList.add('body');
                bodyCW.innerText = item.body;

                let btn = document.createElement('button');
                btn.classList.add('btn');
                btn.innerText = 'Get comments';

                btn.onclick = function () {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                        .then(comments => comments.json())
                        .then(comm => {
                            let commentDiv = document.createElement('div');
                            commentDiv.classList.add('commentCW');

                            for (let commentItem of comm) {
                                let commentItemDiv = document.createElement('div')
                                commentItemDiv.classList.add('commentCW');

                                commentItemDiv.innerHTML =
                                    `
                                    <h4>${commentItem.name}</h4>
                                    <h5>${commentItem.email}</h5>
                                    <p>${commentItem.body}</p>
                                    `
                                divCW.appendChild(commentItemDiv);
                            }
                            btn.disabled = true;
                            divCW.appendChild(commentDiv);
                        })


                }






                    divCW.appendChild(titleCW);
                    divCW.appendChild(bodyCW);
                    divCW.appendChild(btn);
                    main.appendChild(divCW)
                }


                document.body.appendChild(main);
            }
        )

