import { Api } from './api'; 
import { ICard } from '../../types/index';
import { IForm } from '../../types/index';

interface ICardServer  {
  total: number,
  items: ICard[]
}

export class AppApi extends Api {

  getCards(): Promise<ICardServer> {
    return this.get<ICardServer>('/product/')
  }

  getCard(id: string): Promise<ICard> {
    return this.get<ICard> ('/product/' + id)
  }

  sendOrder(orderInfo: IForm): Promise<IForm> {
    return this.post<IForm> ('/order/', orderInfo)
  }
}

