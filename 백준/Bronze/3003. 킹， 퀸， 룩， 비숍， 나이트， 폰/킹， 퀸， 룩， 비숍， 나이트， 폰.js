var fs = require("fs");
var inputData = fs.readFileSync("/dev/stdin").toString();

const initialData = [1, 1, 2, 2, 2, 8];
const arr2 = inputData.split(" ").map((item) => +item);

const loop = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] - arr2[i]);
  }
  return result;
};

console.log(loop(initialData, arr2).join(" "))