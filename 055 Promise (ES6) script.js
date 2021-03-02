"use script";

console.log('Запрос данных...');

const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000);
});

promise.then(product => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Модификация данных...');
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data =>{//чейнинг - цепочка функций 
    setTimeout(() => {
       console.log('Показ данных...');
       console.log(data);
    }, 2000);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('Finally!');
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

//напр. делается запрос на разные сервера чтобы взяять несколько картинок ответ от серверов самый разный
//мы же ждём пока все картинки загрузятся и тогда будет выполнен код далее для взаимодействия с картинками
Promise.all([test(1000), test(2000)]).then(() => {//метод all() служит для того, чтобы точно знать, что все наши промисы уже выполнились
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {//метод race() определяет какой из промисов выполнился первым  
    console.log('All');//и только тогда выполняем определенную операцию
});