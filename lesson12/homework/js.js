// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(array => array.json())
    //     .then(array =>{
    //             let main = document.createElement('div');
    //             main.classList.add('mainBlock')
    //             for (let item of array) {
    //                     let content = document.createElement('div');
    //                     content.classList.add('contentBlock');
    //
    //                     let head = document.createElement('h3');
    //                     head.classList.add('headBlock');
    //                     head.innerText = `${item.id}. ${item.title}`;
    //
    //                     let p = document.createElement('p');
    //                     p.classList.add('textBlock');
    //                     p.innerText = item.body;
    //
    //
    //                     content.appendChild(head);
    //                     content.appendChild(p);
    //                     main.appendChild(content);
    //             }
    //
    //
    //
    //     document.body.appendChild(main);
    //     })
    //

//
//
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(array => array.json())
        .then (array =>{
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('main');

                for (let item of array) {
                    let content = document.createElement('div');
                    content.classList.add('contentCW');
                    content.innerHTML =`
                            <h4>${item.id}.</h4>
                            <h3>${item.name}</h3>
                            <p class="emailText"> <b>email</b>: ${item.email}</p>
                            <p class="bodyText">${item.body}</p>
                            `
                    mainDiv.appendChild(content);
                }


            document.body.appendChild(mainDiv)
})
