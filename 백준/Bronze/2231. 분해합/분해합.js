const input = require("fs").readFileSync(0, "utf-8").trim();
// const input = require("fs").readFileSync("text.txt", "utf-8").trim().split(" ").map(Number);

const log = console.log;

const n = parseInt(input);
const arr = new Array(parseInt(input)).fill().map((_, i) => i + 1);
const add = (list) => {
  return list.reduce((a, b) => a + b, 0);
};
const t = arr.reduce((prev, curr) => {
  const numbers = String(curr).split("").map(Number);
  const a = add(numbers);
  if (curr + a === n) {
    prev.push(curr);
  }
  return prev;
}, []);

t.length ? log(t[0]) : log(0);
