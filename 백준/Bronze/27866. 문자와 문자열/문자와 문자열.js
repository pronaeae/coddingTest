// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const stringVal = inputData[0];
const pick = Number(inputData[1]);
console.log(...stringVal[pick - 1]);