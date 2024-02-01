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
  inputData = line.split(" ").map(Number);
}).on("close", function () {
  const [up, down, end] = inputData;

  const result = Math.ceil((end - down) / (up - down));
  console.log(result);
});