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
  const [options, treeList] = inputData;

  function getMaxHeight(trees, target) {
    let left = 0;
    let right = trees[trees.length - 1]

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sum = trees.reduce((curr, prev) => prev > mid ? curr + (prev - mid) : curr, 0);

        if (sum >= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

  const trees = treeList.split(" ").map(Number).sort((a,b) => a-b);
  const target = options.split(" ").map(Number)[1];
  
  console.log(getMaxHeight(trees, target))
});
