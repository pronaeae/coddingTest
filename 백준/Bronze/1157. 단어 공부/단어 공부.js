const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  //input: fs.createReadStream("text.txt"),
  //output: process.stdout,
  terminal: false,
  input: process.stdin,
  output: process.stdout
});

let inputData;

rl.on("line", function (line) {
  inputData = line.toUpperCase().split("");
}).on("close", function () {
  const result = inputData.reduce((curr, prev) => {
    if (curr[prev]) {
      curr[prev] += 1;
    } else {
      curr[prev] = 1;
    }

    return curr;
  }, {});

  const maxValue = Math.max(...Object.values(result));
  const isMulti = Object.values(result).filter((item) => item === maxValue).length;

  if (isMulti !== 1) {
    console.log("?");
  } else {
    const index = Object.values(result).findIndex((item) => item === maxValue);
    const solution = Object.keys(result)[index];

    console.log(solution);
  }
});
