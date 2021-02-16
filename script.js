"use script";

// const timerId = setTimeout(function() {
//         console.log("Hello");
// }, 2000);


const btn = document.querySelector('.btn');
let timerId;

btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    const timerId = setInterval(logger, 2000);
});

clearInterval(timerId);//сбрасывает счётчик

function logger () {
    console.log('text');
}