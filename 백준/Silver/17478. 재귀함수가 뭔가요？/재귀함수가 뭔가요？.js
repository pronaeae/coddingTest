const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  //input: fs.createReadStream("text.txt"),
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let inputData;

rl.on("line", function (line) {
  inputData = Number(line);
}).on("close", function () {
  const devide = "____";
  let count = 0;
  let count2 = inputData;

  console.log(`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`);

  const say1 = (num) => {
    console.log(`${devide.repeat(num)}"재귀함수가 뭔가요?"`);
    console.log(`${devide.repeat(num)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`);
    console.log(`${devide.repeat(num)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`);
    console.log(
      `${devide.repeat(num)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`
    );
  };
  const say2 = (num) => {
    console.log(`${devide.repeat(num)}"재귀함수가 뭔가요?"`);
    console.log(`${devide.repeat(num)}"재귀함수는 자기 자신을 호출하는 함수라네"`);
  };
  const say3 = (num) => {
    console.log(`${devide.repeat(num)}라고 답변하였지.`);
  };

  const said = () => {
    //inputData - 1 이 될 때까지 say1을 출력 / count++
    //inputData === count 이고 inputData === count2이면  say2 , say3를 출력; / count2--
    //inputData === count 이고 inputData >= 0 이면 say3 출력 / count--
    //count2가 -1 이면 종료
    if (count < inputData) {
      say1(count);
      count++;
    } else if (count === inputData && count2 === inputData) {
      say2(count);
      say3(count);

      count2--;
    } else if (count === inputData && count2 >= 0) {
      say3(count2);

      count2--;
    }
    if (count2 < 0) return;

    said();
  };

  said();
});