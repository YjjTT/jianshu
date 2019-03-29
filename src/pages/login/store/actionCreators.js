import axios from 'axios'
import * as constants from './constants'

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})
export const logOut = () => ({
	type: constants.CHANGE_LOGOUT,
	value: false
})

export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
			console.log(res);
			const result = res.data.data;
			if (result){
				dispatch(changeLogin())
			}else{
				alert('登录失败')
			}
		})
	}
}
