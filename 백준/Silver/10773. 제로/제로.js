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
    if (item === "0") {
      result.pop();
      continue;
    }
    result.push(item);
  }

  console.log(result.map(Number).reduce((curr, prev) => (curr += prev), 0));
});