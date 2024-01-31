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
  /**
   * 첫번째 값만 순회
   * 끝났으면 다음 값을 순회
   */

  const maxCol = Math.max(...inputData.map((item) => item.length));
  const maxRow = inputData.length;

  const result = [];
  for (let i = 0; i < maxCol; i++) {
    for (let j = 0; j < maxRow; j++) {
      if (inputData[j][i]) {
        result.push(inputData[j][i]);
      }
    }
  }

  console.log(result.join(""));
});