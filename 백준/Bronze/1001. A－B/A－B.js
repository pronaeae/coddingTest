const fs = require('fs'); 
const inputData2 = fs.readFileSync(0, 'utf8').split(' ');

const A = inputData2[0];
const B = inputData2[1];

console.log(A-B)