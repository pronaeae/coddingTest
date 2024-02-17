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
  let [options, nums] = inputData;

  const stack = [];
  let count = options.split(" ")[1];

  nums = nums.split("").map(Number);
  for (const num of nums) {
    let now = num;

    while (count && stack[stack.length - 1] < now) {
      stack.pop();
      count--;
    }

    stack.push(now);
  }

  while (count) {
    stack.pop();
    count--;
  }

  console.log(stack.join(""));
});