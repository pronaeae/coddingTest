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
  const arr = new Array(10).fill(0);

  const mul = inputData
    .reduce((curr, prev) => curr * prev, 1)
    .toString()
    .split("");

  for (item of mul) {
    arr[item] += 1;
  }

  for (item of arr) {
    console.log(item);
  }
});