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
  const arr = [];
  const changeNumber = inputData.map(Number);
  const total = changeNumber.reduce((curr, prev) => (curr += prev), 0);

  for (let i = 0; i < inputData.length; i++) {
    for (let j = i + 1; j < inputData.length; j++) {
      // if (i === j) continue;
      const height = changeNumber[i] + changeNumber[j];
      const isYouBumin = total - height;

      if (isYouBumin === 100) {
        arr.push(changeNumber.filter((_, index) => index !== i && index !== j).sort((a, b) => a - b));
      }
    }
  }

  arr.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      return a[i] - b[i];
    }
  });

  console.log(arr[0].join("\n"));
});