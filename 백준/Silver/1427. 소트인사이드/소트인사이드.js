const num = require("fs").readFileSync(0, "utf-8");

const solution = num
  .split("")
  .sort((a, b) => b - a)
  .join("");

console.log(solution);
