const input = require("fs").readFileSync(0, "utf-8");

const log = console.log;

function solution() {
  let count = 0;

  for (let i = 0; i < 0 + input; i++) {
    for (let j = 0; j < 0 + input; j++) {
      if (i !== j) count++;
    }
  }
  return count;
}

log(solution(input));
