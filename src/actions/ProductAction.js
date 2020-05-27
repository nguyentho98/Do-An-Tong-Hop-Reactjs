import * as types from '../constants/ActionTypes';
export function getDataProduct() {
  return {
    type: types.FETCHING_DATAPRODUCT
  }
}

export function getLimitDataSuccess(data) {
  return {
    type: types.GET_LIMITDATAPRODUCT_SUCCESS,
    data,
  }
}
export function getAllDataSuccess(data) {
  return {
    type: types.GET_ALLDATAPRODUCT_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: types.FETCHING_DATAPRODUCT_FAILURE
  }
}
export function getLimitDataProduct(page,limit) {
  return (dispatch) => {
    dispatch(getDataProduct())
    fetch('http://doanekko.com:8080/public/products?page='+page+'&limit='+limit, {
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {    
          console.log(json);
          dispatch(getLimitDataSuccess(json))  
      })
      .catch((err) => console.log('err:', err))
  }
}
export function getAllDataProduct() {
  return (dispatch) => {
    dispatch(getDataProduct())
    fetch('http://doanekko.com:8080/public/products', {
    
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {    
          dispatch(getAllDataSuccess(json))  
      })
      .catch((err) => console.log('err:', err))
  }
}
export function actLimit() {
  return {
    type: types.ACT_PRODUCT_LIMIT
  }
}