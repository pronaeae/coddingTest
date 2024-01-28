"/dev/stdin";

var fs = require("fs");
var inputData = fs.readFileSync("/dev/stdin").toString();

const N = +inputData;

const result = Array.from({ length: 2 * N - 1 }, (_, i) => {
  let middle = Math.abs(N - 1 - i);
  return " ".repeat(middle) + "*".repeat(2 * (N - middle) - 1);
});


console.log(result.join("\n"));
