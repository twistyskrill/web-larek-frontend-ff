import { ICard } from "../../types";
import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

export class Card extends Component<ICard> {
  protected title?: HTMLElement;
  protected image?: HTMLImageElement;
  protected category?: HTMLElement;
  protected description?: HTMLElement;
  protected price?: HTMLElement;
  protected button?: HTMLButtonElement;

  constructor(container: HTMLElement, events: IEvents) {
    super(container);
    this.title = ensureElement('.card__title', this.container);
    this.image = ensureElement('.card__image', this.container) as HTMLImageElement;
    this.category = ensureElement('.card__category', this.container);
    this.description = this.container.querySelector('.card__text');
    this.price = ensureElement('.card__price', this.container);
    this.button = this.container.querySelector('.gallery__item') as HTMLButtonElement;
  }

  set Title(value: string) {
    this.setText(this.title, value);
  }

  set Image(value: string) {
    this.setImage(this.image, value);
  }

  set Category(value: string) {
    this.setText(this.category, value);
  }

  set Description(value: string) {
    this.setText(this.description, value);
  }

  set Price(value: string) {
    this.setText(this.price, value)
  }
}