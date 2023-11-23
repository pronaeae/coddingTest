// '/dev/stdin'

var fs = require("fs");
var [count, num] = fs.readFileSync('/dev/stdin').toString().split("\n");

const splitNumber = num.replaceAll("0", "").split("");
const result = splitNumber.reduce((curr, prev) => curr + Number(prev), 0);
console.log(result);
