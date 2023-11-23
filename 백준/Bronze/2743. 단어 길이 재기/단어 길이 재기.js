// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString();

const stringVal = inputData.trim();
console.log(stringVal.length);
