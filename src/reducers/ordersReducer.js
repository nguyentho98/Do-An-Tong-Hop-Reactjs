import * as types from '../constants/ActionTypes';
const initialState = {
   dataOrders:[],
   dataOrderDetail:[],
   postOrders:[],
   stateViewOrder:true,
}
const ordersReducer = (state = initialState, action)=> {
  switch (action.type) {
    case types.GET_ORDERS_FAILURE:
      return {
        ...state, dataOrders:[]
      };
    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        dataOrders: action.orders
      };
    case types.GET_ORDERS_REQUEST:
      return {
        ...state, dataOrders:[]
      };
    case types.GET_ORDERDETAIL_FAILURE:
      return {
        ...state, dataOrderDetail:[]
      };
    case types.GET_ORDERDETAIL_SUCCESS:
      console.log(action.orderDetail);  
      return {
        ...state,
        dataOrderDetail: action.orderDetail
      };
    case types.GET_ORDERDETAIL_REQUEST:
      return {
        ...state, dataOrderDetail:[]
      };
    case types.STATE_VIEW_ORDERDETAIL:
      return {
        ...state, stateViewOrder:!state.stateViewOrder
      };  
    case types.POST_ORDERS_FAILURE:
      return {...state};
    case types.POST_ORDERS_SUCCESS:
      return {
        ...state,
        postOrders: action.orders
      };
    case types.POST_ORDERS_FAILURE:
      return {
        ...state,
      };
    default:
      return state
  }
}
export default ordersReducer