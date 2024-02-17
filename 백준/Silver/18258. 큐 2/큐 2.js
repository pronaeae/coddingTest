const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.platform === "linux" ? process.stdin : fs.createReadStream("text.txt"),
  output: process.stdout,
  terminal: false,
});

let inputData = [];

rl.on("line", function (line) {
  inputData.push(line);
}).on("close", function () {
  let [count, ...options] = inputData;
  let result = [];
  class Queue {
    constructor() {
      this._arr = [];
      this._deqIdx = 0;
    }

    push(val) {
      return this._arr.push(val);
    }

    pop() {
      if (this.empty()) return -1;
      return this._arr[this._deqIdx++];
    }

    size() {
      return this._arr.length - this._deqIdx;
    }

    empty() {
      return this.size() === 0 ? 1 : 0;
    }

    front() {
      return this.empty() ? -1 : this._arr[this._deqIdx];
    }

    back() {
      return this.empty() ? -1 : this._arr[this._arr.length - 1];
    }
  }

  const queue = new Queue();

  for (const option of options) {
    const [option1, option2] = option.split(" ");

    if (option1 === "push") {
      queue.push(option2);
    } else if (option1 === "pop") {
      result.push(queue.pop());
    } else if (option1 === "front") {
      result.push(queue.front());
    } else if (option1 === "back") {
      result.push(queue.back());
    } else if (option1 === "size") {
      result.push(queue.size());
    } else if (option1 === "empty") {
      result.push(queue.empty());
    }
  }

  console.log(result.join("\n"));
});