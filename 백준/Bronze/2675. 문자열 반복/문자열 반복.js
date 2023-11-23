// '/dev/stdin'

var fs = require("fs");
var [count, ...lists] = fs.readFileSync('/dev/stdin').toString().split("\n");

for (let i = 0; i < count; i++) {
  const [num, str] = lists[i].split(" ");
  let result = "";
  for (let j = 0; j < str.length; j++) {
    for (let q = 0; q < num; q++) {
      result += str[j];
    }
  }
  console.log(result);
}