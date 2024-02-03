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
  const arr = inputData
    .splice(1, inputData.length)
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
});