import * as types from '../constants/ActionTypes';
const initialState = {
   viewEditUser:true,
   checkUserThanhToan:false,
}
const userReducer = (state = initialState, action)=> {
  switch (action.type) {
    case types.SET_VIEW_EDIT_USER:
      return {
          ...state,viewEditUser:!state.viewEditUser
        };
    case types.CHECK_USER_ORDERS:
      return {
          ...state,checkUserThanhToan:!state.checkUserThanhToan
        };
    case types.CHANGE_PASSWORD:
      return {
          ...state,
        };
    default:
      return state
  }
}
export default userReducer