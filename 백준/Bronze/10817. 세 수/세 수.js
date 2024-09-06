const input = require("fs").readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

const sorting = input.sort((a,b) => a-b)
sorting.reduce((prev, curr, idx)=> {
    if(idx === 1) console.log(curr)
    return prev;
} ,0)