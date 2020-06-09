import * as types from '../constants/ActionTypes';
export function setViewEditUser() {
    return { type: types.SET_VIEW_EDIT_USER };
}
export function checkUserThanhToan() {
    return { type: types.CHECK_USER_ORDERS};
}
export function editUserRequest() {
    return {
      type: types.EDIT_USER_REQUEST
    }
  }
  
  export function editUserSuccess(data) {
    return {
      type: types.EDIT_USER_SUCCESS,
      data
    }
  }
  
  export function editUserFailure() {
    return {
      type: types.EDIT_USER_FAILURE
    }
  }
  export function fetchEditUser(user) {
    return (dispatch) => {
      dispatch(editUserRequest())
      fetch('http://doanekko.com:8080/public/customers/'+user.id ,{
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
         },
        method: 'put',
        credentials: "same-origin",
          body:JSON.stringify({
            username: user.username,
            email:user.email,
            password: user.password,
            name:user.name,
            phone:user.phone,
            address:user.address,
            job:user.job,
            cmnd:user.cmnd,
            sex:user.sex,
          }),  
          }).then(response => {
                return response.json()
          }).then(json => {       
            localStorage.setItem('USER',JSON.stringify(json))
            dispatch(editUserSuccess(json))  
        })
        .catch((err) => console.log('err:', err))
    }
  }