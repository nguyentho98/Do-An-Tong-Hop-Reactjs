import * as types from '../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('CART'))
const productInitialState = {
    dataCart: data ? data: [],
    dataMaGG:[],
    statusUser:0,
    stateViewThongTinUser:false
}
const cartReducer = (state = productInitialState, action) => {
    var {quantity,product}=action;
    var index=-1;
    switch (action.type) {
        case types.ADD_TO_CART:{
            index=findProductInCart(state.dataCart,product);
            if(index !== -1){
                state.dataCart[index].quantity +=quantity;
            }else{
                state.dataCart.push({
                    product,
                    quantity
                }) 
            }
            localStorage.setItem('CART',JSON.stringify(state.dataCart))
            return {...state}
        }   
        case types.DELETE_PRODUCT_TO_CART:{
            var temp =  state.dataCart.filter(item => item.product.id !== product.id)
            localStorage.setItem('CART',JSON.stringify(temp))
            return {...state,dataCart:temp}
        }     
        case types.UPDATE_PRODUCT_TO_CART:{
            index=findProductInCart(state.dataCart,product);
            if(index !== -1){
                state.dataCart[index].quantity = quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state.dataCart))
            return {...state,dataCart:state.dataCart}
        }   
        case types.GETMAGG_REQUEST:
        return {
            ...state,
        }
        case types.GETMAGG_SUCCESS:
        return {
            ...state,
            dataMaGG: action.data
        }
        case types.GETMAGG_FAILURE:
        return {
            ...state, 
        }   
        case types.STATUS_THONG_TIN_USER:
            return {
                ...state, statusUser:0
            }    
        case types.STATUS_LICHSUDONHANG:
            return {
                ...state, statusUser:1
            } 
        case types.STATUS_LICHSUGIAODICH:
            return {
                ...state, statusUser:2
            } 
        case types.STATUS_SAN_PHAM_YEU_THICH:
            return {
                ...state, statusUser:3
            }  
        case types.STATE_THONG_TIN_USER:
            return {
                ...state, stateViewThongTinUser:true
            } 
        case "onClickItemUser":
            return {
                ...state, statusUser:action.value
            }      
        default:
            return {...state}
    }
}
const findProductInCart  = (cart,product) => {
    var index=-1;
    if(cart.length>0){
        for (let i = 0; i < cart.length; i++) {
           if(cart[i].product.id===product.id){
               index=i;
               break;
           }  
        }
    }
    return index
}

export default cartReducer