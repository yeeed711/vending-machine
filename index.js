const items = [
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
const drinkItems = document.querySelector(".vending-items");
const seletItems = document.querySelector(".drink-items");

//cola item 렌더링
function rederColaItem() {
  //가상돔
  const frag = document.createDocumentFragment();

  items.forEach((items) => {
    const drinkItemLi = document.createElement("li");
    const drinkItemBtn = document.createElement("button");
    const drinkItemImg = document.createElement("img");
    drinkItemBtn.setAttribute("class", "item__btn");
    drinkItemImg.setAttribute("src", `${items.img}`);
    const drinkItemTitle = document.createElement("strong");
    drinkItemTitle.setAttribute("class", "item__title");
    drinkItemTitle.innerText = `${items.name}`;
    const drinkItemPrice = document.createElement("span");
    drinkItemPrice.setAttribute("class", "price");
    drinkItemPrice.innerText = `${items.price}원`;
    drinkItemBtn.append(drinkItemImg, drinkItemTitle, drinkItemPrice);
    drinkItemLi.append(drinkItemBtn);
    drinkItems.append(drinkItemLi);
    frag.append(drinkItemLi);
  });
  drinkItems.append(frag);
}
rederColaItem(); //items 렌더링
const newLi = drinkItems.querySelectorAll("li");

let cart = [];

//cola 선택시 카트에 담기 (아이템 새로 생성)
function itemMove(e) {
  //카트 내 중복아이템 감지
  let check = false;
  for (let i = 0; i < cart.length; i++) {
    //카트에 중복되는 아이템이 있을때 카운트를 증가시키고 렌더링안됨
    if (cart[i].name == e.target.childNodes[1].innerText) {
      cart[i].count++;
      check = true;
      let arr = document.querySelectorAll(".drink-items > li > button");
      overlapCheck(arr, cart[i]);
    }
  }

  function overlapCheck(arr, item) {
    // arr = 중복을 찾을 배열, item = 중복인지 확인하는 요소
    for (let j = 0; j < arr.length; j++) {
      if (item.name == arr[j].childNodes[1].innerText) {
        arr[j].childNodes[2].innerText = item.count;
        //클릭한 아이템이 계속 맨 위로 올라오게
        let temp = arr[j].parentElement;
        arr[j].parentElement.remove();
        seletItems.prepend(temp);
      }
    }
  }

  //카드에 아무것도 없거나, 같은 이름을 가진 아이템이 없을때
  if (check == false) {
    const cartItemLi = document.createElement("li");
    const cartItemBtn = document.createElement("button");
    cartItemBtn.addEventListener("click", countDecrease);
    const cartItemImg = document.createElement("img");
    cartItemImg.className = "item__img";
    cartItemImg.setAttribute("src", e.target.childNodes[0].src);
    const cartItemTitle = document.createElement("strong");
    cartItemTitle.className = "item__title";
    cartItemTitle.innerText = e.target.childNodes[1].innerText;
    const cartItemCount = document.createElement("span");
    cartItemCount.className = "num__counter";
    cartItemCount.innerText = 1;

    cartItemBtn.append(cartItemImg, cartItemTitle, cartItemCount);
    cartItemLi.append(cartItemBtn);
    seletItems.prepend(cartItemLi);
    //카트에 객체형태로 담기
    cart.push({
      name: e.target.childNodes[1].innerText,
      imgSrc: e.target.childNodes[0].src,
      count: cartItemCount.innerText,
    });
  }
}

function countDecrease(e) {
  cart.forEach((item, idx) => {
    if (e.target.childNodes[1].innerText == item.name) {
      item.count--;
      e.target.childNodes[2].innerText = item.count;
    }
    if (item.count <= 0) {
      e.target.parentElement.remove();
      cart.splice(idx, 1);
    }
  });
}

newLi.forEach((item) => item.addEventListener("click", itemMove));
