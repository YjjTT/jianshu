import * as constants from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focus: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 0
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focus', true)
        case constants.SEARCH_NOT_FOCUS:
            return state.set('focus', false)
        case constants.CHANGE_LIST:
            return state.merge({
                'list': action.data,
                'totalPage': action.totalPage
            })
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state;
    }
}