import * as constants from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focus: false,
});

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS){
        return state.set('focus', true)
    }
    if(action.type === constants.SEARCH_NOT_FOCUS){
        return state.set('focus', false)
    }
    return state;
}