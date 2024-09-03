const input = require("fs").readFileSync(0, "utf-8");
const n = Number(input);

function solution(n) {
  if (n <= 1) return 1;
  return n * solution(n - 1);
}

console.log(solution(n));
