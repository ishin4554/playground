class Calculator {
  constructor() {
      this.value = 0;
  }
  executeCommand(command) {
      this.value = command.execute(this.value);
      console.log(this.value)
  }
  undo() {
      // ...
  }
  check() {
      // ...
  }
}

class Command {
  constructor(handler, num) {
    this.num = num;
    this.handler = handler;
  }
  execute(cur) {
    return this.handler(cur, this.num)
  }
}

const add = (cur, num) => cur += num
const substract = (cur, num) => cur -= num

const calculator = new Calculator();

calculator.executeCommand(new Command(add, 1))
calculator.executeCommand(new Command(add, 2))
calculator.executeCommand(new Command(substract, 3))