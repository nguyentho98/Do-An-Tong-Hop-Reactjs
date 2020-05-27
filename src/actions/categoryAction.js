import * as types from '../constants/ActionTypes';
export function getCategoryRequest() {
  return {
    type: types.GET_CATEGORY_REQUEST
  }
}

export function getCategorySuccess(data) {
  return {
    type: types.GET_CATEGORY_SUCCESS,
    data
  }
}

export function getCategoryFailure() {
  return {
    type: types.GET_CATEGORY_FAILURE
  }
}
export function fetchCategory() {
  return (dispatch) => {
    dispatch(getCategoryRequest())
    fetch('http://doanekko.com:8080/public/categories', {
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {       
         
          dispatch(getCategorySuccess(json))  
      })
      .catch((err) => console.log('err:', err))
  }
}
