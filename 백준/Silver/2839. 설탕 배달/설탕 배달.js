const input = require("fs").readFileSync(0, "utf-8").toString();

const log = console.log;
const q = Number(input);

function solution(r) {
  let count = 0;

  while (true) {
    if (r % 5 === 0) {
      log(count + r / 5);
      break;
    }

    if (0 > r) {
      log(-1);
      break;
    }

    count++;
    r -= 3;
  }
}

solution(q);

