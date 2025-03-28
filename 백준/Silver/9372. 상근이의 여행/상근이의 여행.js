const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]);

let line = 1;

for (let t = 0; t < T; t++) {
    const [N, M] = input[line++].split(' ').map(Number);
   
    for(let i = 0; i < M; i++){
        line++
    }

    console.log(N - 1);
};
