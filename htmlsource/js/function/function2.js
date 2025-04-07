// 함수표현식
const myFunc1 = function () {};
const myFunc2 = function name() {};

const showMessage = function () {
  console.log("안녕하세요");
};
showMessage();

const mutiply = function (x, y) {
  console.log(`${x}, ${y}`);
};
mutiply(35, 4);

const myFunc3 = function mutiply2(x, y) {
  return x * y;
};
console.log(myFunc3(6, 8));

// 내부용 함수란?
const rec = function f(x) {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    f(x - 1);
  }
};
rec(5);

// 함수정의방식 비교
// mutiply4 vs. myFunc4
console.log(mutiply4(5, 6)); // 호이스팅 허용
console.log(myFunc4(3, 9));

// y = 5;
console.log(`y = ${y}`); // => 호이스팅 허용
var y = 6;

function mutiply4(x, y) {
  return x * y;
}

const myFunc4 = function mutiply2(x, y) {
  return x * y;
};
