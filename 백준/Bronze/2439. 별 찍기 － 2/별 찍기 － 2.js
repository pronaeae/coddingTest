// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

const count = parseInt(inputData);
const starts = new Array(count).fill(" ");

for (let i = count - 1; i >= 0; i--) {
  starts[i] = "*";
  console.log(starts.join(""));
}