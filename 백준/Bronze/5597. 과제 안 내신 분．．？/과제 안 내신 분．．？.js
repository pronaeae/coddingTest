// '/dev/stdin'

var fs = require("fs");
var inputData = fs.readFileSync('/dev/stdin').toString().split("\n");

const userList = new Array(30).fill().map((item, index) => index + 1);
const sumbitUserList = inputData.map((item) => Number(item));

const result = userList.filter((item) => !sumbitUserList.includes(item));
console.log(result.join("\n"));
