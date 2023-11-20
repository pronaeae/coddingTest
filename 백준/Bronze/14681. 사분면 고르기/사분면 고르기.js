const inputData = require('fs').readFileSync(0).toString().split('\n');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

if (A > 0 && B > 0) return console.log(1);
if (A < 0 && B > 0) return console.log(2);
if (A < 0 && B < 0) return console.log(3);
if (A > 0 && B < 0) return console.log(4);
