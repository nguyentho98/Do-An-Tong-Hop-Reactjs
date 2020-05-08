import * as types from '../constants/ActionTypes';
const detailInitialState = {
    detail: {},
}
const detailReducer = (state = detailInitialState, action) => {
    switch (action.type) {
        // product
        case types.GETDETAIL_REQUEST:
            return {}
        case types.GETDETAIL_SUCCESS:
            console.log(action.data);
            return {
                ...state,
                detail:action.data
            }
        case types.GETDETAIL_FAILURE:
            return {}
        default:
            return state
    }
}
export default detailReducer