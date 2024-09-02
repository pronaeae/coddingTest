const input = require("fs").readFileSync(0, "utf-8").toString();

const log = console.log;
const q = Number(input);

function solution(r) {
  let w = 1;
  let e = 666;

  while (true) {
    if (r === 1) break;

    e++;
    if (("" + e).includes("666")) w++;
    if (w === r) break;
  }

  return { w, e };
}

log(solution(q).e);
