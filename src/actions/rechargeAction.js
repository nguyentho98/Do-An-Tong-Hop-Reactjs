import * as types from '../constants/ActionTypes';
import axios from 'axios';
export function requestGetRecharge() {
  return {
    type: types.GET_RECHARGE_REQUEST,
  }
}

export function successGetRecharge(recharge) {
  return {
    type: types.GET_RECHARGE_SUCCESS,
    recharge
  }
}

export function failureGetRecharge() {
  return {
    type: types.GET_RECHARGE_FAILURE,
  }
}
export function getRecharge(id) {
  return (dispatch) => {
    dispatch(requestGetRecharge())
    axios
    .get('http://doanekko.com:8080/public/recharges/'+id)
    .then(response => {
      // Handle success.
        dispatch(successGetRecharge(response.data))  
    })
    .catch(error =>{
        console.log(error);
    })
  }
}