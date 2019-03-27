import * as constants from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable'

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constants.SEARCH_NOT_FOCUS
})
const changeList = (data) =>{
    return{
        type: constants.CHANGE_LIST,
        data: fromJS(data)
    }
}
export const getList = () =>{
    return (dispatch) =>{
       axios.get('/api/headerList.json').then((res)=>{
           console.log(res.data.data)
           dispatch(changeList(res.data.data));
       }).catch(()=>{
           console.log('error');
       })
    }
}