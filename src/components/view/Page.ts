
import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

interface IPage {
  catalog: HTMLElement[];
  counter: number;

}

export class Page extends Component<IPage> {
  protected pageCatalog: HTMLElement;
  protected basketCounter: HTMLElement;
  protected pageWrapper: HTMLElement;
  protected basketButton: HTMLButtonElement;

  constructor(container: HTMLElement, protected events: IEvents) {
    super(container);
    this.pageCatalog = ensureElement('.gallery', this.container)
    this.basketCounter = ensureElement('.header__basket-counter', this.container)
    this.pageWrapper = ensureElement('.page__wrapper', this.container) 
    this.basketButton = ensureElement('.header__basket', this.container) as HTMLButtonElement

    this.basketButton.addEventListener('click', () => {
      this.events.emit('basket:open')
    })
  }

  set catalog(items: HTMLElement[]) {
    this.pageCatalog.replaceChildren(...items);
  }

  set counter(value: number) {
    this.setText(this.basketCounter, value)
  }

  set locked(value: boolean) {
    this.toggleClass(this.pageWrapper, 'page__wrapper_locked', value)
  }
}