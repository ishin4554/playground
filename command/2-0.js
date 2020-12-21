class Calculator {
    constructor() {
        this.value = 0
    }
    add(num) {
        this.value += num
        console.log(this.value)
    }
    substract(num) {
        this.value -= num
        console.log(this.value)
    }
}

const calculator = new Calculator();


calculator.add(1)
calculator.add(2)
calculator.substract(3)
