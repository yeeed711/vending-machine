/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 395:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchData = void 0;
var _constants_1 = __webpack_require__(37);
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("".concat(_constants_1.FETCH_BASE_URL))];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("".concat(_constants_1.FETCH_SERVER_ERROR_MESSAGE));
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                console.error("".concat(_constants_1.FETCH_FAIL_MESSAGE, " ").concat(error_1.message));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.fetchData = fetchData;


/***/ }),

/***/ 505:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var _api_1 = __webpack_require__(395);
var _utils_1 = __webpack_require__(928);
var ColaGenerator = /** @class */ (function () {
    function ColaGenerator() {
        this.$itemList = (0, _utils_1.selectEl)(document, '.vending-items');
    }
    ColaGenerator.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ColaGenerator.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, _api_1.fetchData)()];
                    case 1:
                        data = _a.sent();
                        this.render(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    ColaGenerator.prototype.render = function (data) {
        var $frag = (0, _utils_1.createFrag)();
        data.forEach(function (item) {
            var $li = (0, _utils_1.createEl)('li');
            var template = "\n          <button\n          type='button'\n          class='item__btn'\n          data-name='".concat(item.name, "'\n          data-count='").concat(item.count, "'\n          data-price='").concat(item.price, "'\n          data-img='").concat(item.img, "'>\n            <img src='").concat(item.img, "' alt=''/>\n            <strong class='item__title'>").concat(item.name, "</strong>\n            <span class='price'>").concat(item.price, "\uC6D0</span>\n          </button>\n          ");
            $li.insertAdjacentHTML('beforeend', template);
            $frag.appendChild($li);
        });
        this.$itemList.appendChild($frag);
    };
    return ColaGenerator;
}());
exports["default"] = ColaGenerator;


/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var _constants_1 = __webpack_require__(37);
var _utils_1 = __webpack_require__(928);
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        var $vendingSection = (0, _utils_1.selectEl)(document, '.vending-machine');
        this.$vendingItems = (0, _utils_1.selectEl)($vendingSection, '.vending-items');
        this.$putBtn = (0, _utils_1.selectEl)($vendingSection, '.put__btn');
        this.$getBtn = (0, _utils_1.selectEl)($vendingSection, '.get__btn');
        this.$returnBtn = (0, _utils_1.selectEl)($vendingSection, '.return__btn');
        this.$balance = (0, _utils_1.selectEl)($vendingSection, '.buy-balance span:first-child');
        this.$selectList = (0, _utils_1.selectEl)($vendingSection, '.drink-items');
        this.$input = (0, _utils_1.selectEl)($vendingSection, '.put__money');
        this.$input.focus();
        var $myInfo = (0, _utils_1.selectEl)(document, '.my-info');
        this.$myMoney = (0, _utils_1.selectEl)($myInfo, '.mymoney__text span');
        this.$getList = (0, _utils_1.selectEl)($myInfo, '.get-list');
        this.$totalPrice = (0, _utils_1.selectEl)($myInfo, '.total__title span:first-child');
    }
    VendingMachine.prototype.setup = function () {
        this.setEvent();
    };
    VendingMachine.prototype.setEvent = function () {
        this.putInMoneyButton();
        this.returnMoneyButton();
        this.vandingMachinePanelClick();
        this.getItemsButton();
    };
    VendingMachine.prototype.moneyChanger = function () {
        var inputValue = parseInt(this.$input.value);
        var myMoneyValue = (0, _utils_1.numberFormatter)(this.$myMoney.textContent);
        var balanceValue = (0, _utils_1.numberFormatter)(this.$balance.textContent);
        if (!inputValue) {
            alert(_constants_1.VALID_INPUT_VALUE);
            this.$input.focus();
            return;
        }
        if (inputValue <= myMoneyValue && inputValue > 0) {
            this.$balance.textContent = (0, _utils_1.commaFormatter)(balanceValue + inputValue);
            this.$myMoney.textContent = (0, _utils_1.commaFormatter)(myMoneyValue - inputValue);
            this.$input.value = null;
        }
        else {
            alert(_constants_1.VALID_MY_MONEY);
            this.$input.focus();
            return;
        }
    };
    VendingMachine.prototype.putInMoneyButton = function () {
        var _this = this;
        this.$putBtn.addEventListener('click', function () {
            _this.moneyChanger();
        });
        this.$input.addEventListener('keyup', function (e) {
            if (e.key !== _constants_1.ACTION_KEY) {
                return;
            }
            else {
                _this.moneyChanger();
            }
        });
    };
    VendingMachine.prototype.returnMoneyButton = function () {
        var _this = this;
        this.$returnBtn.addEventListener('click', function () {
            var myMoneyValue = (0, _utils_1.numberFormatter)(_this.$myMoney.textContent);
            var balanceValue = (0, _utils_1.numberFormatter)(_this.$balance.textContent);
            if (balanceValue === 0) {
                return;
            }
            else {
                _this.$myMoney.textContent = (0, _utils_1.commaFormatter)(myMoneyValue + balanceValue);
                _this.$balance.textContent = '0';
            }
        });
    };
    VendingMachine.prototype.vandingMachinePanelClick = function () {
        var _this = this;
        this.$vendingItems.addEventListener('click', function (e) {
            var target = e.target;
            if (target.tagName === 'UL')
                return;
            var clickedItem = target.closest('button');
            var selectedItems = (0, _utils_1.selectElAll)(_this.$selectList, 'button');
            var clickedItemprice = parseInt(clickedItem.dataset.price);
            var isFirstClicked = false;
            var balanceValue = (0, _utils_1.numberFormatter)(_this.$balance.textContent);
            if (balanceValue >= clickedItemprice) {
                for (var _i = 0, selectedItems_1 = selectedItems; _i < selectedItems_1.length; _i++) {
                    var item = selectedItems_1[_i];
                    if (item.parentElement.dataset.name === clickedItem.dataset.name) {
                        if (clickedItem.dataset.count === '0') {
                            return;
                        }
                        item.children[2].textContent = (parseInt(item.children[2].textContent) + 1).toString();
                        _this.$selectList.prepend(item.parentElement);
                        isFirstClicked = true;
                        break;
                    }
                }
                if (!isFirstClicked) {
                    _this.$selectList.prepend(_this.clickedItemGenerator(clickedItem));
                }
                clickedItem.dataset.count = (parseInt(clickedItem.dataset.count) - 1).toString();
                if (clickedItem.dataset.count === '0') {
                    clickedItem.classList.add('sold-out');
                }
                _this.$balance.textContent = (0, _utils_1.commaFormatter)(balanceValue - clickedItemprice);
            }
            else if (clickedItem.dataset.count === '0')
                return;
            else {
                alert(_constants_1.VALID_BALANCE);
                _this.$input.focus();
            }
        });
    };
    VendingMachine.prototype.clickedItemGenerator = function (item) {
        var _a = item.dataset, img = _a.img, name = _a.name, price = _a.price;
        var $li = (0, _utils_1.createEl)('li');
        $li.setAttribute('data-name', "".concat(name));
        $li.setAttribute('data-price', "".concat(price));
        var template = " \n        <button>\n          <img class='item__img' src='".concat(img, "'/>\n            <strong class='item__title'>").concat(name, "</strong>\n          <span class='num__counter'>1</span>\n        </button>\n        ");
        $li.insertAdjacentHTML('beforeend', template);
        return $li;
    };
    VendingMachine.prototype.getItemsButton = function () {
        var _this = this;
        this.$getBtn.addEventListener('click', function () {
            var selectList = (0, _utils_1.selectElAll)(_this.$selectList, 'li');
            var getList = (0, _utils_1.selectElAll)(_this.$getList, 'li');
            if (!selectList.length)
                return;
            for (var _i = 0, selectList_1 = selectList; _i < selectList_1.length; _i++) {
                var selectedItem = selectList_1[_i];
                var isGot = false;
                if (getList.length > 0) {
                    for (var _a = 0, getList_1 = getList; _a < getList_1.length; _a++) {
                        var gotItem = getList_1[_a];
                        var gotItemCount = (0, _utils_1.selectEl)(gotItem, '.num__counter');
                        var selectedItemCount = (0, _utils_1.selectEl)(selectedItem, '.num__counter');
                        if (selectedItem.dataset.name === gotItem.dataset.name) {
                            gotItemCount.textContent =
                                parseInt(gotItemCount.textContent) +
                                    parseInt(selectedItemCount.textContent);
                            isGot = true;
                            break;
                        }
                    }
                    if (!isGot) {
                        _this.$getList.append(selectedItem);
                    }
                }
                else {
                    _this.$getList.append(selectedItem);
                }
            }
            _this.$selectList.innerHTML = null;
            var total = 0;
            (0, _utils_1.selectElAll)(_this.$getList, 'li').forEach(function (item) {
                return (total +=
                    parseInt((0, _utils_1.selectEl)(item, '.num__counter').textContent) *
                        parseInt(item.dataset.price));
            });
            _this.$totalPrice.textContent = (0, _utils_1.commaFormatter)(total);
        });
    };
    return VendingMachine;
}());
exports["default"] = VendingMachine;


/***/ }),

/***/ 740:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColaGenerator = exports.VendingMachine = void 0;
var VendingMachine_1 = __webpack_require__(52);
Object.defineProperty(exports, "VendingMachine", ({ enumerable: true, get: function () { return __importDefault(VendingMachine_1).default; } }));
var ColaGenerator_1 = __webpack_require__(505);
Object.defineProperty(exports, "ColaGenerator", ({ enumerable: true, get: function () { return __importDefault(ColaGenerator_1).default; } }));


/***/ }),

/***/ 136:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logo_img = exports.yellow_cola = exports.violet_cola = exports.orange_cola = exports.green_cola = exports.cool_cola = exports.cola = void 0;
var cola_svg_1 = __webpack_require__(731);
Object.defineProperty(exports, "cola", ({ enumerable: true, get: function () { return __importDefault(cola_svg_1).default; } }));
var cool_cola_svg_1 = __webpack_require__(936);
Object.defineProperty(exports, "cool_cola", ({ enumerable: true, get: function () { return __importDefault(cool_cola_svg_1).default; } }));
var green_cola_svg_1 = __webpack_require__(340);
Object.defineProperty(exports, "green_cola", ({ enumerable: true, get: function () { return __importDefault(green_cola_svg_1).default; } }));
var orange_cola_svg_1 = __webpack_require__(619);
Object.defineProperty(exports, "orange_cola", ({ enumerable: true, get: function () { return __importDefault(orange_cola_svg_1).default; } }));
var violet_cola_svg_1 = __webpack_require__(863);
Object.defineProperty(exports, "violet_cola", ({ enumerable: true, get: function () { return __importDefault(violet_cola_svg_1).default; } }));
var yellow_cola_svg_1 = __webpack_require__(723);
Object.defineProperty(exports, "yellow_cola", ({ enumerable: true, get: function () { return __importDefault(yellow_cola_svg_1).default; } }));
var Logo_img_png_1 = __webpack_require__(245);
Object.defineProperty(exports, "Logo_img", ({ enumerable: true, get: function () { return __importDefault(Logo_img_png_1).default; } }));


/***/ }),

/***/ 37:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(477), exports);
__exportStar(__webpack_require__(136), exports);


/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FETCH_FAIL_MESSAGE = exports.FETCH_SERVER_ERROR_MESSAGE = exports.FETCH_BASE_URL = exports.VALID_BALANCE = exports.VALID_MY_MONEY = exports.VALID_INPUT_VALUE = exports.ACTION_KEY = void 0;
var ACTION_KEY = 'Enter';
exports.ACTION_KEY = ACTION_KEY;
// VALIDATE_MESSAGE
var VALID_INPUT_VALUE = '입금액을 입력해주세요.';
exports.VALID_INPUT_VALUE = VALID_INPUT_VALUE;
var VALID_MY_MONEY = '소지금이 부족합니다.';
exports.VALID_MY_MONEY = VALID_MY_MONEY;
var VALID_BALANCE = '잔액이 부족합니다.';
exports.VALID_BALANCE = VALID_BALANCE;
// API_FETCH_MESSAGE
var FETCH_BASE_URL = './data/data.json';
exports.FETCH_BASE_URL = FETCH_BASE_URL;
var FETCH_SERVER_ERROR_MESSAGE = '서버와의 연결이 불안정합니다!';
exports.FETCH_SERVER_ERROR_MESSAGE = FETCH_SERVER_ERROR_MESSAGE;
var FETCH_FAIL_MESSAGE = '에러가 발생했습니다!';
exports.FETCH_FAIL_MESSAGE = FETCH_FAIL_MESSAGE;


/***/ }),

/***/ 519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var _components_1 = __webpack_require__(740);
__webpack_require__(417);
var colaGenerator = new _components_1.ColaGenerator();
var vendingMachine = new _components_1.VendingMachine();
// await colaGenerator.setup()
colaGenerator.setup();
vendingMachine.setup();


/***/ }),

/***/ 593:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFrag = exports.createEl = exports.selectElAll = exports.selectEl = void 0;
var selectEl = function (scope, selector) {
    if (scope === void 0) { scope = document; }
    return scope.querySelector(selector);
};
exports.selectEl = selectEl;
var selectElAll = function (scope, selector) {
    if (scope === void 0) { scope = document; }
    return Array.from(scope.querySelectorAll(selector));
};
exports.selectElAll = selectElAll;
var createEl = function (tagName) {
    return document.createElement(tagName);
};
exports.createEl = createEl;
var createFrag = function () {
    return document.createDocumentFragment();
};
exports.createFrag = createFrag;
//scope = node
//selector = string
//tagName = string


/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numberFormatter = exports.commaFormatter = void 0;
// 세자리마다 콤마
var commaFormatter = function (value) {
    return new Intl.NumberFormat('ko').format(value).toString();
};
exports.commaFormatter = commaFormatter;
// 숫자만 필터 (number, string 섞인거에만 사용)
var numberFormatter = function (value) {
    return parseInt(value.replace(',', ''));
};
exports.numberFormatter = numberFormatter;


/***/ }),

/***/ 928:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(593), exports);
__exportStar(__webpack_require__(106), exports);


/***/ }),

/***/ 245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/Logo_img.png";

/***/ }),

/***/ 731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/cola.svg";

/***/ }),

/***/ 936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/cool_cola.svg";

/***/ }),

/***/ 340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/green_cola.svg";

/***/ }),

/***/ 619:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/orange_cola.svg";

/***/ }),

/***/ 863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/violet_cola.svg";

/***/ }),

/***/ 723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/yellow_cola.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(519);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(417);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLGtCQUFrQjs7Ozs7Ozs7Ozs7QUN2QmxCLFdBQVc7QUFDSixJQUFNLGNBQWMsR0FBRyxVQUFDLEtBQWE7SUFDMUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRTtBQUM3RCxDQUFDO0FBRlksc0JBQWMsa0JBRTFCO0FBRUQsbUNBQW1DO0FBQzVCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBVTtJQUN4QyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRlksdUJBQWUsbUJBRTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRCxnREFBcUI7QUFDckIsZ0RBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0QzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlbmRpbmctbWFjaGluZS8uL3NyYy9zY3NzL2luZGV4LnNjc3M/MDM1OCIsIndlYnBhY2s6Ly92ZW5kaW5nLW1hY2hpbmUvLi9zcmMvYXBpL2luZGV4LnRzIiwid2VicGFjazovL3ZlbmRpbmctbWFjaGluZS8uL3NyYy9jb21wb25lbnRzL0NvbGFHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lLy4vc3JjL2NvbXBvbmVudHMvVmVuZGluZ01hY2hpbmUudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lLy4vc3JjL2NvbnN0YW50cy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lLy4vc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1hY2hpbmUvLi9zcmMvY29uc3RhbnRzL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lLy4vc3JjL3V0aWxzL2RvbS50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1hY2hpbmUvLi9zcmMvdXRpbHMvZm9ybWF0dGVyLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWFjaGluZS8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1hY2hpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ZlbmRpbmctbWFjaGluZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZlbmRpbmctbWFjaGluZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tYWNoaW5lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge1xuICBGRVRDSF9CQVNFX1VSTCxcbiAgRkVUQ0hfRkFJTF9NRVNTQUdFLFxuICBGRVRDSF9TRVJWRVJfRVJST1JfTUVTU0FHRVxufSBmcm9tICdAY29uc3RhbnRzJ1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0ZFVENIX0JBU0VfVVJMfWApXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0ZFVENIX1NFUlZFUl9FUlJPUl9NRVNTQUdFfWApXG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYCR7RkVUQ0hfRkFJTF9NRVNTQUdFfSAke2Vycm9yLm1lc3NhZ2V9YClcbiAgfVxufVxuXG5leHBvcnQgeyBmZXRjaERhdGEgfVxuIiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnQGFwaSdcbmltcG9ydCB7IGNyZWF0ZUVsLCBjcmVhdGVGcmFnLCBzZWxlY3RFbCB9IGZyb20gJ0B1dGlscydcblxuaW50ZXJmYWNlIGRhdGFUeXBlIHtcbiAgbmFtZTogc3RyaW5nXG4gIGltZzogc3RyaW5nXG4gIHByaWNlOiBudW1iZXJcbiAgY291bnQ6IG51bWJlclxufVxuXG5jbGFzcyBDb2xhR2VuZXJhdG9yIHtcbiAgJGl0ZW1MaXN0OiBFbGVtZW50XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGl0ZW1MaXN0ID0gc2VsZWN0RWwoZG9jdW1lbnQsICcudmVuZGluZy1pdGVtcycpXG4gIH1cblxuICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmZldGNoKClcbiAgfVxuXG4gIGFzeW5jIGZldGNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKVxuICAgIHRoaXMucmVuZGVyKGRhdGEpXG4gIH1cblxuICByZW5kZXIoZGF0YTogZGF0YVR5cGVbXSk6IHZvaWQge1xuICAgIGNvbnN0ICRmcmFnID0gY3JlYXRlRnJhZygpXG5cbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCAkbGkgPSBjcmVhdGVFbCgnbGknKVxuICAgICAgY29uc3QgdGVtcGxhdGUgPSBgXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBjbGFzcz0naXRlbV9fYnRuJ1xuICAgICAgICAgIGRhdGEtbmFtZT0nJHtpdGVtLm5hbWV9J1xuICAgICAgICAgIGRhdGEtY291bnQ9JyR7aXRlbS5jb3VudH0nXG4gICAgICAgICAgZGF0YS1wcmljZT0nJHtpdGVtLnByaWNlfSdcbiAgICAgICAgICBkYXRhLWltZz0nJHtpdGVtLmltZ30nPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7aXRlbS5pbWd9JyBhbHQ9JycvPlxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz0naXRlbV9fdGl0bGUnPiR7aXRlbS5uYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3ByaWNlJz4ke2l0ZW0ucHJpY2V97JuQPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIGBcbiAgICAgICRsaS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKVxuICAgICAgJGZyYWcuYXBwZW5kQ2hpbGQoJGxpKVxuICAgIH0pXG4gICAgdGhpcy4kaXRlbUxpc3QuYXBwZW5kQ2hpbGQoJGZyYWcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sYUdlbmVyYXRvclxuIiwiaW1wb3J0IHtcbiAgQUNUSU9OX0tFWSxcbiAgVkFMSURfQkFMQU5DRSxcbiAgVkFMSURfSU5QVVRfVkFMVUUsXG4gIFZBTElEX01ZX01PTkVZXG59IGZyb20gJ0Bjb25zdGFudHMnXG5pbXBvcnQge1xuICBjcmVhdGVFbCxcbiAgc2VsZWN0RWwsXG4gIHNlbGVjdEVsQWxsLFxuICBjb21tYUZvcm1hdHRlcixcbiAgbnVtYmVyRm9ybWF0dGVyXG59IGZyb20gJ0B1dGlscydcblxuY2xhc3MgVmVuZGluZ01hY2hpbmUge1xuICAkdmVuZGluZ0l0ZW1zOiBFbGVtZW50XG4gICRwdXRCdG46IEVsZW1lbnRcbiAgJGdldEJ0bjogRWxlbWVudFxuICAkcmV0dXJuQnRuOiBFbGVtZW50XG4gICRiYWxhbmNlOiBFbGVtZW50XG4gICRzZWxlY3RMaXN0OiBFbGVtZW50XG4gICRpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICAkbXlNb25leTogRWxlbWVudFxuICAkZ2V0TGlzdDogRWxlbWVudFxuICAkdG90YWxQcmljZTogRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0ICR2ZW5kaW5nU2VjdGlvbiA9IHNlbGVjdEVsKGRvY3VtZW50LCAnLnZlbmRpbmctbWFjaGluZScpXG4gICAgdGhpcy4kdmVuZGluZ0l0ZW1zID0gc2VsZWN0RWwoJHZlbmRpbmdTZWN0aW9uLCAnLnZlbmRpbmctaXRlbXMnKVxuICAgIHRoaXMuJHB1dEJ0biA9IHNlbGVjdEVsKCR2ZW5kaW5nU2VjdGlvbiwgJy5wdXRfX2J0bicpXG4gICAgdGhpcy4kZ2V0QnRuID0gc2VsZWN0RWwoJHZlbmRpbmdTZWN0aW9uLCAnLmdldF9fYnRuJylcbiAgICB0aGlzLiRyZXR1cm5CdG4gPSBzZWxlY3RFbCgkdmVuZGluZ1NlY3Rpb24sICcucmV0dXJuX19idG4nKVxuICAgIHRoaXMuJGJhbGFuY2UgPSBzZWxlY3RFbCgkdmVuZGluZ1NlY3Rpb24sICcuYnV5LWJhbGFuY2Ugc3BhbjpmaXJzdC1jaGlsZCcpXG4gICAgdGhpcy4kc2VsZWN0TGlzdCA9IHNlbGVjdEVsKCR2ZW5kaW5nU2VjdGlvbiwgJy5kcmluay1pdGVtcycpXG4gICAgdGhpcy4kaW5wdXQgPSBzZWxlY3RFbCgkdmVuZGluZ1NlY3Rpb24sICcucHV0X19tb25leScpXG4gICAgdGhpcy4kaW5wdXQuZm9jdXMoKVxuXG4gICAgY29uc3QgJG15SW5mbyA9IHNlbGVjdEVsKGRvY3VtZW50LCAnLm15LWluZm8nKVxuICAgIHRoaXMuJG15TW9uZXkgPSBzZWxlY3RFbCgkbXlJbmZvLCAnLm15bW9uZXlfX3RleHQgc3BhbicpXG4gICAgdGhpcy4kZ2V0TGlzdCA9IHNlbGVjdEVsKCRteUluZm8sICcuZ2V0LWxpc3QnKVxuICAgIHRoaXMuJHRvdGFsUHJpY2UgPSBzZWxlY3RFbCgkbXlJbmZvLCAnLnRvdGFsX190aXRsZSBzcGFuOmZpcnN0LWNoaWxkJylcbiAgfVxuXG4gIHNldHVwKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RXZlbnQoKVxuICB9XG5cbiAgc2V0RXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5wdXRJbk1vbmV5QnV0dG9uKClcbiAgICB0aGlzLnJldHVybk1vbmV5QnV0dG9uKClcbiAgICB0aGlzLnZhbmRpbmdNYWNoaW5lUGFuZWxDbGljaygpXG4gICAgdGhpcy5nZXRJdGVtc0J1dHRvbigpXG4gIH1cblxuICBtb25leUNoYW5nZXIoKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHBhcnNlSW50KHRoaXMuJGlucHV0LnZhbHVlKVxuICAgIGNvbnN0IG15TW9uZXlWYWx1ZSA9IG51bWJlckZvcm1hdHRlcih0aGlzLiRteU1vbmV5LnRleHRDb250ZW50KVxuICAgIGNvbnN0IGJhbGFuY2VWYWx1ZSA9IG51bWJlckZvcm1hdHRlcih0aGlzLiRiYWxhbmNlLnRleHRDb250ZW50KVxuXG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICBhbGVydChWQUxJRF9JTlBVVF9WQUxVRSlcbiAgICAgIHRoaXMuJGlucHV0LmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpbnB1dFZhbHVlIDw9IG15TW9uZXlWYWx1ZSAmJiBpbnB1dFZhbHVlID4gMCkge1xuICAgICAgdGhpcy4kYmFsYW5jZS50ZXh0Q29udGVudCA9IGNvbW1hRm9ybWF0dGVyKGJhbGFuY2VWYWx1ZSArIGlucHV0VmFsdWUpXG4gICAgICB0aGlzLiRteU1vbmV5LnRleHRDb250ZW50ID0gY29tbWFGb3JtYXR0ZXIobXlNb25leVZhbHVlIC0gaW5wdXRWYWx1ZSlcbiAgICAgIHRoaXMuJGlucHV0LnZhbHVlID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChWQUxJRF9NWV9NT05FWSlcbiAgICAgIHRoaXMuJGlucHV0LmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIHB1dEluTW9uZXlCdXR0b24oKTogdm9pZCB7XG4gICAgdGhpcy4kcHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5tb25leUNoYW5nZXIoKVxuICAgIH0pXG4gICAgdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgIGlmIChlLmtleSAhPT0gQUNUSU9OX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9uZXlDaGFuZ2VyKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuTW9uZXlCdXR0b24oKTogdm9pZCB7XG4gICAgdGhpcy4kcmV0dXJuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbXlNb25leVZhbHVlID0gbnVtYmVyRm9ybWF0dGVyKHRoaXMuJG15TW9uZXkudGV4dENvbnRlbnQpXG4gICAgICBjb25zdCBiYWxhbmNlVmFsdWUgPSBudW1iZXJGb3JtYXR0ZXIodGhpcy4kYmFsYW5jZS50ZXh0Q29udGVudClcbiAgICAgIGlmIChiYWxhbmNlVmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRteU1vbmV5LnRleHRDb250ZW50ID0gY29tbWFGb3JtYXR0ZXIobXlNb25leVZhbHVlICsgYmFsYW5jZVZhbHVlKVxuICAgICAgICB0aGlzLiRiYWxhbmNlLnRleHRDb250ZW50ID0gJzAnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHZhbmRpbmdNYWNoaW5lUGFuZWxDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLiR2ZW5kaW5nSXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdVTCcpIHJldHVyblxuXG4gICAgICBjb25zdCBjbGlja2VkSXRlbSA9IHRhcmdldC5jbG9zZXN0KCdidXR0b24nKVxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHNlbGVjdEVsQWxsKHRoaXMuJHNlbGVjdExpc3QsICdidXR0b24nKVxuICAgICAgY29uc3QgY2xpY2tlZEl0ZW1wcmljZSA9IHBhcnNlSW50KGNsaWNrZWRJdGVtLmRhdGFzZXQucHJpY2UpXG4gICAgICBsZXQgaXNGaXJzdENsaWNrZWQgPSBmYWxzZVxuICAgICAgY29uc3QgYmFsYW5jZVZhbHVlID0gbnVtYmVyRm9ybWF0dGVyKHRoaXMuJGJhbGFuY2UudGV4dENvbnRlbnQpXG5cbiAgICAgIGlmIChiYWxhbmNlVmFsdWUgPj0gY2xpY2tlZEl0ZW1wcmljZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2VsZWN0ZWRJdGVtcykge1xuICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5uYW1lID09PSBjbGlja2VkSXRlbS5kYXRhc2V0Lm5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjbGlja2VkSXRlbS5kYXRhc2V0LmNvdW50ID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gKFxuICAgICAgICAgICAgICBwYXJzZUludChpdGVtLmNoaWxkcmVuWzJdLnRleHRDb250ZW50KSArIDFcbiAgICAgICAgICAgICkudG9TdHJpbmcoKVxuXG4gICAgICAgICAgICB0aGlzLiRzZWxlY3RMaXN0LnByZXBlbmQoaXRlbS5wYXJlbnRFbGVtZW50KVxuICAgICAgICAgICAgaXNGaXJzdENsaWNrZWQgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGaXJzdENsaWNrZWQpIHtcbiAgICAgICAgICB0aGlzLiRzZWxlY3RMaXN0LnByZXBlbmQodGhpcy5jbGlja2VkSXRlbUdlbmVyYXRvcihjbGlja2VkSXRlbSkpXG4gICAgICAgIH1cblxuICAgICAgICBjbGlja2VkSXRlbS5kYXRhc2V0LmNvdW50ID0gKFxuICAgICAgICAgIHBhcnNlSW50KGNsaWNrZWRJdGVtLmRhdGFzZXQuY291bnQpIC0gMVxuICAgICAgICApLnRvU3RyaW5nKClcblxuICAgICAgICBpZiAoY2xpY2tlZEl0ZW0uZGF0YXNldC5jb3VudCA9PT0gJzAnKSB7XG4gICAgICAgICAgY2xpY2tlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnc29sZC1vdXQnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYmFsYW5jZS50ZXh0Q29udGVudCA9IGNvbW1hRm9ybWF0dGVyKFxuICAgICAgICAgIGJhbGFuY2VWYWx1ZSAtIGNsaWNrZWRJdGVtcHJpY2VcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChjbGlja2VkSXRlbS5kYXRhc2V0LmNvdW50ID09PSAnMCcpIHJldHVyblxuICAgICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFZBTElEX0JBTEFOQ0UpXG4gICAgICAgIHRoaXMuJGlucHV0LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2xpY2tlZEl0ZW1HZW5lcmF0b3IoaXRlbTogSFRNTEVsZW1lbnQpOiBFbGVtZW50IHtcbiAgICBjb25zdCB7IGltZywgbmFtZSwgcHJpY2UgfSA9IGl0ZW0uZGF0YXNldFxuICAgIGNvbnN0ICRsaSA9IGNyZWF0ZUVsKCdsaScpXG4gICAgJGxpLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgYCR7bmFtZX1gKVxuICAgICRsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnLCBgJHtwcmljZX1gKVxuICAgIGNvbnN0IHRlbXBsYXRlID0gYCBcbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICA8aW1nIGNsYXNzPSdpdGVtX19pbWcnIHNyYz0nJHtpbWd9Jy8+XG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzPSdpdGVtX190aXRsZSc+JHtuYW1lfTwvc3Ryb25nPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSdudW1fX2NvdW50ZXInPjE8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgXG4gICAgJGxpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpXG4gICAgcmV0dXJuICRsaVxuICB9XG5cbiAgZ2V0SXRlbXNCdXR0b24oKTogdm9pZCB7XG4gICAgdGhpcy4kZ2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IHNlbGVjdEVsQWxsKHRoaXMuJHNlbGVjdExpc3QsICdsaScpIGFzIEhUTUxMSUVsZW1lbnRbXVxuICAgICAgY29uc3QgZ2V0TGlzdCA9IHNlbGVjdEVsQWxsKHRoaXMuJGdldExpc3QsICdsaScpIGFzIEhUTUxMSUVsZW1lbnRbXVxuICAgICAgaWYgKCFzZWxlY3RMaXN0Lmxlbmd0aCkgcmV0dXJuXG5cbiAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWRJdGVtIG9mIHNlbGVjdExpc3QpIHtcbiAgICAgICAgbGV0IGlzR290ID0gZmFsc2VcbiAgICAgICAgaWYgKGdldExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAoY29uc3QgZ290SXRlbSBvZiBnZXRMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBnb3RJdGVtQ291bnQgPSBzZWxlY3RFbChnb3RJdGVtLCAnLm51bV9fY291bnRlcicpXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1Db3VudCA9IHNlbGVjdEVsKHNlbGVjdGVkSXRlbSwgJy5udW1fX2NvdW50ZXInKVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtLmRhdGFzZXQubmFtZSA9PT0gZ290SXRlbS5kYXRhc2V0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgZ290SXRlbUNvdW50LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICBwYXJzZUludChnb3RJdGVtQ291bnQudGV4dENvbnRlbnQpICtcbiAgICAgICAgICAgICAgICBwYXJzZUludChzZWxlY3RlZEl0ZW1Db3VudC50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgaXNHb3QgPSB0cnVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNHb3QpIHtcbiAgICAgICAgICAgIHRoaXMuJGdldExpc3QuYXBwZW5kKHNlbGVjdGVkSXRlbSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZ2V0TGlzdC5hcHBlbmQoc2VsZWN0ZWRJdGVtKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHNlbGVjdExpc3QuaW5uZXJIVE1MID0gbnVsbFxuXG4gICAgICBsZXQgdG90YWwgPSAwXG4gICAgICBzZWxlY3RFbEFsbCh0aGlzLiRnZXRMaXN0LCAnbGknKS5mb3JFYWNoKFxuICAgICAgICAoaXRlbTogSFRNTExJRWxlbWVudCkgPT5cbiAgICAgICAgICAodG90YWwgKz1cbiAgICAgICAgICAgIHBhcnNlSW50KHNlbGVjdEVsKGl0ZW0sICcubnVtX19jb3VudGVyJykudGV4dENvbnRlbnQpICpcbiAgICAgICAgICAgIHBhcnNlSW50KGl0ZW0uZGF0YXNldC5wcmljZSkpXG4gICAgICApXG4gICAgICB0aGlzLiR0b3RhbFByaWNlLnRleHRDb250ZW50ID0gY29tbWFGb3JtYXR0ZXIodG90YWwpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZW5kaW5nTWFjaGluZVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBWZW5kaW5nTWFjaGluZSB9IGZyb20gJy4vVmVuZGluZ01hY2hpbmUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbGFHZW5lcmF0b3IgfSBmcm9tICcuL0NvbGFHZW5lcmF0b3InXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNvbGEgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2NvbGEuc3ZnJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb29sX2NvbGEgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2Nvb2xfY29sYS5zdmcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyZWVuX2NvbGEgfSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2dyZWVuX2NvbGEuc3ZnJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvcmFuZ2VfY29sYSB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvb3JhbmdlX2NvbGEuc3ZnJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2aW9sZXRfY29sYSB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdmlvbGV0X2NvbGEuc3ZnJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB5ZWxsb3dfY29sYSB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMveWVsbG93X2NvbGEuc3ZnJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvX2ltZyB9IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvTG9nb19pbWcucG5nJ1xuIiwiZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJ1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZXMnXG4iLCJjb25zdCBBQ1RJT05fS0VZID0gJ0VudGVyJ1xuXG4vLyBWQUxJREFURV9NRVNTQUdFXG5jb25zdCBWQUxJRF9JTlBVVF9WQUxVRSA9ICfsnoXquIjslaHsnYQg7J6F66Cl7ZW07KO87IS47JqULidcbmNvbnN0IFZBTElEX01ZX01PTkVZID0gJ+yGjOyngOq4iOydtCDrtoDsobHtlanri4jri6QuJ1xuY29uc3QgVkFMSURfQkFMQU5DRSA9ICfsnpTslaHsnbQg67aA7KGx7ZWp64uI64ukLidcblxuLy8gQVBJX0ZFVENIX01FU1NBR0VcbmNvbnN0IEZFVENIX0JBU0VfVVJMID0gJy4vZGF0YS9kYXRhLmpzb24nXG5jb25zdCBGRVRDSF9TRVJWRVJfRVJST1JfTUVTU0FHRSA9ICfshJzrsoTsmYDsnZgg7Jew6rKw7J20IOu2iOyViOygle2VqeuLiOuLpCEnXG5jb25zdCBGRVRDSF9GQUlMX01FU1NBR0UgPSAn7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpCEnXG5cbmV4cG9ydCB7XG4gIEFDVElPTl9LRVksXG4gIFZBTElEX0lOUFVUX1ZBTFVFLFxuICBWQUxJRF9NWV9NT05FWSxcbiAgVkFMSURfQkFMQU5DRSxcbiAgRkVUQ0hfQkFTRV9VUkwsXG4gIEZFVENIX1NFUlZFUl9FUlJPUl9NRVNTQUdFLFxuICBGRVRDSF9GQUlMX01FU1NBR0Vcbn1cbiIsImltcG9ydCB7IENvbGFHZW5lcmF0b3IsIFZlbmRpbmdNYWNoaW5lIH0gZnJvbSAnQGNvbXBvbmVudHMnXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJ1xuXG5jb25zdCBjb2xhR2VuZXJhdG9yID0gbmV3IENvbGFHZW5lcmF0b3IoKVxuY29uc3QgdmVuZGluZ01hY2hpbmUgPSBuZXcgVmVuZGluZ01hY2hpbmUoKVxuXG4vLyBhd2FpdCBjb2xhR2VuZXJhdG9yLnNldHVwKClcbmNvbGFHZW5lcmF0b3Iuc2V0dXAoKVxudmVuZGluZ01hY2hpbmUuc2V0dXAoKVxuIiwiZXhwb3J0IGNvbnN0IHNlbGVjdEVsID0gKFxuICBzY29wZTogRWxlbWVudCB8IERvY3VtZW50ID0gZG9jdW1lbnQsXG4gIHNlbGVjdG9yOiBzdHJpbmdcbik6IGFueSA9PiB7XG4gIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxufVxuZXhwb3J0IGNvbnN0IHNlbGVjdEVsQWxsID0gKFxuICBzY29wZTogRWxlbWVudCB8IERvY3VtZW50ID0gZG9jdW1lbnQsXG4gIHNlbGVjdG9yOiBzdHJpbmdcbik6IEVsZW1lbnRbXSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRWwgPSAodGFnTmFtZTogc3RyaW5nKTogRWxlbWVudCA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGcmFnID0gKCk6IERvY3VtZW50RnJhZ21lbnQgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG59XG5cbi8vc2NvcGUgPSBub2RlXG4vL3NlbGVjdG9yID0gc3RyaW5nXG4vL3RhZ05hbWUgPSBzdHJpbmdcbiIsIi8vIOyEuOyekOumrOuniOuLpCDsvaTrp4hcbmV4cG9ydCBjb25zdCBjb21tYUZvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgna28nKS5mb3JtYXQodmFsdWUpLnRvU3RyaW5nKClcbn1cblxuLy8g7Iir7J6Q66eMIO2VhO2EsCAobnVtYmVyLCBzdHJpbmcg7ISe7J246rGw7JeQ66eMIOyCrOyaqSlcbmV4cG9ydCBjb25zdCBudW1iZXJGb3JtYXR0ZXIgPSAodmFsdWU6IGFueSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKCcsJywgJycpKVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kb20nXG5leHBvcnQgKiBmcm9tICcuL2Zvcm1hdHRlcidcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyg1MTkpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MTcpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9