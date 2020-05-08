import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../reducers/productReducer';
import cartReducer from '../reducers/cartReducer';
import alertReducer from '../reducers/alertReducer';
import loginReducer from '../reducers/loginReducer';
import registerReducer from '../reducers/registerReducer';
import detailReducer from '../reducers/detailReducer';
var redux = require('redux');   
const allReducers=redux.combineReducers({
    productReducer:productReducer,
    cartReducer:cartReducer,
    alertReducer:alertReducer,
    loginReducer:loginReducer,
    registerReducer:registerReducer,
    detailReducer:detailReducer,
    
  
})
var store=createStore(allReducers,applyMiddleware(thunk)); 


export default store

