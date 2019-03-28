import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./component/Topic";
import List from "./component/List";
import Recomed from "./component/Recomed";
import Writer from "./component/Writer";
import axios from "axios";
import { connect } from "react-redux";

class Home extends Component {
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
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}
const mapDispatch = dispatch => ({
  changeHomeData(action) {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = {
        type: "change_home_data",
        topicList: result.topicList,
        recommendList: result.recommendList,
        articleList: result.articleList
      };
      dispatch(action);
    });
  }
});
export default connect(
  null,
  mapDispatch
)(Home);
