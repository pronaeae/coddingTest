const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  //input: fs.createReadStream("text.txt"),
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let inputData;

rl.on("line", function (line) {
  inputData = Number(line);
}).on("close", function () {
  let result = 1;
  for (let i = 1; i <= inputData; i++) {
    result *= i;
  }

  console.log(result);
});