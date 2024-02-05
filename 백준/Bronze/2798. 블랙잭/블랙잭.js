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
  
  const [count, total] = inputData[0].split(" ").map(Number);
  const list = inputData[1].split(" ").map(Number);
  const arr = [];
  
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      for (let q = j + 1; q < list.length; q++) {
        arr.push(list[i] + list[j] + list[q]);
      }
    }
  }

  const minVal = arr.map((item) => total - item).filter(item => item >= 0).sort((a, b) => a - b);
  console.log(total - minVal[0])
});