import * as types from '../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('LOVE'))
const loveInitialState = {
    dataLove: data ? data: [],
}
const loveReducer = (state = loveInitialState, action) => {
    var {product}=action;
    var index=-1;
    switch (action.type) {
        case types.ADD_TO_LOVE:{
            index=findProductInLove(state.dataLove,product);
            if(index !== -1){
                
            }else{
                state.dataLove.push({
                    product
                }) 
            }
            localStorage.setItem('LOVE',JSON.stringify(state.dataLove))
            return {...state}
        }   
        case types.DELETE_PRODUCT_TO_LOVE:{
            var temp =  state.dataLove.filter(item => item.product.id !== product.id)
            localStorage.setItem('LOVE',JSON.stringify(temp))
            return {...state,dataLove:temp}
        }         
        default:
            return {...state}
    }
}
const findProductInLove  = (love,product) => {
    var index=-1;
    if(love.length>0){
        for (let i = 0; i < love.length; i++) {
           if(love[i].product.id===product.id){
               index=i;
               break;
           }  
        }
    }
    return index
}

export default loveReducer