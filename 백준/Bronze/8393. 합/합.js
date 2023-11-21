// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

let result = 0;
for (let i = 1; i < parseInt(inputData) + 1; i++) {
  result += i;
}
console.log(result)