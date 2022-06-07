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
