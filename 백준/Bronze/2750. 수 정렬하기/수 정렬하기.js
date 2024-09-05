const [_, ...rest] = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  for (const item of arr) console.log(item);
}
solution(rest);
