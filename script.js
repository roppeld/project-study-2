"use script";

// const timerId = setTimeout(function() {
//         console.log("Hello");
// }, 2000);


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

    function myAnimation() {
        const element = document.querySelector('.box');
        let position = 0;

       const id = setInterval(frame, 5);

        function frame() {
            if (position == 300) {
                clearInterval(id);
            } else {
                position++;
                element.style.top = position + 'px';
                element.style.left = position + 'px';
            } 
        }
    }

btn.addEventListener('click', myAnimation);

// function logger () {
//     if (i === 3) {
//        clearInterval(timerId);//сбрасывает счётчик
//     }
//     console.log('text');
//     i++;
// }

