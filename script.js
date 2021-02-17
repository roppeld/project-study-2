"use script";

// const timerId = setTimeout(function() {
//         console.log("Hello");
// }, 2000);


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

    function myAnimation() { //функция создания анимации маленькой коробочки, путем изменения координат её нахождения в своем родителе
        const element = document.querySelector('.box');//находим нужный элемент
        let position = 0;//устанавливаем переменную для дальнейших манипуляций с координатами

       const id = setInterval(frame, 5);//устанавливаем черз сколько милисекунд будет срабатывать функция frame

        function frame() {//функция изменения позиции
            if (position == 300) {//если переменная не достигла нужной нам границы
                clearInterval(id);//очистить запущенный интервал
            } else {//в противном случае
                position++;//увеличивать на единицу пеерменную
                element.style.top = position + 'px';//присваивать её свойству top
                element.style.left = position + 'px';//присваивать её свойству left
            }//меняя таким образом её местоположение относительно родителя
        }
    }

btn.addEventListener('click', myAnimation);//создание события после клика на кнопку

// function logger () {
//     if (i === 3) {
//        clearInterval(timerId);//сбрасывает счётчик
//     }
//     console.log('text');
//     i++;
// }

