import * as types from '../constants/ActionTypes';
const initialState = {
   dataRecharge:[],
}
const rechargeReducer = (state = initialState, action)=> {
  switch (action.type) {
    case types.GET_ORDERS_REQUEST:
      return {
        ...state, dataRecharge:[]
      };
    case types.GET_RECHARGE_SUCCESS:
        
      return {
        ...state,
        dataRecharge: action.recharge
      };
    case types.GET_RECHARGE_FAILURE:
      return {
        ...state, dataRecharge:[]
      };
    default:
      return state
  }
}
export default rechargeReducer