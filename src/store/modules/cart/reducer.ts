import { Reducer } from "redux";
import produce from 'immer'
import { ICartState } from "./cartTypes";

const INITIAL_STATE: ICartState = {
  items: []
}

const Cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCTS_TO_CART': {
        const { product } = action.payload;

        draft.items.push(product)
        
        break
      };

      case 'REMOVE_PRODUCTS_TO_CART': {
        const { product } = action.payload;

        draft.items.splice(state.items.indexOf(product.id), 1);

        break
      };

      default: {
        return draft;
      };
    }
  })
}

export default Cart;