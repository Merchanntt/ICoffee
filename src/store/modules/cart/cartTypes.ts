export interface IItemsData {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ICartState {
  items: IItemsData[];
}