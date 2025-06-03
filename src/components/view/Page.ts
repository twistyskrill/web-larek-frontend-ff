import { ICard } from "../../types";
import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

interface IPage {
  catalog: HTMLElement[];
  counter: number;
}

export class Page extends Component<IPage> {
  protected pageCatalog: HTMLElement;
  protected busketCounter: HTMLElement;

  constructor(container: HTMLElement, events: IEvents) {
    super(container);
    this.pageCatalog = ensureElement('.gallery', this.container)
    this.busketCounter = ensureElement('.header__basket-counter', this.container)
  }

  set catalog(items: HTMLElement[]) {
    this.pageCatalog.replaceChildren(...items);
  }
}