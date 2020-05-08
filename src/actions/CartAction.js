import * as types from '../constants/ActionTypes';
export function actAddToCart(product,quantity) {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
}
export function actRemoveProductToCart(product) {
  return {
    type: types.DELETE_PRODUCT_TO_CART,
    product,
  }
}
export function actUpdateProductToCart(product,quantity) {
  return {
    type: types.UPDATE_PRODUCT_TO_CART,
    product,
    quantity
  }
}