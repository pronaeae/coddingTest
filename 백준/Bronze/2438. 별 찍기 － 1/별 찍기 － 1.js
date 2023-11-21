// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

const count = parseInt(inputData);
let result = "";

for (let i = 0; i < count; i++) {
  result += "*";
  console.log(result);
}
