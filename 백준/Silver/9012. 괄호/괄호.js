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
  const [orderCount, ...orderList] = inputData;
  let result = [];

  for (const item of orderList) {
    let count = 0;
    for (const ele of item) {
      if (ele === ")") {
        count--;
        if (count < 0) {
          count = -1;
          break;
        }
      }
      if (ele === "(") count++;
    }
    result.push(count === 0 ? "YES" : "NO");
  }
  console.log(result.join("\n"));
});