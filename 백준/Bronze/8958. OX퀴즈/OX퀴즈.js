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
  const [arrayLength, ...rest] = inputData;

  for (let i = 0; i < arrayLength; i++) {
    let count = 0;
    let stack = 1;

    for (let j = 0; j < rest[i].length; j++) {
      if (rest[i][j] === "O") {
        count += stack;
        stack += 1;
      } else {
        stack = 1;
      }
    }

    console.log(count);
  }
});