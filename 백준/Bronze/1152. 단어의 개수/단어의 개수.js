var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const result = inputData.reduce((curr, prev) => {
  prev !== "" && curr++;
  return curr;
}, 0);

console.log(result);