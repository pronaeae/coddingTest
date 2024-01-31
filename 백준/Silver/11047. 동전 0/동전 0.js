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
  let [_, cost] = inputData[0].split(" ").map(Number);

  const coin = inputData.slice(1, inputData.length).map(Number).reverse();

  let count = 0;

  for (let i = 0; i < coin.length; i++) {
    if (cost === 0) break;
    count += Math.floor(cost / coin[i]);
    cost %= coin[i];
  }

  console.log(count);
});