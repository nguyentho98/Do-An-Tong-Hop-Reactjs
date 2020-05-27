import * as types from '../constants/ActionTypes';
import * as action from './alertAction';
import { history } from '../reducers/history';
import axios from 'axios';
export function requestGetOrders() {
  return {
    type: types.GET_ORDERS_REQUEST,
  }
}

export function successGetOrders(orders) {
  return {
    type: types.GET_ORDERS_SUCCESS,
    orders
  }
}

export function failureGetOrders() {
  return {
    type: types.LOGIN_FAILURE,
  }
}
export function getOrders() {
  return (dispatch) => {
    dispatch(requestGetOrders())
    axios
    .get('http://localhost:5000/api/orders')
    .then(response => {
      // Handle success.
        dispatch(successGetOrders(response.data))  
    })
    .catch(error =>{
        console.log(error);
    })
  }
}
export function requestPostOrders() {
  return {
    type: types.POST_ORDERS_REQUEST,
  }
}

export function successPostOrders(order) {
  return {
    type: types.POST_ORDERS_SUCCESS,
    order
  }
}

export function failurePostOrders() {
  return {
    type: types.POST_ORDERS_FAILURE,
  }
}
export function postOrders(order) {
  console.log("xin chao");
  return (dispatch) => {
    dispatch(requestPostOrders())
    axios
    .post('http://localhost:5000/api/orders',{
      total:order.total,
      payments:order.payments,
      CusID:order.CusID,
      DisID:order.DisID,
      status:order.status
    }).then(response => {
      // Handle success.
      console.log("xin chao"+JSON.stringify(response.data));
      dispatch(successPostOrders(response.data))  
      
    })
    .catch(error =>{
        console.log(error);
    })
  }
}
