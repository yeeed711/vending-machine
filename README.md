# 바닐라 자바스크립트로 만드는 자판기

## 기능 요구사항

-   모든 숫자는 세 자리마다 콤마가 들어갑니다.
-   데이터는 비동기로 처리됩니다.
-   반응형 웹사이트로 pc ver, mobile ver 두가지 버전이 있습니다.
-   class를 사용하여 구현합니다.
-   상품은 동적으로 추가됩니다.
-   최초 페이지 진입시 `input`에 포커싱됩니다.

### 각 버튼들 기능 요구 사항

-   **입금액 입력 input**
    -   숫자만 입력 받을 수 있습니다.
    -   기준 잔액을 초과하는 금액은 입력할 수 없습니다.
-   **입금 버튼**
    -   `input`에 값이 없으면 동작하지 않습니다.
    -   `input`에 입력한 금액 만큼 잔액이 추가됩니다.
    -   키보드로도 입금버튼을 동작시킬 수 있습니다.
-   **거스름돈 반환 버튼**
    -   현재 남은 잔액을 소지금으로 반환할 수 있습니다.
    -   잔액이 0원이라면 동작하지 않습니다.
-   **밴딩머신 패널 버튼**
    -   각 패널은 클릭가능한 상태입니다.
    -   준비된 잔액이 없다면 패널을 클릭했을 때 경고문구가 나타납니다.
    -   클릭한 상품보다 잔액이 많다면 상품이 장바구니에 추가됩니다.
    -   상품은 모두 총 갯수가 정해져있으며 이를 초과할 수 없습니다.
        -   상품의 count가 0이되면 품절 처리 상태가 됩니다.
        -   품절 상품은 더이상 클릭할 수 없습니다.
    -   이미 클릭한 상품이 장바구니에 있을 경우 상품의 카운트만 올라갑니다.
    -   새로운 상품이 클릭 될 경우 제일 위에 추가됩니다.
-   **획득 버튼**
    -   장바구니에 상품이 있을 경우 상품을 획득한 공간으로 이동시킵니다.
    -   이미 획득한 상품이 있을 경우 상품의 카운트만 올라갑니다.
    -   획득한 음료의 금액이 총 금액에 표시됩니다.

---

## 결과물

1. |                                                                                    PC ver                                                                                     |
   | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
   | <img width="600" alt="스크린샷 2022-04-25 오후 11 21 06" src="https://user-images.githubusercontent.com/97894417/165108638-df65156a-a15c-47ca-8ac6-48eb0baba2fe.png"> |

2. |                                                                                  mobile ver.                                                                                  |
   | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
   | <img width="350" alt="스크린샷 2022-04-25 오후 11 21 06" src="https://user-images.githubusercontent.com/97894417/165109592-e18d9528-4f6e-4923-aaba-0f9814dcb58c.png"> |

---

### 이번 밴딩머신[class ver.]에서 새롭게 시도해본 점

### utils함수들 분리

#### 1. dom조작 함수

-   돔 조작 관련 함수들을 유틸 함수로 분리해서 사용.
-   `quertSelectorAll`로 불러오면 유사배열로 반환되기때문에 배열 메서드를 사용하기위해 `Array.from`으로 감싸줬다.

```js
export const selectEl = (scope, selector) => {
    return scope.querySelector(selector);
};

export const selectElAll = (scope, selector) => {
    return Array.from(scope.querySelectorAll(selector));
};

export const createEl = (tagName) => {
    return document.createElement(tagName);
};

export const createFrag = () => {
    return document.createDocumentFragment();
};
```

#### 2. 단위포맷 함수

-   `Intl API`를 사용.
-   날짜계산, 시간계산 등등 다양한 api가 있지만 그중에서도 통화단위 포맷인 `NumberFormat` 을 사용해 유틸 함수로 사용했다.

```js
// 세 자리마다 콤마
export const commaFormatter = (value) => {
    return new Intl.NumberFormat('ko').format(`${value}`);
};

// 숫자만 필터 (number, string 섞인거에만 사용)
export const numberFormatter = (value) => {
    return parseInt(value.replace(',', ''));
};
```

#### 3. 상수로 사용되는 값 분리

-   에러메세지나 기타 상수로 사용되는 값은 따로 분리해줬다.

```js
export const ACTION_KEY = 'Enter';

// VALIDATE_MESSAGE
export const VALID_INPUT_VALUE = '입금액을 입력해주세요.';
export const VALID_MY_MONEY = '소지금이 부족합니다.';
export const VALID_BALANCE = '잔액이 부족합니다.';

// API_FETCH_MESSAGE
export const FETCH_BASE_URL = 'src/data/data.json';
export const FETCH_SERVER_ERROR_MESSAGE = '서버와의 연결이 불안정합니다!';
export const FETCH_FAIL_MESSAGE = '에러가 발생했습니다!';
```

#### 4. insertAdjacentHTML

-   insertAdjacentHTML 돔요소를 추가할 때 사용한다.
-   innerHTML처럼 돔을 새로 그리는 것 보다 작업이 덜 드므로 훨씬 빠르다.
