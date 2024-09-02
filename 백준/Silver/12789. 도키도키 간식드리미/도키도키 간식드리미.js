const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const log = console.log;
const n = parseInt(input[0]);
const students = input[1].split(" ").map(Number);

function solution(n, students) {
  const stack = [];
  let current = 1;

  const processStack = () => {
    while (stack.length > 0 && stack[stack.length - 1] === current) {
      stack.pop();
      current++;
    }
  };

  for (let i = 0; i < n; i++) {
    processStack();
    if (students[i] === current) {
      current++;
    } else {
      stack.push(students[i]);
    }
  }

  processStack();

  return stack.length === 0 ? "Nice" : "Sad";
}

log(solution(n, students));