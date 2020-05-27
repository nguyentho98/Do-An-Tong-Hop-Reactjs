import * as types from '../constants/ActionTypes';
const categoryInitialState = {
    category: [],
}
const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
        // product
        case types.GET_CATEGORY_FAILURE:
            return {
                ...state,
            }
        case types.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category:action.data
            }
        case types.GET_CATEGORY_REQUEST:
            return {
                ...state,
            }
        default:
            return state
    }
}
export default categoryReducer