// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

    // let cAdd = document.getElementById('main_header');
    // cAdd.classList.add('sep_2021');
    // console.log(cAdd);

// b) робить шириниу елементу ul 400px

    // let widthUl = document.getElementsByTagName('ul');
    // widthUl[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

    // let widthLinkList = document.getElementsByTagName('li');
    // for (const liElemenets of widthLinkList) {
    //     liElemenets.style.width = '50%'
    // }


// d) отримує текст який зберігається в елементі з класом listElement2

    // let listElement2Text = document.getElementsByClassName('listElement2');
    // console.log(listElement2Text);

// e) отримує всі елементи li та змінює ім колір фону на сірий

    // let changeLiBackground = document.getElementsByClassName('linkList');
    // for (const li of changeLiBackground) {
    //     li.style.background = 'grey';
    // }

// f) отримує всі елементи 'a' та додає їм клас anchor

    // let aAddedClass = document.getElementsByTagName('a');
    // for (const a of aAddedClass) {
    //        a.classList.add('anchor');
    // }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

    // let aChangeTextSize = document.getElementsByTagName('a');
    // for (const a of aChangeTextSize) {
    //     if ( a.innerText === 'link3'){
    //         a.style.fontSize = '40px'
    //         console.log(a);
    //     }
    // }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     let aAddClass = document.getElementsByTagName('a');
//     for (const a of aAddClass) {
//            let className = a.innerText;
//            a.classList.add(`element_${className}`)
//     }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

    // let color = prompt('Введіть бажаний колір');
    // let sHeader = document.getElementsByTagName('h3');
    // for (const h3 of sHeader) {
    //         h3.style.background = color;
    // }



// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

    // let color = prompt('Введіть бажаний колір');
    // let sHeader = document.getElementsByTagName('h3');
    // for (const h3 of sHeader) {
    //     if (h3.innerText === 'content 2 segment'){
    //         h3.style.background = color;
    //     }
    // }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

    // let color = prompt('Введіть текст');
    // let eContent1 = document.getElementsByClassName('content_1');
    // eContent1[0].innerText = color;

// l) отримати елементи p та змінити їм padding на 20px

    // let pPadding = document.getElementsByTagName('p');
    // for (const p of pPadding) {
    //     p.style.padding = '20px';
    // }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

    // let text2Change = document.getElementsByClassName('text2');
    // text2Change[0].innerText = 'sep-2021 Javascript';