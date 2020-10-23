export interface IItemsData {
  id: number;
  image: string;
  name: string;
  price: string;
  quantity: number;
}

export interface ICartState {
  items: IItemsData[];
}