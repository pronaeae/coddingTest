var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

const A = parseInt(inputData);

const result = (A) => {
  if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) return console.log(1);
  return console.log(0);
};

result(A);