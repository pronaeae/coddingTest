var fs = require("fs");
var inputData = fs.readFileSync("/dev/stdin").toString().trim();

console.log(inputData === inputData.split("").reverse().join("") ? 1 : 0);
