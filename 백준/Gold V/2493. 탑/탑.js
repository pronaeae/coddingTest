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
  let [_, tops] = inputData;
  tops = tops.split(" ").map(Number);

  let stack = [];
  let result = [];

  for (let i = 0; i < tops.length; i++) {
    while (stack.length && tops[stack[stack.length - 1]] < tops[i]) {
      stack.pop();
    }

    if (!stack.length) result.push(0);
    else result.push(stack[stack.length - 1] + 1);

    stack.push(i);
  }
  console.log(result.join(" "));
});
