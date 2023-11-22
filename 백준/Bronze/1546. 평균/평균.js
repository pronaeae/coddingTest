// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const count = inputData[0];
const value = inputData[1].split(" ").map((item) => parseInt(item));

const maxVal = Math.max(...value);
const newVal = value.reduce((curr, prev) => (curr += (prev / maxVal) * 100), 0);
console.log((newVal / count));