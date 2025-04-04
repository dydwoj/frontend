// "use strict"

// alert("test")
// 자바 스크립트 변수
let a = 3;
console.log(typeof a); // number
console.log(a);
a = "test";
console.log(typeof a); // string
console.log(a);

// Cannot redeclare block-scoped variable 'a'.
const b = 15;
console.log(b);
// b = 20;
// console.log(b);

// let a = 5;

{
    let a = 333;
    console.log("block-scope ", a)
}

// 변수 범위
function foobar() {
    var foo = 5;
    console.log(foo);
}
// console.log(foo); => ReferenceError: foo is not defined

if(true) {
    var aa = 5;
    console.log(aa);
}
console.log(aa);

if(true) {
    let bb = 5;
    console.log(bb);
}
// console.log(bb); => ReferenceError: bb is not defined