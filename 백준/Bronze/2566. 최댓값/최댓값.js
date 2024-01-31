const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  // input: fs.createReadStream("text.txt"),
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let inputData = [];

rl.on("line", function (line) {
  inputData = inputData.concat(line.split(" ").map(Number));
}).on("close", function () {
  const maxValue = Math.max(...inputData);
  const findIndex = inputData.findIndex((item) => item === maxValue);

  const row = Math.floor(findIndex / 9) + 1;
  const col = (findIndex % 9) + 1;

  console.log(maxValue);
  console.log(row, col);
});
