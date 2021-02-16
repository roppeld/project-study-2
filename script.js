"use script";

// const timerId = setTimeout(function() {
//         console.log("Hello");
// }, 2000);


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});

function logger () {
    if (i === 3) {
       clearInterval(timerId);//сбрасывает счётчик
    }
    console.log('text');
    i++;
}

