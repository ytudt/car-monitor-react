import { combineReducers } from 'redux'
import defaultState from './state.js'

function userInfo(state = defaultState.userInfo, action) {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            return action.data;
        case 'CLEAR_USER_INFO':
            return {};
        default:
            return state;

    }

}

export default combineReducers({
    userInfo,
});
