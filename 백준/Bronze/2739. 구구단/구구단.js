var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

const g = parseInt(inputData);
const test = new Array(9).fill().map((item, index) => index + 1);

for (const item of test) {
  console.log(`${g} * ${item} = ${g * item}`);
}