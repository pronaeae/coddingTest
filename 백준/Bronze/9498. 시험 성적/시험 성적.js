var fs = require("fs");
var inputData = fs.readFileSync("/dev/stdin").toString();

const A = parseInt(inputData);
const result = (A) => {
  if (A >= 90) return console.log("A");
  if (A >= 80) return console.log("B");
  if (A >= 70) return console.log("C");
  if (A >= 60) return console.log("D");
  return console.log("F");
};

result(A);
