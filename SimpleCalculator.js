class SimpleCalculator {
    constructor(initValue) {
        this.value = initValue === undefined ? 0 : initValue;
    }

    add(n) {
        this.value = this.value + n;
        return this;
    }
    substract(n) {
        this.value = this.value - n;
        return this;
    }
    multiply(n) {
        this.value = this.value * n;
        return this;
    }
    divide(n) {
        this.value = this.value / n;
        return this;
    }
}

// console.log(new SimpleCalculator(1).value);
// console.log(new SimpleCalculator(0.5).value);
// console.log(new SimpleCalculator(-0.5).value);
// console.log(new SimpleCalculator().value);

const calculator = new SimpleCalculator();
console.log(calculator.add(12).multiply(2).divide(2));
console.log(new SimpleCalculator(10).add(12).multiply(2).divide(2));