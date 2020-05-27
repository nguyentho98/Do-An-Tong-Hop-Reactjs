import * as types from '../constants/ActionTypes';
import _ from 'lodash'
const productInitialState = {
    limitDataProduct: [],

    statusSuccess:false,

    listCart:[],

    item:{},

    limit:8,

    page:1,

    allDataProduct:[],

    loadMore:true
}
const productReducer = (state = productInitialState, action) => {
switch (action.type) {
    // product
    case types.FETCHING_DATAPRODUCT:
    return {
        ...state,
    }
    case types.GET_LIMITDATAPRODUCT_SUCCESS:
        const array=_.concat(state.limitDataProduct,action.data)
    return {
        ...state,
        limitDataProduct:array
    }
    case types.GET_ALLDATAPRODUCT_SUCCESS:
        return {
            ...state,
            allDataProduct: action.data
        }
    case types.FETCHING_DATAPRODUCT_FAILURE:
        return {
            ...state, 
        }  
    case types.ACT_PRODUCT_LIMIT:
        
        return {
            ...state, page:state.page+1
        }  
    // Thêm vào giỏ Hàng
    case "addCart":{
        return{
            ...state,statusSuccess:true,item:action.item
        }
    }       
    case "addCartClose":{
        return{
            ...state,statusSuccess:false,
        }
    }     
    case "viewLoadMore":{
        return{
            ...state,loadMore:false,
        }
    }  
    default:
        return state
}
}
export default productReducer