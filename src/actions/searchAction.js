import * as types from '../constants/ActionTypes';
export function getSearchRequest() {
    return {
        type: types.GET_SEARCH_REQUEST
    }
}
export function getSearchSuccess(data) {
  return {
    type: types.GET_SEARCH_SUCCESS,
    data
  }
}

export function getSearchFailure() {
  return {
    type: types.GET_SEARCH_FAILURE
  }
}
export function fetchSearch(category_id,page,limit) {
  return (dispatch) => {
    dispatch(getSearchRequest())
    fetch('http://doanekko.com:8080/public/products/category/search?category_id=' + category_id + '&page='+page +'&limit='+limit, {
      method: 'GET',
        }).then(response => {
              return response.json()
        }).then(json => {       
            console.log("xin chao"+json);
          dispatch(getSearchSuccess(json))  
      })
      .catch((err) => console.log('err:', err))
  }
}