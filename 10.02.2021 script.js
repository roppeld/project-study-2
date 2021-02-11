"use script";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));//получаем класс
// console.log(btns[1].classList.add('red'));
//если добавлен класс, который в css имеет свой код, то это создание
// интерактивных вещей и возможность динамически менять классы на странице

// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); //тоглить классы - значит
//переключать их, если нет такого класса, то он добавиться, если есть
// - уберется

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

console.log(btns[0].className); //устарело. но показывает все классы сразу

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {//если 
        console.log('Hello');//есть класс red, то будет работать 
    } //событие 
});

// btns.forEach(btn => {
//    btn.addEventListener('click', () => {
//      console.log('Hello');
//    });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);