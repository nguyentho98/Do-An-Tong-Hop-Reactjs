import * as types from '../constants/ActionTypes';

const alertReducer = (state = {}, action)=> {
  switch (action.type) {
    case types.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case types.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case types.CLEAR:
      return {};
    default:
      return state
      
  }
}
export default alertReducer