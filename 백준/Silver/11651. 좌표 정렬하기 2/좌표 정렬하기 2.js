const [_, ...list] = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

const graph = list.map((item) => item.split(" ").map(Number));

const solution = graph.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

console.log(solution.map((item) => item.join(" ")).join("\n"));