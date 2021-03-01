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

