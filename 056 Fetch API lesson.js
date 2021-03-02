"use script";

//Fetch API (Application Programming Interface) - предоставление каких-то готовых методов и свойств,
    //которые можно использовать. DOM API, то, с чем уже встречалась - встроенные методы в браузер для работы с 
    //DOM-структурой на странице; Fetch тоже встроен в браузер

    //JSONPlaceholder -небольшая база даны в формате JSONж фейковый REST API. 

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())//json() - метод уже переформатирует всё в js; также вс это возвращает promise
    .then(json => console.log(json));