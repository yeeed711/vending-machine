const items = [
  {
    name: "Original_cola",
    img: "./img/cola.svg",
    price: 1000,
    count: 1,
  },
  {
    name: "Violet_cola",
    img: "./img/violet_cola.svg",
    price: 1000,
    count: 1,
  },
  {
    name: "Yellow_cola",
    img: "./img/yellow_cola.svg",
    price: 1000,
    count: 1,
  },
  {
    name: "Cool_cola",
    img: "./img/cool_cola.svg",
    price: 1000,
    count: 1,
  },
  {
    name: "Green_cola",
    img: "./img/green_cola.svg",
    price: 1000,
    count: 1,
  },
  {
    name: "Orange_cola",
    img: "./img/orange_cola.svg",
    price: 1000,
    count: 1,
  },
];

const seletItems = document.querySelector(".drink-items");
const drinkItems = document.querySelector(".vending-items");

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

//cola 선택시 카트에 담기
function itemMove(e) {
  let cartItemLi = document.createElement("li");
  let cartItemBtn = document.createElement("button");
  let cartItemImg = document.createElement("img");
  cartItemImg.className = "item__img";
  cartItemImg.setAttribute("src", e.target.childNodes[0].src);
  let cartItemTitle = document.createElement("strong");
  cartItemTitle.className = "item__title";
  cartItemTitle.innerText = e.target.childNodes[1].innerText;
  let cartItemCount = document.createElement("span");
  cartItemCount.className = "num__counter";
  cartItemCount.innerText = 1;

  cartItemBtn.append(cartItemImg, cartItemTitle, cartItemCount);
  cartItemLi.append(cartItemBtn);
  seletItems.prepend(cartItemLi);
}
drinkItems.addEventListener("click", itemMove);
