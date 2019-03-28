import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./component/Topic";
import List from "./component/List";
import Recomed from "./component/Recomed";
import Writer from "./component/Writer";
import { connect } from "react-redux";
import { actionCreators } from './store'

class Home extends PureComponent {
  
  handleScrollTop (){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <HomeWrapper className="clearfix">
        <HomeLeft>
          <img
            alt=""
            className="banner-image"
            src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recomed />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null } 
        
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents (){
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapState = (state) => ({
  showScroll: state.get('home').get('showScroll')
})
const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow (){
    let offset = document.documentElement.scrollTop
    if(offset > 100){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
export default connect(
  mapState,
  mapDispatch
)(Home);
