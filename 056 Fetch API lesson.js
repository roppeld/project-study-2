"use script";

//Fetch API (Application Programming Interface) - предоставление каких-то готовых методов и свойств,
    //которые можно использовать. DOM API, то, с чем уже встречалась - встроенные методы в браузер для работы с 
    //DOM-структурой на странице; Fetch тоже встроен в браузер

    //JSONPlaceholder -небольшая база даны в формате JSON; фейковый REST API. 

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",//в объекте задаются настройки запросу 
        body: JSON.stringify({name: 'Alex'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));