import { ICard } from "../../types";
import { IEvents } from "../base/events";

export class BasketModel {
  items: ICard[] = [];
  total: number;
  itemsId: string[] = []
  
  constructor(events: IEvents) {}

  addItems(card: ICard) {
    this.items.push(card);
  }

  removeItem(cardId: string) {
    this.items = this.items.filter(item => item.id !== cardId);
  }

  getItems(): ICard[] {
    return this.items;
  }

  getItemsId(): string[] {
    this.items.forEach((item) => {
      this.itemsId.push(item.id)
    })
    return this.itemsId
  }

  getTotalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  clearBasket() {
    this.items = [];
  }

  isEmpty(): boolean {
    return this.items ? false : true;
  }

  getTotalEmount(): number {
    return this.items.length
  }
}