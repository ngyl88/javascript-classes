class Rectangle {
    constructor(breadth, length) {
        this.breadth = breadth;
        this.length = length;
    }

    getArea() {
        return this.breadth * this.length;
    }

    getPerimeter() {
        return 2 * this.length + 2 * this.breadth;
    }
}

const rect1 = new Rectangle(2, 4);
console.log(`rect1
    Breadth ${rect1.breadth}
    Length ${rect1.length}
    Computed:
        Area ${rect1.getArea()}
        Perimeter ${rect1.getPerimeter()}
`);

const rect2 = new Rectangle(5, 10);
console.log(`rect2
    Breadth ${rect2.breadth}
    Length ${rect2.length}
    Computed:
        Area ${rect2.getArea()}
        Perimeter ${rect2.getPerimeter()}
`);