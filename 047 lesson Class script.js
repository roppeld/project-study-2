"use script";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width; 
    }

    calcArea() {
        return this.height * this.width;
    }
}

const long = new Rectangle(20, 100);
const square = new Rectangle(10, 10);

console.log(long.calcArea());
console.log(square.calcArea());