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
  const [count, ...rest] = inputData;

  const arr = rest.map(Number).sort((a, b) => a - b);

  console.log(arr.join("\n"));
});
