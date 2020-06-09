import * as types from '../constants/ActionTypes';
import * as action from './alertAction';
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
  export function changePasswordSuccess() {
    return {
      type: types.CHANGE_PASSWORD
    }
  }
  export function fetchChangePassword(user,password,newPassword) {
    return (dispatch) => {
      fetch('http://doanekko.com:8080/public/customers/changePassword/'+user.id ,{
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
         },
        method: 'put',
        credentials: "same-origin",
          body:JSON.stringify({
            password: password,
            newPassword:newPassword,
          }),  
          }).then(response => {
                return response.json()
          }).then(json => {       
            changePasswordSuccess()
            console.log("xin chào");
            if (json.error) {
              dispatch(action.error("Mật khẩu không đúng vui lòng thử lại !"));
            }else{
              dispatch(action.success("Thay đổi mật khẩu thành công!"));
            }
        })
        .catch((err) => console.log('err:', err))
    }
  }