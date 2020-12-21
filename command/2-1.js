
const add = (cur, num) => cur += num
const substract = (cur, num) => cur -= num

class Calculator {
    constructor() {
        this.value = 0;
    }
    executeCommand(handler, num) {
        this.value = handler(this.value, num);
        console.log(this.value);
    }
}

const calculator = new Calculator();

calculator.executeCommand(add, 1)
calculator.executeCommand(add, 2)
calculator.executeCommand(substract, 3)