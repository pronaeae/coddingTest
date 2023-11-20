var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

let [HH, MM] = inputData[0].split(" ").map((item) => parseInt(item));
let timer = parseInt(inputData[1]);

MM += timer;

if (MM > 59) {
  HH += Math.floor(MM / 60);
  if (HH > 23) HH -= 24 ;

  MM = parseInt(MM % 60);
}
console.log(HH, MM);
