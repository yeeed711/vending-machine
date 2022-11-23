import { ACTION_KEY, VALID_BALANCE, VALID_INPUT_VALUE, VALID_MY_MONEY } from '../constants/index.js';
import { createEl, selectEl, selectElAll, formatter, numberFormatter } from '../utils/index.js';

class VendingMachine {
    constructor() {
        // 변수 초기화
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

    // 이벤트 바인딩
    setup() {
        this.setEvent();
    }

    // 실행할 이벤트 지정
    setEvent() {
        this.putInMoneyButton();
        this.returnMoneyButton();
        this.vandingMachinePanelClick();
        this.getItemsButton();
    }

    //입금 버튼
    putInMoneyButton() {
        this.$putBtn.addEventListener('click', () => {
            const inputValue = parseInt(this.$input.value); // type number
            let myMoneyValue = numberFormatter(this.$myMoney.textContent);
            const balanceValue = numberFormatter(this.$balance.textContent);
            if (!inputValue) {
                alert(VALID_INPUT_VALUE);
                this.$input.focus();
                return;
            }

            if (inputValue <= myMoneyValue && inputValue > 0) {
                this.$balance.textContent = formatter(balanceValue + inputValue);
                this.$myMoney.textContent = formatter(myMoneyValue - inputValue);
                this.$input.value = null;
            } else {
                alert(VALID_MY_MONEY);
                this.$input.focus();
                return;
            }
        });
        //키보드 Enter 입력 이벤트 (사용자 경험 향상을 위해)
        this.$input.addEventListener('keyup', (e) => {
            if (e.key !== ACTION_KEY) {
                return;
            } else {
                const inputValue = parseInt(this.$input.value); // type number
                let myMoneyValue = numberFormatter(this.$myMoney.textContent);
                const balanceValue = numberFormatter(this.$balance.textContent);
                if (!inputValue) {
                    alert(VALID_INPUT_VALUE);
                    this.$input.focus();
                    return;
                }

                if (inputValue <= myMoneyValue && inputValue > 0) {
                    this.$balance.textContent = formatter(balanceValue + inputValue);
                    this.$myMoney.textContent = formatter(myMoneyValue - inputValue);
                    this.$input.value = null;
                } else {
                    alert(VALID_MY_MONEY);
                    this.$input.focus();
                    return;
                }
            }
        });
    }

    returnMoneyButton() {
        this.$returnBtn.addEventListener('click', () => {
            let myMoneyValue = numberFormatter(this.$myMoney.textContent);
            let balanceValue = numberFormatter(this.$balance.textContent);
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
            const selectedItems = selectElAll(this.$selectList, 'button');
            const clickedItemprice = parseInt(clickedItem.dataset.price);
            let isFirstClicked = false;
            const balanceValue = numberFormatter(this.$balance.textContent);

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
                if (clickedItem.dataset.count === '0') {
                    clickedItem.classList.add('sold-out');
                }
                this.$balance.textContent = formatter(balanceValue - clickedItemprice);
            } else if (clickedItem.dataset.count === '0') {
                return;
            } else {
                alert(VALID_BALANCE);
            }
        });
    }

    clickedItemGenerator(item) {
        const { img, name, price } = item.dataset;
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

    getItemsButton() {
        this.$getBtn.addEventListener('click', () => {
            // 아무것도 없는 상태일 때 불필요한 클릭이벤트 방지
            if (!selectElAll(this.$selectList, 'li').length) return;

            //장바구니와 획득존상품 비교후 같은게 있다면 카운트 증가

            for (const selectedItem of selectElAll(this.$selectList, 'li')) {
                let isGot = false;
                // 획득한 음료가 한개 이상일 때 중복처리
                if (selectElAll(this.$getList, 'li').length > 0) {
                    for (const gotItem of selectElAll(this.$getList, 'li')) {
                        let gotItemCount = selectEl(gotItem, '.num__counter');
                        let selectedItemCount = selectEl(selectedItem, '.num__counter');

                        // 선택한 음료와 획득한 음료를 비교, 같은 아이템을 찾으면 count 더해주기
                        if (selectedItem.dataset.name === gotItem.dataset.name) {
                            gotItemCount.textContent =
                                parseInt(gotItemCount.textContent) + parseInt(selectedItemCount.textContent);
                            isGot = true;
                            break;
                        }
                        // 중복비교후 나머지 중복이 아닌 상품들 추가
                    }
                    if (!isGot) {
                        // (else문이 아닌 이유: 선택한 상품중에 중복된 상품외의 상품이 있을경우 추가를 안함)
                        this.$getList.append(selectedItem);
                    }
                } else {
                    // 획득한 음료가 아무것도 없을땐 무조건 추가
                    this.$getList.append(selectedItem);
                }
            }

            // selected zone을 비워준다.
            this.$selectList.innerHTML = null;

            // 총 금액 계산
            let total = 0;
            selectElAll(this.$getList, 'li').forEach(
                (item) => (total += parseInt(selectEl(item, '.num__counter').textContent) * item.dataset.price)
            );

            this.$totalPrice.textContent = formatter(total);
        });
    }
}

export default VendingMachine;
