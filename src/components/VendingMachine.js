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
}

export default VendingMachine;
