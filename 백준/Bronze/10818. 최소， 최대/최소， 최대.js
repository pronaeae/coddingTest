// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const list = inputData[1].split(" ").map((item) => parseInt(item));

console.log(Math.min(...list), Math.max(...list));