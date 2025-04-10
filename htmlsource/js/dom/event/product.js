const products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 80000, title: "Black Monastery" },
];

const cols = document.querySelectorAll("col-sm-4");

// 배열안의 정보를 이용해 화면에 보여주기

// 방법 1.
cols.forEach((col, idx) => {
  // 배열요소 가져오기
  col.querySelector("h5").textContent = products[idx].title;
  // 객체 접근
  col.querySelector("p").textContent = "가격 : " + products[idx].price;
});

// 방법 2. row 활용법

const row = document.querySelector(".row");
let tags = "";
products.forEach((item, idx) => {
  tags += `<div class="col-sm-4">`;
  tags += `<img src="https://placehold.co/600" alt="" class="w-100" />`;
  tags += `<h5>${item.title}</h5>`;
  tags += `<p>가격 : ${item.price}</p>`;
  tags += `</div>`;
});
// row 자식으로
row.insertAdjacentHTML("afterbegin", tags);
