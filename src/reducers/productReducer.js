import { FETCHING_DATAPRODUCT, FETCHING_DATAPRODUCT_SUCCESS, FETCHING_DATAPRODUCT_FAILURE} from '../constants/ActionTypes';
const productInitialState = {
    dataProduct: [],

    cartSuccess:false,

    listCart:[]
}
const productReducer = (state = productInitialState, action) => {
switch (action.type) {
    // product
    case FETCHING_DATAPRODUCT:
    return {
        ...state,
        dataProduct: [],
        isFetching: true
    }
    case FETCHING_DATAPRODUCT_SUCCESS:
    return {
        ...state,
        isFetching: false,
        dataProduct: action.data
    }
    case FETCHING_DATAPRODUCT_FAILURE:
    return {
        ...state,
        isFetching: false,
        error: true
    }  
    // hết      
    // Thêm vào giỏ Hàng
    case "addCart":{
        return{
            ...state,cartSuccess:true
        }
    }       
    case "addCartClose":{
        return{
            ...state,cartSuccess:false
        }
    }     
    default:
        return state
}
}
export default productReducer