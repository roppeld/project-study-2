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


