import * as types from '../constants/ActionTypes';
import * as action from './alertAction';
import { history } from '../reducers/history';
import axios from 'axios';
export function requestOrders(user) {
  return {
    type: types.GET_ORDERS_REQUEST,
    user
  }
}

export function successOrders(orders) {
  return {
    type: types.GET_ORDERS_SUCCESS,
    orders
  }
}

export function failureOrders(error) {
  return {
    type: types.LOGIN_FAILURE,
    error
  }
}
export function getOrders() {
  return (dispatch) => {
    dispatch(requestOrders())
    axios
    .get('http://localhost:5000/api/orders')
    .then(response => {
      // Handle success.
        dispatch(successOrders(response.data))  
    })
    .catch(error =>{
        console.log(error);
    })
  }
}

