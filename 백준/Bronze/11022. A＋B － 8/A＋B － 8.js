// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const count = parseInt(inputData[0]);

for (let i = 1; i <= count; i++) {
  const nums = inputData[i].split(" ");
  const A = parseInt(nums[0]);
  const B = parseInt(nums[1]);
  const C = A + B;
  console.log(`Case #${i}: ${A} + ${B} = ${C}`);
}
