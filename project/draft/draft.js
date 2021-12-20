let user = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
    ]

    function printObj(obj) {
        let ul = document.createElement('ul')
        ul.innerText = `Detailed info`;
        document.body.appendChild(ul)
        for (let key in obj) {
            let value = obj[key];
            if (typeof value === 'object') {
                // let pK = document.createElement('p');
                // pK.innerText = `${key}`;
                // document.body.appendChild(pK);
                printObj(value);
            } else {
                let li = document.createElement('li');
                li.innerText = `${key} : ${value}`;
                ul.appendChild(li)
            }
        }
    }

    printObj(user);

