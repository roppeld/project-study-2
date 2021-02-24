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

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: "${this.text}", цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(30, 50, "I'am Rectangle!", 'green');

div.showMyProps();
console.log(div.calcArea());

const long = new Rectangle(20, 100);
const square = new Rectangle(10, 10);

console.log(long.calcArea());
console.log(square.calcArea());