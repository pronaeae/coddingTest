const [_, ...list] = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

let end = 0;
let count = 0;

const map = list
  .map((num) => num.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

map.forEach((ele) => {
  if (ele[0] >= end) {
    count++;
    end = ele[1];
  }
});

console.log(count);
