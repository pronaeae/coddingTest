var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");
for (const item of inputData) {
  let nums = item.split(" ");
  if (parseInt(nums[0]) + parseInt(nums[1])) console.log(parseInt(nums[0]) + parseInt(nums[1]));
}
