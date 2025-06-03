import './scss/styles.scss';
import { API_URL } from './utils/constants';
import { AppApi } from './components/base/AppApi';
import { CatalogModel } from './components/model/CatalogModel';
import { EventEmitter } from './components/base/events';
import { Page } from './components/view/Page';
import { Card } from './components/view/Card';
import { cloneTemplate } from './utils/utils';

const events = new EventEmitter()
const api = new AppApi(API_URL);
const catalog = new CatalogModel(events)
const page = new Page(document.querySelector('.page'), events)
const cardTemp = document.querySelector('#card-catalog')


api.getCards()
  .then(cards => {
    catalog.setCatalog(cards.items)
  })
  .catch(err => console.error(err))

events.on('catalog:changed', () => {
  const itemsHTMLArray = catalog.getCatalog().map(item => new Card(cloneTemplate(cardTemp as HTMLTemplateElement), events).render(item))
  console.log(itemsHTMLArray)
  page.render({
    catalog: itemsHTMLArray,
    counter: 1
  })
})
