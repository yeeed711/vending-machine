import {
  ACTION_KEY,
  VALID_BALANCE,
  VALID_INPUT_VALUE,
  VALID_MY_MONEY
} from '@constants'
import {
  createEl,
  selectEl,
  selectElAll,
  commaFormatter,
  numberFormatter
} from '@utils'

class VendingMachine {
  $vendingItems: Element
  $putBtn: Element
  $getBtn: Element
  $returnBtn: Element
  $balance: Element
  $selectList: Element
  $input: HTMLInputElement
  $myMoney: Element
  $getList: Element
  $totalPrice: Element

  constructor() {
    const $vendingSection = selectEl(document, '.vending-machine')
    this.$vendingItems = selectEl($vendingSection, '.vending-items')
    this.$putBtn = selectEl($vendingSection, '.put__btn')
    this.$getBtn = selectEl($vendingSection, '.get__btn')
    this.$returnBtn = selectEl($vendingSection, '.return__btn')
    this.$balance = selectEl($vendingSection, '.buy-balance span:first-child')
    this.$selectList = selectEl($vendingSection, '.drink-items')
    this.$input = selectEl($vendingSection, '.put__money')
    this.$input.focus()

    const $myInfo = selectEl(document, '.my-info')
    this.$myMoney = selectEl($myInfo, '.mymoney__text span')
    this.$getList = selectEl($myInfo, '.get-list')
    this.$totalPrice = selectEl($myInfo, '.total__title span:first-child')
  }

  setup(): void {
    this.setEvent()
  }

  setEvent(): void {
    this.putInMoneyButton()
    this.returnMoneyButton()
    this.vandingMachinePanelClick()
    this.getItemsButton()
  }

  moneyChanger(): void {
    const inputValue = parseInt(this.$input.value)
    const myMoneyValue = numberFormatter(this.$myMoney.textContent)
    const balanceValue = numberFormatter(this.$balance.textContent)

    if (!inputValue) {
      alert(VALID_INPUT_VALUE)
      this.$input.focus()
      return
    }

    if (inputValue <= myMoneyValue && inputValue > 0) {
      this.$balance.textContent = commaFormatter(balanceValue + inputValue)
      this.$myMoney.textContent = commaFormatter(myMoneyValue - inputValue)
      this.$input.value = null
    } else {
      alert(VALID_MY_MONEY)
      this.$input.focus()
      return
    }
  }

  putInMoneyButton(): void {
    this.$putBtn.addEventListener('click', () => {
      this.moneyChanger()
    })
    this.$input.addEventListener('keyup', e => {
      if (e.key !== ACTION_KEY) {
        return
      } else {
        this.moneyChanger()
      }
    })
  }

  returnMoneyButton(): void {
    this.$returnBtn.addEventListener('click', () => {
      const myMoneyValue = numberFormatter(this.$myMoney.textContent)
      const balanceValue = numberFormatter(this.$balance.textContent)
      if (balanceValue === 0) {
        return
      } else {
        this.$myMoney.textContent = commaFormatter(myMoneyValue + balanceValue)
        this.$balance.textContent = '0'
      }
    })
  }

  vandingMachinePanelClick(): void {
    this.$vendingItems.addEventListener('click', e => {
      const target = e.target as HTMLElement
      if (target.tagName === 'UL') return

      const clickedItem = target.closest('button')
      const selectedItems = selectElAll(this.$selectList, 'button')
      const clickedItemprice = parseInt(clickedItem.dataset.price)
      let isFirstClicked = false
      const balanceValue = numberFormatter(this.$balance.textContent)

      if (balanceValue >= clickedItemprice) {
        for (const item of selectedItems) {
          if (item.parentElement.dataset.name === clickedItem.dataset.name) {
            if (clickedItem.dataset.count === '0') {
              return
            }
            item.children[2].textContent = (
              parseInt(item.children[2].textContent) + 1
            ).toString()

            this.$selectList.prepend(item.parentElement)
            isFirstClicked = true
            break
          }
        }

        if (!isFirstClicked) {
          this.$selectList.prepend(this.clickedItemGenerator(clickedItem))
        }

        clickedItem.dataset.count = (
          parseInt(clickedItem.dataset.count) - 1
        ).toString()

        if (clickedItem.dataset.count === '0') {
          clickedItem.classList.add('sold-out')
        }

        this.$balance.textContent = commaFormatter(
          balanceValue - clickedItemprice
        )
      } else if (clickedItem.dataset.count === '0') return
      else {
        alert(VALID_BALANCE)
        this.$input.focus()
      }
    })
  }

  clickedItemGenerator(item: HTMLElement): Element {
    const { img, name, price } = item.dataset
    const $li = createEl('li')
    $li.setAttribute('data-name', `${name}`)
    $li.setAttribute('data-price', `${price}`)
    const template = ` 
        <button>
          <img class='item__img' src='${img}'/>
            <strong class='item__title'>${name}</strong>
          <span class='num__counter'>1</span>
        </button>
        `
    $li.insertAdjacentHTML('beforeend', template)
    return $li
  }

  getItemsButton(): void {
    this.$getBtn.addEventListener('click', () => {
      const selectList = selectElAll(this.$selectList, 'li') as HTMLLIElement[]
      const getList = selectElAll(this.$getList, 'li') as HTMLLIElement[]
      if (!selectList.length) return

      for (const selectedItem of selectList) {
        let isGot = false
        if (getList.length > 0) {
          for (const gotItem of getList) {
            const gotItemCount = selectEl(gotItem, '.num__counter')
            const selectedItemCount = selectEl(selectedItem, '.num__counter')

            if (selectedItem.dataset.name === gotItem.dataset.name) {
              gotItemCount.textContent =
                parseInt(gotItemCount.textContent) +
                parseInt(selectedItemCount.textContent)
              isGot = true
              break
            }
          }
          if (!isGot) {
            this.$getList.append(selectedItem)
          }
        } else {
          this.$getList.append(selectedItem)
        }
      }

      this.$selectList.innerHTML = null

      let total = 0
      selectElAll(this.$getList, 'li').forEach(
        (item: HTMLLIElement) =>
          (total +=
            parseInt(selectEl(item, '.num__counter').textContent) *
            parseInt(item.dataset.price))
      )
      this.$totalPrice.textContent = commaFormatter(total)
    })
  }
}

export default VendingMachine
