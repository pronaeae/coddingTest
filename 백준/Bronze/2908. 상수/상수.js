var fs = require("fs");
var [num1, num2] = fs.readFileSync('/dev/stdin').toString().split(" ");

const reverseNumber = (num) => {
  if (typeof Number(num) === NaN) return "숫자가 아닙니다";

  return Number(num.split("").reverse().join(""));
};
const result = [reverseNumber(num1), reverseNumber(num2)];
console.log(Math.max(...result));
// console.log(result.sort()[1]);
