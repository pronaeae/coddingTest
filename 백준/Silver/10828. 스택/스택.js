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
  //   push X: 정수 X를 스택에 넣는 연산이다.
  // pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  // size: 스택에 들어있는 정수의 개수를 출력한다.
  // empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
  // top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  const [orderCount, ...orderList] = inputData;
  let result = [];

  class Stack {
    constructor() {
      this.stack = [];
    }

    push(val) {
      this.stack.push(val);
    }

    pop() {
      if (this.size()) return this.stack.pop();
      return -1;
    }

    size() {
      return this.stack.length;
    }

    empty() {
      return this.size() ? 0 : 1;
    }

    top() {
      return this.size() ? stack.stack.at(-1) : -1;
    }
  }

  const stack = new Stack();

  for (const orders of orderList) {
    const order = orders.split(" ");

    if (order[0] === "push") {
      stack.push(order[1]);
    }
    if (order[0] === "pop") {
      const f = stack.pop();
      result.push(f);
    }
    if (order[0] === "size") {
      const f = stack.size();
      result.push(f);
    }
    if (order[0] === "empty") {
      const f = stack.empty();
      result.push(f);
    }
    if (order[0] === "top") {
      const f = stack.top();
      result.push(f);
    }
  }
  
  console.log(result.join("\n"));
});