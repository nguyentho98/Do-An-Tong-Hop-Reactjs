import * as types from '../constants/ActionTypes';
import * as action from './alertAction';
import { history } from '../reducers/history';
import axios from 'axios';
export function requestRegister(user) {
    return {
      type: types.REGISTER_REQUEST,
      user
    }
  }
  
  export function successRegister(user) {
    return {
      type: types.REGISTER_SUCCESS,
      user
    }
  }
  
  export function failureRegister(error) {
    return {
      type: types.GETALL_FAILURE,
      error
    }
  }
  export function register(user) {
    return (dispatch) => {
      dispatch(requestRegister(user));
    axios
    .post('http://localhost:1337/auth/local/register', {
      username: user.username,
      email:user.email,
      password: user.password,
      fullname:user.fullname,
      phone:user.phone
    }).then(response => {
      // Handle success.
        history.push("/login");
        response.json().then( result => {
        dispatch(successRegister(result));})
        dispatch(action.success("Bạn tạo tài khoản thành công"));
    })
    .catch(error => { 
        // dispatch(action.error(error.message[0].messages[0].message));
        // console.log("xin chào "+JSON.stringify(error));
         dispatch(action.error("Username đã tồn tại,vui lòng thử lại"));
    });
   
    }
  }