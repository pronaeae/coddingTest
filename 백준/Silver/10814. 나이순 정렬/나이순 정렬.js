const [_, ...users] = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

const list = users.map((user, i) => {
  const list = user.split(" ");

  return { idx: i, name: list[1].trim(), age: parseInt(list[0]) };
});

const order = list.sort((a, b) => {
  if (a.age === b.age) {
    return a.idx - b.idx;
  }
  return a.age - b.age;
});

const solution = order.map((user) => `${user.age} ${user.name}`).join("\n");

console.log(solution);
