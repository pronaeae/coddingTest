const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = inputData[0];
const B = inputData[1];

console.log(A*B)