const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  //input: fs.createReadStream("text.txt"),
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let inputData;

rl.on("line", function (line) {
  inputData = line.split(" ");
}).on("close", function () {
  const isPrime = (num) => {
    if (num <= 1) return false;

    let sqrt = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  let count = 0;
  for (const item of inputData) {
    if (isPrime(Number(item))) count++;
  }

  console.log(count);
});