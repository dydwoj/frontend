// 함수 == 자바의 메서드
// 함수 생성

function name(params) {}

// 1. 매개변수가 없는 함수
function showMessage() {
  console.log("안녕하세요");
}

// 함수호출
showMessage();
function mutiply(x, y) {
  console.log(`${x}, ${y}`);
}

mutiply();
mutiply(1);
mutiply(1, 3);

function mutiply2(x, y) {
  return x * y;
}
console.log(mutiply2);
console.log(mutiply2()); // NaN
console.log(mutiply2(5, 3));

// 매개변수 기본값
function mutiply3(x, y = 3) {
  return x * y;
}
console.log(mutiply3(5, 4));
console.log(mutiply3(6));

function test(a, b, c, d) {
  b = b || 52;
  c = c || 273;

  console.log(`a = ${a}, b=${b}, d=${d}, d=${d}`);
}
test(1, 2, 5, 6);
test(3);

function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}

a();
// b(); // => ReferenceError: b is not defined
// c();
