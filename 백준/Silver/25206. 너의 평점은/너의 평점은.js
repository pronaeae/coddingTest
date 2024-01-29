const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const subject = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0
};

let inputData = [];

rl.on('line', function(line) {
  inputData.push(line.split(' '));
}).on('close', function() {
  const filter = inputData.filter((item) => item[2] !== 'P');
  const f1 = filter.reduce((curr, prev) => curr + parseFloat(prev[1]), 0);
  const f2 = filter.map((item) => parseFloat(item[1]) * subject[item[2]]).reduce((curr, prev) => curr + prev, 0);

  console.log((f2 / f1).toFixed(4));
  process.exit();
});
