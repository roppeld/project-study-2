"usse script";

//filter

const names = ['Ivan', 'Max', 'Peter', 'Vladimir', 'Margarita', 'Vsevolod'];

const shortNames = names.filter(names => {
    return names.length < 5;
});

const answer = ['IvAn', 'anNA', "vAsyA", "mAx"];

const result = answer.map(item => item.toLowerCase());

const someElement = ['3', 3, 'fsdfssfa', true];

console.log(someElement.some(item => typeof(item) === 'number'));//если хотя бы один елемент подходит, то тру
console.log(someElement.every(item => typeof(item) === 'number'));//если все подходят, то тру

// reduce 

const arr = [2, 4, 6, 7, 2, 7];

const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr2 = ['pineapple', 'bananas', 'watermelon', 'strawberry'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`, 'la-la-la');
console.log(res2);
//второй аргумент reduce ставит начальное значение, т.е. оно уже не 0 по умолчанию или пустая строка и т.д.

const obj = {
    ivan: 'person',
    anna: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);
console.log(newArr);
