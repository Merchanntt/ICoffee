import { IItemsData } from "./cartTypes";

export function addProductsToCart(product: IItemsData) {
  return {
    type: 'ADD_PRODUCTS_TO_CART',
    payload: {
      product
    }
  }
}

export function RemoveProductsToCart(product: IItemsData) {
  return {
    type: 'REMOVE_PRODUCTS_TO_CART',
    payload: {
      product
    }
  }
}