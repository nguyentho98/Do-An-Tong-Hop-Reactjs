import * as types from '../constants/ActionTypes';
const productInitialState = {
    limitDataProduct: [],

    statusSuccess:false,

    listCart:[],

    item:{},

    limit:1,

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
    return {
        ...state,
        limitDataProduct: action.data
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
            ...state, limit:state.limit+3
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