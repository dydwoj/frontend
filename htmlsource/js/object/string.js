// string 객체
const msg1 = new String("hello javascript"); // 생성자
const msg2 = String("HELLOW JAVASCRIPT"); // 함수

console.log(msg1);
console.log(msg2);

console.log(typeof msg1); // => object
console.log(typeof msg2); // => string

console.log(msg1 === "hello javascript"); // => false
console.log(msg2 === "HELLOW JAVASCRIPT"); // => true

// const msg3 = "";

// 메서드
console.log(`특정 위치 문자 반환 : ${msg1.charAt(4)}`);
console.log(`특정 위치 문자 반환 : ${msg1.at(4)}`);
console.log(`특정 위치 문자 반환 : ${msg1.indexOf("j")}`);
console.log(`문자열 부분 추출 : ${msg1.substring(6, 10)}`);
console.log(`문자열 부분 추출 : ${msg1.slice(6, 10)}`);
console.log(`문자열 연결 : ${msg1.concat(msg2)}`);
console.log(`문자열 변경 : ${msg1.replace("hello", "hi")}`);
console.log(`문자열 찾기 (있는 경우) : ${msg1.match("ja")}`); // => ja
console.log(`문자열 찾기 (없는 경우) : ${msg1.match("body")}`); // => null
console.log(`문자열 찾기 : ${msg1.search("ja")}`);
console.log(`문자열 대문자로 변경 : ${msg1.toUpperCase()}`);
console.log(`문자열 소문자로 변경 : ${msg1.toLowerCase()}`);
console.log(`문자열 공백 제거 : ${"   hello   ".trim()}`);
