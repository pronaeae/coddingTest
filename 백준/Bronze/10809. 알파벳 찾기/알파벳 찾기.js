// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

const aToZ = [..."abcdefghijklmnopqrstuvwxyz"];
const splitInputData = inputData.split("");

const result = [];
for (let i = 0; i < aToZ.length; i++) {
  result.push(splitInputData.indexOf(aToZ[i]));
}
console.log(result.join(" "));
