var fs = require("fs");
var inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const result = inputData.reduce((curr, prev) => curr + parseInt(prev), 0);
console.log(result);