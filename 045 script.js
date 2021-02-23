"use script";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушёл.`);
};

const ivan = new User('Ivan', 29);
const alex = new User('Alex', 45);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);