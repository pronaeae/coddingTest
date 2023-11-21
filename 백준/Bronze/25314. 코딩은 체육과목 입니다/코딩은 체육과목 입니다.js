// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

const count = parseInt(inputData);
const string = "long";
const result = ["int"];

for (let i = 0; i < count; i++) {
  if (i % 4 === 0) {
    result.unshift(string);
  }
}

console.log(result.join(" "));