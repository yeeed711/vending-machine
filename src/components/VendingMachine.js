import { ACTION_KEY } from '../constants/index.js';
import { createEl, selectEl, selectElAll } from '../utils/dom.js';
import { formatter } from '../utils/formatter.js';

class VendingMachine {
    constructor() {
        const $vendingSection = selectEl(document, '.vending-machine');
        this.$vendingItems = selectEl($vendingSection, '.vending-items'); // cola items
        this.$putBtn = selectEl($vendingSection, '.put__btn'); // 입금 버튼
        this.$getBtn = selectEl($vendingSection, '.get__btn'); // 획득 버튼
        this.$returnBtn = selectEl($vendingSection, '.return__btn'); // 거스름돈 반환 버튼
        this.$balance = selectEl($vendingSection, '.buy-balance span:first-child'); // 잔액
        this.$selectList = selectEl($vendingSection, '.drink-items'); // 선택한 음료가 들어가는 리스트
        this.$input = selectEl($vendingSection, '.put__money'); // 입금액 입력 인풋
        this.$input.focus();

        const $myInfo = selectEl(document, '.my-info');
        this.$myMoney = selectEl($myInfo, '.mymoney__text span'); // 소지금
        this.$getList = selectEl($myInfo, '.get-list'); // 획득한 음료가 들어가는 리스트
        this.$totalPrice = selectEl($myInfo, '.total__title span:first-child'); // 총 금액
    }

    setup() {
        this.setEvent();
    }

    setEvent() {
        this.putInMoneyButton();
        this.returnMoneyButton();
        this.vandingMachinePanelClick();
    }

    putInMoneyButton() {
        this.$putBtn.addEventListener('click', () => {
            const inputValue = parseInt(this.$input.value); // type number
            let myMoneyValue = parseInt(this.$myMoney.textContent.replace(',', '')); // type number
            const balanceValue = parseInt(this.$balance.textContent.replace(',', '')); //type number
            if (!inputValue) {
                alert(`입금액을 입력해주세요.`);
                this.$input.focus();
                return;
            }

            if (inputValue <= myMoneyValue && inputValue > 0) {
                this.$balance.textContent = formatter(balanceValue + inputValue);
                this.$myMoney.textContent = formatter(myMoneyValue - inputValue);
                this.$input.value = null;
            } else {
                alert(`소지금이 부족합니다`);
                this.$input.focus();
                return;
            }
        });
        //enter event (사용자 경험 향상을 위해)
        this.$input.addEventListener('keyup', (e) => {
            if (e.key !== ACTION_KEY) {
                return;
            } else {
                const inputValue = parseInt(this.$input.value); // type number
                let myMoneyValue = parseInt(this.$myMoney.textContent.replace(',', '')); // type number
                const balanceValue = parseInt(this.$balance.textContent.replace(',', '')); //type number
                if (!inputValue) {
                    alert(`입금액을 입력해주세요.`);
                    this.$input.focus();
                    return;
                }

                if (inputValue <= myMoneyValue && inputValue > 0) {
                    this.$balance.textContent = formatter(balanceValue + inputValue);
                    this.$myMoney.textContent = formatter(myMoneyValue - inputValue);
                    this.$input.value = null;
                } else {
                    alert(`소지금이 부족합니다`);
                    this.$input.focus();
                    return;
                }
            }
        });
    }

    returnMoneyButton() {
        this.$returnBtn.addEventListener('click', () => {
            let myMoneyValue = parseInt(this.$myMoney.textContent.replace(',', '')); // type number
            let balanceValue = parseInt(this.$balance.textContent.replace(',', '')); // type number
            if (balanceValue === 0) {
                return;
            } else {
                this.$myMoney.textContent = formatter(myMoneyValue + balanceValue);
                this.$balance.textContent = +0;
            }
        });
    }

    vandingMachinePanelClick() {
        this.$vendingItems.addEventListener('click', (e) => {
            if (e.target.tagName === 'UL') return;

            const clickedItem = e.target.closest('button');
            //const selectedItems = Array.from(this.$selectList.querySelectorAll('button'));
            const selectedItems = selectElAll(this.$selectList, 'button');
            const clickedItemprice = parseInt(clickedItem.dataset.price);
            let isFirstClicked = false;
            const balanceValue = parseInt(this.$balance.textContent.replace(',', '')); //type number

            // 잔액이 클릭한 상품의 금액보다 많을 때만 실행
            if (balanceValue >= clickedItemprice) {
                for (const item of selectedItems) {
                    // 클릭한 상품과 같은 상품이 이미 존재한다면 카운트만 증가
                    if (item.parentElement.dataset.name === clickedItem.dataset.name) {
                        if (clickedItem.dataset.count === '0') {
                            return; // 품절 상품 클릭시 카운트 증가 방지
                        }
                        item.children[2].textContent++;

                        // 나중에 클릭한 상품도 계속 위로 올라오도록 처리
                        this.$selectList.prepend(item.parentElement);
                        isFirstClicked = true;
                        break; // return으로 처리하면 아래 코드들이 실행되지 않고 끝나버린다.
                    }
                }

                // 처음 클릭한 상품이라면 상품 등록
                if (!isFirstClicked) {
                    this.$selectList.prepend(this.clickedItemGenerator(clickedItem));
                }

                // 클릭한 상품 갯수 감소(품절처리를위해)
                clickedItem.dataset.count--;
                console.log(typeof clickedItem.dataset.count);
                if (clickedItem.dataset.count === '0') {
                    clickedItem.classList.add('sold-out');
                }
                this.$balance.textContent = formatter(balanceValue - clickedItemprice);
            } else if (clickedItem.dataset.count === '0') {
                return;
            } else {
                alert(`잔액이 부족합니다`);
            }
        });
    }

    clickedItemGenerator(item) {
        const { img, name, price, count } = item.dataset;
        const $li = createEl('li');
        $li.setAttribute('data-name', `${name}`);
        $li.setAttribute('data-price', `${price}`);
        const template = ` 
        <button>
          <img class='item__img' src='${img}'/>
            <strong class='item__title'>${name}</strong>
          <span class='num__counter'>1</span>
        </button>
        `;
        $li.insertAdjacentHTML('beforeend', template);
        return $li;
    }
}

export default VendingMachine;
