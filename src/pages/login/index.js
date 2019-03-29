import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  render() {
    const {loginStates} = this.props;
    if (!loginStates) {
      return (
        <LoginWrapper>
         <LoginBox>
           <Input placeholder="账号" ref={(input) => {
          this.account = input
        }}/>
           <Input placeholder="密码" type="password" ref={(input) => {
          this.password = input
        }}/>
           <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
         </LoginBox>
      </LoginWrapper>
      )
    } else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapState = (state) => ({
  loginStates: state.get('login').get('login')
})

const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account.value, password.value))
  }
})
export default connect(mapState, mapDispatch)(Login);