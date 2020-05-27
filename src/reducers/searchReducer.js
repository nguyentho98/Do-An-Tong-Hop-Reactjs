import * as types from '../constants/ActionTypes';
import _ from 'lodash'
const searchInitialState = {
    dataSearch: [],
}
const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
        // product
        case types.GET_SEARCH_REQUEST:
            return {
                dataSearch: [],
                ...state,
            }
        case types.GET_SEARCH_SUCCESS:
            const array=_.concat(state.dataSearch,action.data)
            return {
                ...state,
                dataSearch:array
            }
        case types.GET_SEARCH_FAILURE:
            return {
                ...state,
                dataSearch: [],
            }
        default:
            return state
    }
}
export default searchReducer