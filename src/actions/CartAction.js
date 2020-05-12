import * as types from '../constants/ActionTypes';
import axios from 'axios';
export function actAddToCart(product,quantity) {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
}
export function actRemoveProductToCart(product) {
  return {
    type: types.DELETE_PRODUCT_TO_CART,
    product,
  }
}
export function actUpdateProductToCart(product,quantity) {
  return {
    type: types.UPDATE_PRODUCT_TO_CART,
    product,
    quantity
  }
}

export function requestMaGG() {
  return {
    type: types.GETMAGG_REQUEST,
  }
}

export function successMaGG(data) {
  return {
    type: types.GETMAGG_SUCCESS,
    data
  }
}

export function failureMaGG(error) {
  return {
    type: types.GETMAGG_FAILURE,
    error
  }
}
export function fetchDataMaGG() {
  return (dispatch) => {
    dispatch(requestMaGG())
    fetch('http://localhost:1337/Giam-Gias', {
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {    
          console.log(json);
          dispatch(successMaGG(json))  
      })
      .catch((err) => console.log('err:', err))
  }
}

export function actThongTinUser() {
  return {
    type: types.STATUS_THONG_TIN_USER
  }
}
export function actSubThongTinUser() {
  return {
    type: types.STATE_THONG_TIN_USER
  }
}
export function actLichSuDonHang() {
  return {
    type: types.STATUS_LICHSUDONHANG
  }
}
export function actLichSuGiaoDich() {
  return {
    type: types.STATUS_LICHSUGIAODICH
  }
}
export function actSanPhamYeuThich() {
  return {
    type: types.STATUS_SAN_PHAM_YEU_THICH
  }
}

export function fetchSendEmailUser() {
  return {
    type: types.SEND_EMAIL_USER
  }
}
export function actSendEmailUser() {
  return (dispatch) => {
    
    axios
    .post(`http://localhost:1337/auth/send-email-confirmation`, {
      email: 'nxtho0109@gmail.com',
    })
    .then(response => {
      // Handle success.
      dispatch(fetchSendEmailUser())
      console.log('Your user received an email');
    })
    .catch(error => {
      // Handle error.
      console.err('An error occured:');
    });
  }
}
