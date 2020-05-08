import * as types from '../constants/ActionTypes';
export function getDataProduct() {
  return {
    type: types.FETCHING_DATAPRODUCT
  }
}

export function getDataSuccess(data) {
  return {
    type: types.FETCHING_DATAPRODUCT_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: types.FETCHING_DATAPRODUCT_FAILURE
  }
}
export function fetchDataProduct() {
  return (dispatch) => {
    dispatch(getDataProduct())
    fetch('http://localhost:1337/Products', {
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {    
          dispatch(getDataSuccess(json))  
      })
      .catch((err) => console.log('err:', err))
  }
}