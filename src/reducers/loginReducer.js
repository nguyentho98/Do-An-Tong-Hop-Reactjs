import * as types from '../constants/ActionTypes';

let user = JSON.parse(localStorage.getItem('USER'));
const initialState = user ? { loggedIn: true, user } : {loggedIn: false};

const loginReducer = (state = initialState, action) =>{
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case types.LOGIN_FAILURE:
      return {};
    case types.LOGOUT:
      return {
        loggedIn: false,
      };
    case types.EDIT_USER_REQUEST:
      return {
          ...state,
      }
    case types.EDIT_USER_SUCCESS:
        return {
            ...state,
            user:action.data
        }
    case types.EDIT_USER_FAILURE:
        return {
            ...state,
        }
    default:
      return state
  }
}
export default loginReducer