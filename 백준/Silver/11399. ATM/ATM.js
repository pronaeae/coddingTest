const [length, ...rest] = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

const time = rest[0].split(" ").map(Number);

// const sorting = time.sort((a,b) => a-b);
// function sorting(arr) {
//   function buildHeap() {
//     const len = arr.length;
//     for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
//       heapify(arr, len, i);
//     }
//   }

//   function heapify(arr, len, idx) {
//     let largest = idx;
//     const left = 2 * idx + 1;
//     const right = 2 * idx + 2;
//     if (left < len && arr[left] > arr[largest]) {
//       largest = left;
//     }
//     if (right < len && arr[right] > arr[largest]) {
//       largest = right;
//     }
//     if (largest !== idx) {
//       [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
//       heapify(arr, len, largest);
//     }
//   }

//   function sort(arr) {
//     const len = arr.length;
//     buildHeap(arr);
//     for (let i = len - 1; i >= 0; i--) {
//       [arr[0], arr[i]] = [arr[i], arr[0]];
//       heapify(arr, i, 0);
//     }
//     return arr;
//   }

//   return sort(arr);
// }

function solution(arr) {
  let count = 0;

  const sorted = time.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    let sum = sorted[i];
    for (let j = 0; j < i; j++) sum += sorted[j];
    count += sum;
  }

  console.log(count);
}

solution(time);