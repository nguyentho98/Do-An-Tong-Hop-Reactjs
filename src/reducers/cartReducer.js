import * as types from '../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('CART'))
const initialState = {
    dataCart: data ? data: [],
    dataMaGG:[],
    statusUser:0,
    stateViewThongTinUser:false,
    countQuantityCart:0,
}
const cartReducer = (state = initialState, action) => {
    var {quantity,product}=action;
    var index=-1;
    switch (action.type) {
        case "resetCart":
            return {
                ...state,dataCart:[]
            }
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
            var a=countQuantityCart(temp)
            return {...state,dataCart:temp,countQuantityCart:a}
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
        case "actCountQuantityCart":
            return {
                ...state, countQuantityCart:action.payload
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
const countQuantityCart  = (dataCart) => {
    var temp=0;
    if(dataCart.length > 0 ){
     for (let index = 0; index < dataCart.length; index++) {
       const element = dataCart[index];
       temp+=element.quantity;
     }
    }else{
        temp=0;
    }
    return temp;
}

export default cartReducer