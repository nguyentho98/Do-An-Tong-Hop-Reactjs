import * as types from '../constants/ActionTypes';
const initialState = {
   dataOrders:[],
   postOrders:[]
}
const ordersReducer = (state = initialState, action)=> {
  switch (action.type) {
    case types.GET_ORDERS_FAILURE:
      return {};
    case types.GET_ORDERS_SUCCESS:
      return {
        dataOrders: action.orders
      };
    case types.GET_ORDERS_REQUEST:
      return {};
    case types.POST_ORDERS_FAILURE:
      return {};
    case types.POST_ORDERS_SUCCESS:
      return {
        postOrders: action.orders
      };
    case types.POST_ORDERS_FAILURE:
      return {};
    default:
      return state
  }
}
export default ordersReducer