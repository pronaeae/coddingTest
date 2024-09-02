const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const log = console.log;
const [_, N, __, M] = input;

const q = N.split(" ").map(Number).sort((a, b) => a - b); // 정렬
const w = M.split(" ").map(Number);

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

const e = w.map((num) => (binarySearch(q, num) ? 1 : 0));

log(e.join(" "));
