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
    const promise2 = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Модификация данных...');
            product.status = 'order';
            resolve(product);
        }, 2000);
    });

    promise2.then(data =>{
        setTimeout(() => {
           console.log('Показ данных...');
           console.log(data);
        }, 2000);
    });
});

