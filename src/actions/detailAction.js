import * as types from '../constants/ActionTypes';
export function getDetailRequest() {
  return {
    type: types.GETDETAIL_REQUEST
  }
}

export function getDetailSuccess(data,quantity) {
  return {
    type: types.GETDETAIL_SUCCESS,
    data
  }
}

export function getDetailFailure() {
  return {
    type: types.GETDETAIL_FAILURE
  }
}
export function fetchDetail(id) {
  return (dispatch) => {
    dispatch(getDetailRequest())
    fetch('http://localhost:1337/Products/'+id, {
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {       
        
          dispatch(getDetailSuccess(json))  
      })
      .catch((err) => console.log('err:', err))
  }
}