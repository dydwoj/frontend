// math 객체
// 자바와 똑같이 클래스명.메서드

console.log(`PI : ${Math.PI}`);
console.log(`내림 : ${Math.floor(3.14159)}`);
console.log(`올림 : ${Math.ceil(2.123)}`);
console.log(`반올림 : ${Math.round(3.512)}`);
console.log(`절대값 : ${Math.abs(-3)}`);
console.log(`최대값 : ${Math.max(5, 6, 8, 12, 1)}`);
console.log(`최소값 : ${Math.min(5, 6, 8, 12, 1)}`);
console.log(`0 ~ 1 난수 : ${Math.random()}`);

console.log(`0 ~ 9 : ${Math.random() * 10}`);
console.log(`0 ~ 9 : ${Math.floor(Math.random() * 11)}`);
const num = 59.656566;
console.log(num.toFixed(2));
