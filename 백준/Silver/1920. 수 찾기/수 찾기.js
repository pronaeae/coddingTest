const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  //input: fs.createReadStream("text.txt"),
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let inputData = [];

rl.on("line", function (line) {
  inputData.push(line);
}).on("close", function () {
  const [_, items, __, lists] = inputData;

  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return 1; // 찾는 값이 있을 경우, 1을 반환
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return 0; // 찾는 값이 없을 경우, 0을 반환
  }

  const search = items
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const item = lists.split(" ").map(Number);

  const result = item.map((ele) => binarySearch(search, ele));
  console.log(result.join("\n"));
});