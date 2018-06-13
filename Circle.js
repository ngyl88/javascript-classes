class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return (Math.PI * this.radius ** 2).toFixed(1);
    }
    getPerimeter() {
        return (2 * Math.PI * this.radius).toFixed(1);
    }
}

const c1 = new Circle(1);
console.log(`c1
    radius ${c1.radius}
    Computed:
        area ${c1.getArea()};
        perimeter ${c1.getPerimeter()};
`);

const c2 = new Circle(2);
console.log(`c2
    radius ${c2.radius}
    Computed:
        area ${c2.getArea()};
        perimeter ${c2.getPerimeter()};
`);

const c3 = new Circle(3);
console.log(`c3
    radius ${c3.radius}
    Computed:
        area ${c3.getArea()};
        perimeter ${c3.getPerimeter()};
`);