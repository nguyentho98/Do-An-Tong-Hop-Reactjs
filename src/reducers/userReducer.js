import * as types from '../constants/ActionTypes';
const initialState = {
   viewEditUser:true,
}
const userReducer = (state = initialState, action)=> {
  switch (action.type) {
    case types.SET_VIEW_EDIT_USER:
      return {
          ...state,viewEditUser:false
        };
    default:
      return state
  }
}
export default userReducer