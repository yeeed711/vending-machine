const putBtn = document.querySelector(".put__btn");
function 입금버튼() {
  const input = document.getElementById("int-put");
  const 잔액 = document.querySelector("#money");
  잔액.innerText = input.value;
  const 입금액 = parseInt(input.value);
  input.value = "";
  const 소지금 = document.querySelector(".mymoney__text span");
  소지금.innerText = parseInt(소지금.innerText) - 입금액;
  console.log(parseInt(소지금.innerText) - 입금액);
}
putBtn.addEventListener("click", 입금버튼);
