'use script';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//    a: 5,
//    b: 6,
//    sum: function() {
//        function shout() {//это уже простой выов функции, это уже не метод объекта, поэтому контекст будет уже для
//            console.log(this);//глобального объекта window, так как нет привязки. это уже не метод объекта. 
//        }//это просто функция, которая находится внутри другой функции, вот та бы привязана к объекту и имела его контекст
//        shout();
//     }
// };

// function User(name, id) {//функция конструктор. this ссылается на создаваемый объект благодаря этому конструктору
//     this.name = name;//this.name это ссылка на то, что это имя именно того, только что созданного посредством
//     this.id = id;//new объекта и приваивается ему то значение, которое приходит в аргументы его кострууктора
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 29);

function sayName(surname) {
    console.log(this);
    console.log(this.name + " " + surname);
}

const user = {
    name: 'John',
    go: function(surname) {
       console.log(`Пользователь ${this.name} ${surname} идет`);
    }
};

const user2 = {
    name: 'Alex',

};

user.go('Valcovich');

//функции быстрого вызова
sayName.call(user, 'Smith');//вся разница между call и apply в том, что call может принимать любое кол-во аргументов
sayName.apply(user, ['Smith']);//а apply принимает только два аргумента - this и массив дополнительных аргументов

const bindTest = user.go.bind(user2);

console.log(bindTest);
bindTest('Perelman');//можно будет добавить сюда позже переменную, в которую попадет значение, которое захочет
//ввести пользователь, какое-нибудь value в inpute перебросится в переменную и тогда динамически будет 
//добавлено значение, продолжая ручное присвоение контекста функции, которую хотим вызвать
//т.е. благодаря bind() можно поставить на паузу присвоение, дождавшись нужного аргумента.

// showThis();

// 1) Обычная функция - this = window
// 2) Контекст фукнции в объекте - сам объект
// 3) this в констукторах и классах - это новый экземпляр объекта
// 4) Ручное присвоение контекста. Отдельно стоящие друг от друга объекты связывают посредством методов 
// call(), apply(), bind()