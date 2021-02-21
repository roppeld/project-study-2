"use script";

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style.display);

// const width = box.clientWidth;
// const height = box.clientHeight;

// console.log(width, height); // box-sizing: border-box в стилях впишет в ширину и высоту паддинги и от общей ширины
// //и высоты будут отниматься только бордеры, если есть и скролл

// const width2 = box.offsetWidth;
// const height2 = box.offsetHeight;

// console.log(width2, height2);

// const width3 = box.scrollWidth;
// const height3 = box.scrollHeight;

// console.log(width3, height3);