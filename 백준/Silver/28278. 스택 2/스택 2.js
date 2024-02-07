const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  //input: fs.createReadStream("text.txt"),
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let inputData = [];

rl.on("line", function (line) {
  inputData.push(line);
}).on("close", function () {
  // 애초에 정수만 저장을 할거임.
  // 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000) // push
  // 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다. // pop
  // 3: 스택에 들어있는 정수의 개수를 출력한다. // count
  // 4: 스택이 비어있으면 1, 아니면 0을 출력한다. // isEmpty
  // 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다. // hasInteger
  const [orderCount, ...orderList] = inputData;

  class Stack {
    constructor() {
      this.stack = [];
      this.result = [];
    }

    push(val) {
      this.stack.push(val);
    }

    pop() {
      const pop = this.stack.pop();
      if (pop) return this.result.push(pop);
      if (stack.stack.length === 0) return this.result.push(-1);
    }

    count() {
      this.result.push(this.stack.length);
    }

    isEmpry() {
      this.stack.length === 0 ? this.result.push(1) : this.result.push(0);
    }

    hasInteger() {
      this.stack.length ? this.result.push(this.stack.at(-1)) : this.result.push(-1);
    }
  }

  const stack = new Stack();
  for (const orders of orderList) {
    const order = orders.split(" ").map(Number);

    if (order[0] === 1) {
      stack.push(order[1]);
    }
    if (order[0] === 2) {
      stack.pop();
    }
    if (order[0] === 3) {
      stack.count();
    }
    if (order[0] === 4) {
      stack.isEmpry();
    }
    if (order[0] === 5) {
      stack.hasInteger();
    }
  }

  console.log(stack.result.join("\n"));
});

