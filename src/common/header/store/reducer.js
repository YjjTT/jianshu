import * as constants from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focus: false,
    list: []
});

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS){
        return state.set('focus', true)
    }
    if(action.type === constants.SEARCH_NOT_FOCUS){
        return state.set('focus', false)
    }
    if(action.type === constants.CHANGE_LIST){
        return state.set('list', action.data)
    }
    return state;
}