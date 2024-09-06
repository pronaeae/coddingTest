const [length, ...rest] = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

const map = rest.map((item) => item.split(" ").map(Number));

function solution(arr) {
  return arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });
}

console.log(
  solution(map)
    .map((item) => item.join(" "))
    .join("\n")
);
