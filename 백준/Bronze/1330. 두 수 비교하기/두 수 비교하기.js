var fs = require("fs");
var inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(inputData[0])
const B = parseInt(inputData[1])

if (A > B) return console.log(">");
if (A < B) return console.log("<");
if (A == B) return console.log("==");