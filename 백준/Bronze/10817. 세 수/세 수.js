const input = require("fs").readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

const sorting = input.sort((a,b) => a-b)
console.log(sorting[1])