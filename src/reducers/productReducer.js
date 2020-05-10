import { FETCHING_DATAPRODUCT, FETCHING_DATAPRODUCT_SUCCESS, FETCHING_DATAPRODUCT_FAILURE} from '../constants/ActionTypes';
const productInitialState = {
    dataProduct: [],

    statusSuccess:false,

    listCart:[],

    item:{},
}
const productReducer = (state = productInitialState, action) => {
switch (action.type) {
    // product
    case FETCHING_DATAPRODUCT:
    return {
        ...state,
    }
    case FETCHING_DATAPRODUCT_SUCCESS:
    return {
        ...state,
        dataProduct: action.data
    }
    case FETCHING_DATAPRODUCT_FAILURE:
    return {
        ...state, 
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
    default:
        return state
}
}
export default productReducer