import * as types from '../constants/ActionTypes';
export function actAddToLove(product) {
    return {
      type: types.ADD_TO_LOVE,
      product
    }
  }
  export function actDeleteProductToLove(product) {
    return {
      type: types.DELETE_PRODUCT_TO_LOVE,
      product,
    }
  }