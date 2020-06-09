import * as types from '../constants/ActionTypes';
import * as action from './alertAction';
import { history } from '../reducers/history';
import axios from 'axios';
export function requestRegister() {
    return {
      type: types.REGISTER_REQUEST,  
    }
  }
  
  export function successRegister(user) {
    return {
      type: types.REGISTER_SUCCESS,
      user
    }
  }
  
  export function failureRegister() {
    return {
      type: types.REGISTER_FAILURE,
    }
  }



// export function register(user) {
//     return (dispatch) => {
//       dispatch(requestRegister(user));
//     axios
//     .post('http://doanekko.com:8080/public/customers/login', {
//       username: user.username,
//       email:user.email,
//       password: user.password,
//       fullname:user.fullname,
//       phone:user.phone
//     }).then(response => {
//       // Handle success.
//         history.push("/login");
//         response.json().then( result => {
//         dispatch(successRegister(result));})
//         dispatch(action.success("Bạn tạo tài khoản thành công"));
//     })
//     .catch(error => { 
//         // dispatch(action.error(error.message[0].messages[0].message));
//         // console.log("xin chào "+JSON.stringify(error));
//          dispatch(action.error("Username đã tồn tại,vui lòng thử lại"));
//     });
   
//     }
//   }

export function register(user) {
    return (dispatch) => {
      dispatch(requestRegister(user));
      fetch('http://doanekko.com:8080/public/customers/register' ,{
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
         },
        method: 'post',
        credentials: "same-origin",
          body:JSON.stringify({
            username: user.username,
            email:user.email,
            password: user.password,
            name:user.fullname,
            phone:user.phone
          }),  
        }).then(response => {
              return response.json()
        }).then(json => {       
          if (json.error) {
            dispatch(action.error("Email đã tồn tại vui lòng thử lại !!!"));
          } else{
            history.push("/login");
            dispatch(successRegister(json))  
            dispatch(action.success("Bạn tạo tài khoản thành công"));
          }
        })
        .catch((err) => console.log('err:', err))
        }
  }