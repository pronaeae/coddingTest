var fs = require('fs');
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const splitB = [...String(B)];
const result = splitB.map((item) => A * item).reverse();
result.push(A * B);

console.log(result.join("\n"));