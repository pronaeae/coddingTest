// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

let totalPrice = 0;
let totalCount = parseInt(inputData[1]);
for (let i = 2; i < totalCount + 2; i++) {
  const price = parseInt(inputData[i].split(" ")[0]);
  const count = parseInt(inputData[i].split(" ")[1]);
  totalPrice += price * count;
}

console.log(totalPrice === parseInt(inputData[0]) ? "Yes" : "No");
