const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  //input: fs.createReadStream("text.txt"),
  //output: process.stdout,
  terminal: false,
  input: process.stdin,
  output: process.stdout
});

let inputData = [];

rl.on("line", function (line) {
  inputData.push(line);
}).on("close", function () {
  const fn1 = (string) => {
    const prev = [];
    let prevChar;
    for (const char of string) {
      if (prevChar !== char) {
        if (prev.includes(char)) {
          return false;
        }
      }
      prev.push(char);
      prevChar = char;
    }

    return true;
  };

  let count = 0;

  for (let i = 1; i < inputData.length; i++) {
    if (fn1(inputData[i])) {
      count++;
    }
  }

  console.log(count);
});
