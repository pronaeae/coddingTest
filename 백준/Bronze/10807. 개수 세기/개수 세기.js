// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const EA = parseInt(inputData[0]);
const list = inputData[1].split(" ").map((item) => parseInt(item));
const findNum = parseInt(inputData[2]);

const result = list.filter((item) => item === findNum).length;
console.log(result);