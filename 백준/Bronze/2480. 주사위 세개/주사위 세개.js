const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
const log = console.log;

const reduce = input.reduce((prev, curr) => {
  if (prev[curr]) {
    prev[curr] += 1;
  } else {
    prev[curr] = 1;
  }

  return prev;
}, {});

const desc = Object.keys(reduce)
  .sort((a, b) => reduce[b] - reduce[a])
  .map(Number);

if (desc.length === 1) {
  log(10000 + desc[0] * 1000);
}
if (desc.length === 2) {
  log(1000 + desc[0] * 100);
}
if (desc.length === 3) {
  const sorting = desc.sort((a, b) => b - a);
  log(sorting[0] * 100);
}