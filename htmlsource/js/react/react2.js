// 일급함수 : 함수자체를 일반 변수에 대입
const foo = () => {
  console.log("foobar");
};

foo();

function logText(message) {
  message();
}
logText(() => {
  console.log("hi");
});
