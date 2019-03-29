import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Write extends Component {
  render() {
    const {loginStates} = this.props;
    if (loginStates) {
      return (
        <div>写文章页面</div>
      )
    } else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

const mapState = (state) => ({
  loginStates: state.get('login').get('login')
})

export default connect(mapState, null)(Write);