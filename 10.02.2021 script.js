"use script";

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));//получаем класс
console.log(btns[1].classList.add('red'));
//если добавлен класс, который в css имеет свой код, то это создание
// интерактивных вещей и возможность динамически менять классы на странице

// console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue')); //тоглить классы - значит
//переключать их, если нет такого класса, то он добавиться, если есть
// - уберется

if (btns[1].classList.contains('red')) {
    console.log('red');
}
