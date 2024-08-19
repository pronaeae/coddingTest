const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const log = console.log;

const trans = (arr) => arr.map((item) => parseInt(item));

const add = (arr) => arr.reduce((prev, curr) => prev + curr, 0);

const aver = (num, length) => num / length;

const mi = (arr) => Math.floor(arr.length / 2);

const solution = (arr) => {
  const transNum = trans(arr).sort((a, b) => a - b); // 정렬 추가
  const addNums = add(transNum);
  const middleNum = transNum[mi(transNum)];
  const average = aver(addNums, transNum.length);

  return { average, middleNum };
};

const { average, middleNum } = solution(input);
log(average);
log(middleNum);