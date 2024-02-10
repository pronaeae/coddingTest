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
  inputData = inputData.map(Number);
  const [_, ...sticks] = inputData;

  let count = 1;
  let maxHeight = sticks.pop();

  for (let i = sticks.length; i >= 0; i--) {
    if (sticks[i] > maxHeight) {
      count++;
      maxHeight = sticks[i];
    }
  }
  console.log(count);
});