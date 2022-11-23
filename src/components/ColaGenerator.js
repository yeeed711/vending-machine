import { fetchData } from '../api/fetchData.js';
import { createEl, createFrag, selectEl } from '../utils/dom.js';

class ColaGenerator {
    constructor() {
        this.$itemList = selectEl(document, '.vending-items');
    }

    async setup() {
        this.fetch();
    }

    async fetch() {
        const data = await fetchData();
        this.render(data);
    }

    render(data) {
        // console.log(data, 'render');
        const $frag = createFrag();

        data.forEach((item) => {
            const $li = createEl('li');
            const template = `
          <button
          type='button'
          class='item__btn'
          data-name='${item.name}'
          data-count='${item.count}'
          data-price='${item.price}'
          data-img='${item.img}'>
            <img src='${item.img}' alt=''/>
            <strong class='item__title'>${item.name}</strong>
            <span class='price'>${item.price}원</span>
          </button>
          `;
            $li.insertAdjacentHTML('beforeend', template);
            $frag.appendChild($li);
        });
        this.$itemList.appendChild($frag);
    }
}

export default ColaGenerator;
