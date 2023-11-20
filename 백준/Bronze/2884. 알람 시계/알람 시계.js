var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split(" ");

let hour = parseInt(inputData[0]);
let minute = parseInt(inputData[1]);

minute -= 45;
if (minute < 0) {
  hour--;
  minute += 60;

  if (hour < 0) {
    hour = 23;
  }
}

console.log(hour, minute);
