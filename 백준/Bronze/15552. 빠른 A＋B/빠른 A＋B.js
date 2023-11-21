// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const count = parseInt(inputData[0]);
let result = "";
for (let i = 1; i <= count; i++) {
  const numbers = inputData[i].split(" ");
  const A = parseInt(numbers[0]);
  const B = parseInt(numbers[1]);
  result += A + B + "\n";
}
console.log(result);
