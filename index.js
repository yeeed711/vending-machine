// 아이템 정보들 객체로 배열에 담기
let dataBase = [
  {
    name: "Original_cola",
    img: "./img/cola.svg",
    price: 1000,
    count: 3,
  },
  {
    name: "Violet_cola",
    img: "./img/violet_cola.svg",
    price: 1000,
    count: 3,
  },
  {
    name: "Yellow_cola",
    img: "./img/yellow_cola.svg",
    price: 1000,
    count: 3,
  },
  {
    name: "Cool_cola",
    img: "./img/cool_cola.svg",
    price: 1000,
    count: 3,
  },
  {
    name: "Green_cola",
    img: "./img/green_cola.svg",
    price: 1000,
    count: 3,
  },
  {
    name: "Orange_cola",
    img: "./img/orange_cola.svg",
    price: 1000,
    count: 3,
  },
];

// 변수 정리
const drinkItems = document.querySelector(".vending-items"); // 자판기 아이템 부분
const seletItems = document.querySelector(".drink-items"); //카트 아이템 리스트
const returnBtn = document.querySelector(".return__btn"); // 거스름돈 반환 버튼
const putBtn = document.querySelector(".put__btn"); // 입금 버튼
const getBtn = document.querySelector(".get__btn"); // 획득 버튼
const leftMoney = document.querySelector(".buy-balance span:first-child"); // 잔액
const myMoney = document.querySelector(".mymoney__text"); // 소지금

// cola item 렌더링 함수
function rederColaItem() {
  // 가상돔
  const frag = document.createDocumentFragment();
  dataBase.forEach((i) => {
    const drinkItemLi = document.createElement("li");
    const drinkItemBtn = document.createElement("button");
    const drinkItemImg = document.createElement("img");
    drinkItemBtn.setAttribute("class", "item__btn");
    drinkItemImg.setAttribute("src", `${i.img}`);
    const drinkItemTitle = document.createElement("strong");
    drinkItemTitle.setAttribute("class", "item__title");
    drinkItemTitle.innerText = `${i.name}`;
    const drinkItemPrice = document.createElement("span");
    drinkItemPrice.setAttribute("class", "price");
    drinkItemPrice.innerText = `${i.price}원`;
    drinkItemBtn.append(drinkItemImg, drinkItemTitle, drinkItemPrice);
    drinkItemLi.append(drinkItemBtn);
    drinkItems.append(drinkItemLi);
    frag.append(drinkItemLi);
  });
  drinkItems.append(frag);
}

rederColaItem(); // cola item 렌더링

// 렌더링된 아이템을 클릭 시
let rederItems = drinkItems.querySelectorAll("li");
rederItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // 아이템 재고가 품절이라면 품절 알림 표시
    if (event.target.className == "item__btn sold-out") {
      alert("품절입니다");
    } else {
      // 품절이 아니라면 장바구니에 아이템 추가
      itemMoveInCart(item, event);
    }
  });
});

// 카트 빈 배열 생성
let cart = [];

// 자판기 아이템 클릭시 장바구니로 이동
function itemMoveInCart(item, event) {
  // 아이템 새로 생성
  const drinkItemTitle = item.querySelector(".item__title").innerText;
  const imgSrc = item.querySelector("img").src;
  const cartItemLi = document.createElement("li");
  const cartItemBtn = document.createElement("button");
  const cartItemImg = document.createElement("img");
  cartItemImg.className = "item__img";
  cartItemImg.setAttribute("src", imgSrc);
  const cartItemTitle = document.createElement("strong");
  cartItemTitle.className = "item__title";
  cartItemTitle.innerText = drinkItemTitle;
  const cartItemCount = document.createElement("span");
  cartItemCount.className = "num__counter";
  cartItemCount.innerText = 1;
  // 아이템 중복 검사결과를 변수에 저장
  const cartIdx = cart.findIndex((item) => item.name == drinkItemTitle);

  // 카트에 아무것도 없거나, 중복되는 아이템이 없을경우 아이템 추가
  if (cartIdx == -1) {
    cartItemBtn.append(cartItemImg, cartItemTitle, cartItemCount);
    cartItemLi.append(cartItemBtn);
    seletItems.prepend(cartItemLi);
    // 카트에 객체형태로 담기
    cart.push({
      name: drinkItemTitle,
      count: 1,
      price: 1000,
    });
  } else {
    // 카트에 중복상품이 있을 경우 카운트만 증가
    cart[cartIdx].count++;
    const curItem = seletItems.querySelectorAll(".item__title");
    const curCount = seletItems.querySelectorAll(".num__counter");

    curItem.forEach((item, index) => {
      if (item.innerText == cart[cartIdx].name) {
        curCount[(item, index)].innerText = cart[cartIdx].count;
      }
    });
  }

  // 재고수량이 0 이라면 품절 표시 추가
  dataBase.forEach((item) => {
    if (item.name == drinkItemTitle) {
      if (item.count == 0) {
        return;
      }
      item.count--;
      if (item.count <= 0) {
        event.target.setAttribute("class", "item__btn sold-out");
      }
    }
  });
}
