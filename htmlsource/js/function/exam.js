// 1. 함수선언방식으로 두개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function add(x, y) {
  return x + y;
}
console.log("1. : ", add(4, 7));

// 2. 함수표현식으로 1번 변경
const add2 = function (x, y) {
  return x + y;
};
console.log("2. : ", add2(9, 5));

// 3. 1 ~ 10 까지 더하는 작업을 함수표현식으로 작성
const alladd = function () {
  let sum = 0;
  for (let i = 0; i < 11; i++) {
    sum += i;
  }
  return sum;
};
console.log("3. : ", alladd());

// 4. 숫자를 인자로 3의 배수 찾기
// => 3의 배수라면 "박수" 출력 / 아니라면 "통과"
const find3 = function (x) {
  if (x % 3 == 0) {
    return "박수";
  } else {
    return "통과";
  }
};
console.log("4. 3의 배수 X : ", find3(7));
console.log("4. 3의 배수 O : ", find3(9));

// 5. 4번 개선
// => +(and) 9의 배수인 경우 "박수 x 2"
// 내꺼
const find3and9 = function (x) {
  if (x % 3 == 0 && x % 9 == 0) {
    return "박수 x 2";
  } else {
    return "통과";
  }
};
console.log("5. 3, 9의 배수 O : ", find3and9(81));
console.log("5. 3, 9의 배수 X : ", find3and9(51));
// 강사님꺼
const myFunc = function (num) {
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
myFunc(3);
myFunc(6);
myFunc(9);

// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
// => 과목은 2과목, 두과목의 합이 120 이상이면 합격
// => 한 과목이 40점 미만이면 과락으로 불합격
const avg = function (x, y) {
  if (x >= 40 && y >= 40) {
    if (x + y >= 120) {
      return "합격";
    } else {
      return "불합격";
    }
  } else {
    return "불합격";
  }
};
console.log("6. 불합격 예상 : ", avg(97, 39));
console.log("6. 합격 예상 : ", avg(97, 49));
