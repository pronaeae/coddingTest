// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
console.log(new Set(inputData.map((item) => item % 42)).size);
