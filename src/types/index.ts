export interface ICard {
  id: string,
  description: string;
  image: string,
  title: string,
  category: string,
  price: number,
}

export interface IForm {
  payment: string,
  address: string,
  email: string,
  phone: string,
  total: number,
  items: string[]
}