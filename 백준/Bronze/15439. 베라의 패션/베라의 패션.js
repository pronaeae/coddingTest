const input = require("fs").readFileSync(0, "utf-8").trim().split(" ").map(Number);

const log = console.log;
log(input * (input - 1));
