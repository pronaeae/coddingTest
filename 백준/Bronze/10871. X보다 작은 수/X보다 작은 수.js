// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const EA = parseInt(inputData[0].split(" ")[0]);
const min = parseInt(inputData[0].split(" ")[1]);
const list = inputData[1].split(" ").map((item) => parseInt(item));

const result = list.filter((item) => item < min).join(" ");
console.log(result);