import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

interface IBasket {
  basketItems: HTMLElement[], 
  totalPrice: number,
  orderButton: HTMLButtonElement 
}

export class Basket extends Component<IBasket> {
  protected _basketItems: HTMLElement;
  protected _totalPrice: HTMLElement;
  protected _orderButton: HTMLButtonElement;

  constructor(container: HTMLElement, protected events: IEvents) {
    super(container)

    this._basketItems = ensureElement('.basket__list', this.container)
    this._totalPrice = this.container.querySelector('.basket__price')
    this._orderButton = this.container.querySelector('.basket__button') as HTMLButtonElement;

    this._orderButton.addEventListener('click', () => {
        this.events.emit('order:start')
    })

  }

  set basketItems(items: HTMLElement[]) {
    items.forEach((item, index) => {
        const indexItem = item.querySelector('.basket__item-index');
        indexItem.textContent = String(index + 1)
    })
    this._basketItems.replaceChildren(...items);
  }

  set totalPrice(price: number) {
    this.setText(this._totalPrice, price + ' синапсов')
    //для данила
    if (price <= 0) {
        this.setDisabled(this._orderButton, true)
    }
    //
  }
}