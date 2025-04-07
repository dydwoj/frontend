// 화살표 함수
const myFunc1 = () => {};

// 기본 화살표 함수
const showMessage = () => {
  console.log("안녕하세요");
};
// 더 단순화
const showMessage2 = () => console.log("안녕하세요");

// 기본 화살표 함수
const mutiply = (x, y) => {
  console.log(`${x}, ${y}`);
};
// 더 단순화
const mutiply2 = (x, y) => console.log(`${x}, ${y}`);

const myFunc2 = (x, y) => x * y;

const myFunc = (num) => {
  if (num % 3 == 0) {
    if (num % 9 !== 0) {
      console.log("박수");
    } else {
      console.log("박수 x 2");
    }
  } else {
    console.log(통과);
  }
};

const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];

// 둘이 똑같은 함수
fruits.forEach(function (element) {});
fruits.forEach((element) => console.log(element));
