// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const list = inputData;
for (let i = 0; i < list.length; i++) {
  const item = list[i].split(" ");
  const A = parseInt(item[0]);
  const B = parseInt(item[1]);

  if (A && B) {
    console.log(A + B);
  }
}