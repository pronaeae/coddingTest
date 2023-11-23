// '/dev/stdin'

var fs = require("fs");
var [count, ...list] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

for (let i = 0; i < count; i++) {
  console.log(list[i].at(0) + list[i].at(-1));
}

