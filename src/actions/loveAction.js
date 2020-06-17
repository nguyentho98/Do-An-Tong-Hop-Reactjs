import * as types from '../constants/ActionTypes';
// export function actAddToLove(product) {
//     return {
//       type: types.ADD_TO_LOVE,
//       product
//     }
//   }
  export function actDeleteProductToLove(id) {
    return {
      type: types.DELETE_PRODUCT_TO_LOVE,
      id,
    }
  }
  export function successGetFavoutite(data) {
    return {
      type: types.GET_FAVOURITE_SUCCESS,
      data
    }
  }
  export function getDataFavoutite(id) {
    return (dispatch) => {
      fetch('http://doanekko.com:8080/public/favourites/'+id, {
        method: 'GET',
          }).then(response => {
                return response.json()
          }).then(json => {    
            console.log(json);
            dispatch(successGetFavoutite(json))  
        })
        .catch((err) => console.log('err:', err))
    }
  }

  export function deleteFavoutite(id) {
    console.log(id);
    return (dispatch) => {
      fetch('http://doanekko.com:8080/public/favourites/'+id, {
        method: 'DELETE',
          }).then(response => {
                return response.json()
          }).then(json => {    
              console.log(json);
        })
        .catch((err) => console.log('err:', err))
    }
  }
  export function successPostFavoutite(item) {
    return {
      type: types.POST_FAVOURITE_SUCCESS,
      item
    }
  }
  export function postLove(product,customer) {
    console.log(product);
  return (dispatch) => {
    fetch('http://doanekko.com:8080/public/favourites/add' ,{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
       },
      method: 'POST',
      credentials: "same-origin",
        body:JSON.stringify({
          product_id:product,
          customer_id:customer
        }),  
      }).then(response => {
            return response.json()
      }).then(json => {     
        if (json.success) {
         
        }else{
          dispatch(successPostFavoutite(json))
        }  
      })
      .catch((err) => console.log('err:', err))
      }
}