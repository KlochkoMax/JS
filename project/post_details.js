    let postDetails = JSON.parse(localStorage.getItem('Users'));
    console.log(postDetails);

    let post = Object.values(postDetails[0]);

    let mainPost = document.createElement('div');
    mainPost.classList.add('mainBlock');
    document.body.appendChild(mainPost);

    let ulDiv = document.createElement('div');
    ulDiv.classList.add('ulBlock');
    mainPost.appendChild(ulDiv);

    let ul = document.createElement('ul');
    ul.innerHTML = `<h2>Post detail :</h2>`;

    ulDiv.appendChild(ul);

    for (let key in postDetails[0]) {
                let li = document.createElement('li');
                li.classList.add('liText');
                li.innerHTML = `<b>${key}</b> : ${postDetails[0][key]}`

                ul.appendChild(li)
    }

    let showCommentsBtn = document.createElement('button');
    showCommentsBtn.classList.add('btn');
    showCommentsBtn.innerText = 'Show comments to this post'
    ulDiv.appendChild(showCommentsBtn);

    showCommentsBtn.onclick = function (){
        fetch(`https://jsonplaceholder.typicode.com/posts/${post[0]}/comments`)
            .then(comments => comments.json())
            .then(comments =>{
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('commentBlock');
                mainPost.appendChild(commentDiv);
                // localStorage.clear()

                for (let comment of comments) {
                    let commentCard = document.createElement('div');
                    commentCard.classList.add('commentCard');
                    commentCard.innerHTML = `${comment.body}<br>`;
                    commentDiv.appendChild(commentCard);

                    let commentNAmeEmail = document.createElement('div');
                    commentNAmeEmail.classList.add('commentName');
                    commentNAmeEmail.innerHTML = `<b>Name</b> : ${comment.name}<br><b>Email</b> : ${comment.email} `;
                    commentCard.appendChild(commentNAmeEmail);
                }
            })
    }






