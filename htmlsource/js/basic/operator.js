// 연산자
// 산술, 비교, 연결

// 산술
let a = 4,
  b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 자바는 몫만
console.log("a % b = ", a % b);

// + : 연결연산자
let c = "3";
console.log("a + c = ", a + c);

// -, /, *, % : 문자와 숫자의 산술 연산
console.log("\n-- 문자와 숫자의 산술연산");
console.log("a - c = ", a - c);
console.log("a * c = ", a * c);
console.log("a / c = ", a / c);
console.log("a % c = ", a % c);

// 비교연산자
let d = "4";
console.log("a == d", a == d); // true =>  4 == "4"
console.log("a === d", a === d); // false =>  4 === "4"
console.log("a != d", a != d); // false =>  4 != "4"
console.log("a !== d", a !== d); // true =>  4 !== "4"

// 단항 연산자 ++, --
