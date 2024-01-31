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
  inputData.push(line);
}).on("close", function () {
  const [_, ...list] = inputData;

  const score = list.map((item) => item.split(" ").map(Number));

  for (const list of score) {
    const [count, ...user] = list;

    const stat = user.reduce((curr, prev) => curr + prev, 0) / count;
    console.log(((user.filter((item) => item > stat).length / count) * 100).toFixed(3) + "%");
  }
});