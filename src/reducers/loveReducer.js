import * as types from '../constants/ActionTypes';
import _ from 'lodash'
const loveInitialState = {
    dataLove: [],
}
const loveReducer = (state = loveInitialState, action) => {
    var {product}=action;
    var index=-1;
    switch (action.type) {
        // case types.ADD_TO_LOVE:{
        //     index=findProductInLove(state.dataLove,product);
        //     if(index !== -1){
                
        //     }else{
        //         state.dataLove.push({
        //             product
        //         }) 
        //     }
           
        //     return {...state}
        // }   
        case types.DELETE_PRODUCT_TO_LOVE:{
            console.log(action.id);
            var temp =  state.dataLove.filter(item => item.id !== action.id)
           
            return {...state,dataLove:temp}
        }
        case types.GET_FAVOURITE_SUCCESS:
            const array=_.concat(state.dataLove,action.data)
            // console.log(array);
            return {
            ...state,
            dataLove:action.data
        }
        case types.POST_FAVOURITE_SUCCESS:
            console.log("tho"+JSON.stringify(action.item));
            state.dataLove.push(action.item)       
            console.log("tho111111111111111111111111"+JSON.stringify(state.dataLove));
            return {
            ...state, 
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