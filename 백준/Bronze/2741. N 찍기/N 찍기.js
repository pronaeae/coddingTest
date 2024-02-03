const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = Number(line);

  function* range(end) {
    for (let i = 1; i <= end; i++) {
      yield i;
    }
  }

  const test = Array.from(range(n));

  console.log(test.join('\n'));

}).on("close", function () {
  process.exit();
});
