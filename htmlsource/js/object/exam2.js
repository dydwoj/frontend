// 주사위 두개 던지기 => 나오는 눈을 (5,3) 출력
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인 경우 실행 중단
let num1 = 0;
let num2 = 0;

while (num1 + num2 != 5) {
  num1 = Math.floor(Math.random() * 6 + 1);
  num2 = Math.floor(Math.random() * 6 + 1);
  console.log(num1 + "," + num2);
}

// 로또 번호 6(1~45)개를 추출하여 배열에 담기 => 출력
let lottoArr = [];
while (true) {
  let lotto = Math.floor(Math.random() * 46) + 1;

  if (lottoArr.indexOf(lotto) == -1) {
    lottoArr.push(lotto);
  }
  if (lottoArr.length > 5) break;
}
console.log("이번주 로또 번호 : " + lottoArr);
