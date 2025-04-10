// tab-content 보여주기 : show 클래스명
// 메뉴 선택 : orange
// products 클릭 + 첫번째 tab-content
// Information 클릭 + 두번째 tab-content
// Shipping 클릭 + 세번째 tab-content
const container = document.querySelector(".container");
const list = document.querySelectorAll(".tab-button");
const tab = document.querySelectorAll(".tab-content");

// 개별
// list[0].addEventListener("click", () => {
//   list[0].classList.add("orange");
//   list[1].classList.remove("orange");
//   list[2].classList.remove("orange");
//   tab[0].classList.add("show");
//   tab[1].classList.remove("show");
//   tab[2].classList.remove("show");
// });
// list[1].addEventListener("click", () => {
//   list[0].classList.remove("orange");
//   list[1].classList.add("orange");
//   list[2].classList.remove("orange");
//   tab[0].classList.remove("show");
//   tab[1].classList.add("show");
//   tab[2].classList.remove("show");
// });
// list[2].addEventListener("click", () => {
//   list[0].classList.remove("orange");
//   list[1].classList.remove("orange");
//   list[2].classList.add("orange");
//   tab[0].classList.remove("show");
//   tab[1].classList.remove("show");
//   tab[2].classList.add("show");
// });

// 개선
list.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 모든 li의 orange 제거
    list.forEach((item) => item.classList.remove("orange"));
    // 현재 눌려진 li에는 orange 추가
    e.target.classList.add("orange");
    // 모든 div의 show 제거
    tab.forEach((item) => item.classList.remove("show"));
    // 현재 눌려진 li와 같은 순서인 div에 show 추가
    tab[idx].classList.add("show");
    console.log(tab[idx]);
  });
});
