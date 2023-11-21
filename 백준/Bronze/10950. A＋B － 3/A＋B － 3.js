const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');
    console.log(parseInt(score[0]) + parseInt(score[1]));
}

