import * as types from '../constants/ActionTypes';
export function success(message) {
    return { type: types.SUCCESS, message };
}

export function error(message) {
    return { type: types.ERROR, message };
}

export function clear() {
    return { type: types.CLEAR };
}