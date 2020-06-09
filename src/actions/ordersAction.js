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
export function getOrders(id) {
  return (dispatch) => {
    dispatch(requestGetOrders())
    axios
    .get('http://doanekko.com:8080/public/orders/'+id)
    .then(response => {
      // Handle success.
        dispatch(successGetOrders(response.data))  
    })
    .catch(error =>{
        console.log(error);
    })
  }
}
export function requestGetOrderDetail() {
  return {
    type: types.GET_ORDERDETAIL_REQUEST,
  }
}

export function successGetOrderDetail(orderDetail) {
  return {
    type: types.GET_ORDERDETAIL_SUCCESS,
    orderDetail
  }
}

export function failureGetOrderDetail() {
  return {
    type: types.GET_ORDERDETAIL_FAILURE,
  }
}
export function getOrderDetail(id) {
  return (dispatch) => {
    dispatch(requestGetOrderDetail())
    axios
    .get('http://doanekko.com:8080/public/orderdetails/'+2)
    .then(response => {
      // Handle success.
        dispatch(successGetOrderDetail(response.data))  
    })
    .catch(error =>{
        console.log(error);
    })
  }
}
export function actStateViewOrderDetail() {
  return {
    type: types.STATE_VIEW_ORDERDETAIL,
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
