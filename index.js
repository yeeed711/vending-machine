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
const leftMoney = document.querySelector(".buy-balance span:first-child"); // 잔액
const putBtn = document.querySelector(".put__btn"); // 입금 버튼
const getBtn = document.querySelector(".get__btn"); // 획득 버튼
const myMoney = document.querySelector(".mymoney__text span"); // 소지금

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

function createCartItemLi(item, drinkItemTitle) {
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
  cartItemBtn.append(cartItemImg, cartItemTitle, cartItemCount);
  cartItemLi.append(cartItemBtn);
  return cartItemLi;
}

// 자판기 아이템 클릭시 장바구니로 이동
function itemMoveInCart(item, event) {
  // 아이템 새로 생성
  const drinkItemTitle = item.querySelector(".item__title").innerText;

  // 아이템 중복 검사결과를 변수에 저장
  const cartIdx = cart.findIndex((item) => item.name == drinkItemTitle);
  // 카트에 아무것도 없거나, 중복되는 아이템이 없을경우 아이템 추가
  if (cartIdx == -1) {
    const cartItemLi = createCartItemLi(item, drinkItemTitle);
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
        // 클릭한 상품이 계속 위로 올라오게
        let temp = item.parentElement.parentElement;
        temp.remove();
        seletItems.prepend(temp);
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

// 획득 버튼
function getItemMove() {
  let cartSum = 0;
  for (let i = 0; i < cart.length; i++) {
    cartSum += cart[i].count * cart[i].price;
  }
  // 카트에 아무것도 없을 경우
  if (cart == "") {
    alert("🧺 장바구니에 상품을 담아주세요!");
    // 잔액이 없거나 소지금보다 많은 상품을 담았을 경우
  } else if (leftMoney.innerText == "" || leftMoney.innerText < cartSum) {
    alert("잔액이 부족합니다.");
    return;
    // 정상적인 계산
  } else {
    const numToleftMoney = toggleNumToString(leftMoney.innerText);
    const leftMoneyComma = numToleftMoney - cartSum;
    leftMoney.innerText = toggleNumToString(leftMoneyComma);
  }

  // 카트에 들어있는 아이템을 획득 공간으로 이동

  const cartList = seletItems.querySelectorAll("li");
  cartList.forEach((item) => {
    중복검사(item);
  });

  totalPrice(); // 아이템 총 금액 계산함수 실행
  cart = []; // 아이템 획득공간으로 이동후 카트를 비워준다
}

//원범님 찬스 대박
function 중복검사(item) {
  const getList = document.querySelector(".get-list");
  const getListItems = getList.querySelectorAll("li");
  // 획득 공간에 아무것도 없을 때
  !getListItems.length && getList.append(item);
  for (let i = 0; i < getListItems.length; i++) {
    if (
      // 같은 상품이 있을 때 카운트 추가
      getListItems[i].childNodes[0].childNodes[1].innerText ==
      item.querySelector(".item__title").innerText
    ) {
      getListItems[i].childNodes[0].childNodes[2].innerText =
        parseInt(getListItems[i].childNodes[0].childNodes[2].innerText) +
        parseInt(item.querySelector(".num__counter").innerText);
      item.remove();
      return;
    } else {
      getList.append(item);
    }
  }
}

// 총 금액 변수 설정
let sumTotal = 0;

// 총 금액 계산 함수
function totalPrice() {
  let totalValue = 0;
  // 카트에 담긴 아이템의 총 금액을 계산
  cart.find((item) => {
    totalValue += item.count * item.price;
  });
  sumTotal += totalValue;

  // 총금액 표시
  let totalMoney = document.querySelector(".total__title span");
  totalMoney.innerHTML = toggleNumToString(sumTotal);
}

// 입금액 충전하는 함수
function putMoney() {
  let putMoney = document.querySelector(".put__money");
  myMoneyValue = toggleNumToString(myMoney.innerText);
  // 입금액에 아무 값도 넣지 않은 경우
  if (putMoney.value == "") {
    alert("입금액을 입력해주세요");
    putMoney.focus(); // 포커스를 입금액 입력 창으로
    return;
    // 입금액이 1000 보다 작은 경우
  } else if (putMoney.value < 1000) {
    alert("1000원 이상의 금액을 입력해주세요");
    putMoney.focus();
    return;
    // 입금액이 소지금보다 큰 경우
  } else if (putMoney.value > myMoneyValue) {
    alert("소지금보다 큰 금액은 입력 하실 수 없습니다");
    putMoney.focus();
    return;
  }
  // 입금액에 입력한 금액이 소지금에서 빠져나가고 잔액으로 충전
  const myMoneyComma = myMoneyValue - putMoney.value;
  const leftMoneyComma =
    toggleNumToString(leftMoney.innerText) + parseInt(putMoney.value);
  console.log(leftMoneyComma);

  myMoney.innerText = toggleNumToString(myMoneyComma);
  leftMoney.innerText = toggleNumToString(leftMoneyComma);
  putMoney.value = ""; // 입금액 입력 부분 비우기
}

// 거스름돈 반환 함수
function returnMoney() {
  const numToMyMoney = toggleNumToString(myMoney.innerText);
  const numToLeftMoney = toggleNumToString(leftMoney.innerText);
  const myMoneyComma = parseInt(numToLeftMoney) + parseInt(numToMyMoney);
  myMoney.innerText = toggleNumToString(myMoneyComma);
  leftMoney.innerText = 0;
}

// 이벤트 리스너 정리
getBtn.addEventListener("click", getItemMove);
putBtn.addEventListener("click", putMoney);
returnBtn.addEventListener("click", returnMoney);

// number <-> string(세자리 숫자마다 콤마 넣어주기) 변환 함수
function toggleNumToString(num) {
  if (typeof 1 === typeof num) {
    return num.toLocaleString("ko-KR");
  } else if (typeof "str" === typeof num) {
    return parseInt(num.replace(",", ""));
  }
}
