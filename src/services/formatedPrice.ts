import { IItemsData } from "../store/modules/cart/cartTypes";

export default class PricesHandler {
  FormatedPrice(price: number) {
      const real = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(price))
    
    return real
  };

  TotalPrice(coffeeList: IItemsData[]) {
    const pricesArray = coffeeList.map(item => item.price)

    const total = pricesArray.reduce((total, number) => total + number, 0)

    const totalFormated = this.FormatedPrice(total)
    const totalWithDelivery = this.FormatedPrice(total + 7);

    return [totalFormated, totalWithDelivery];
  };
}
