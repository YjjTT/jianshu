import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper,Header, Content } from './style';
import { actionCreators } from './store'

class Detail extends Component {
  render() {
  	const { title, content } = this.props;
    return (
      <DetailWrapper>
      	<Header>{title}</Header>
      	<Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
  componentDidMount(){
  	this.props.getDetail();
  }
}
const mapState = (state) => ({
	title: state.get('detail').get('title'),
	content: state.get('detail').get('content')
})
const mapDispatch = (dispatch) => ({
	getDetail(){
		dispatch(actionCreators.getDetail())
	}
})
export default connect(mapState, mapDispatch)(Detail);