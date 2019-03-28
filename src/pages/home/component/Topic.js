import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    const { list } = this.props;
    console.log(list)
    return (
      <TopicWrapper className="clearfix">
        {
          list.map((item)=>((
            <TopicItem key={item.get("id")} className="clearfix">
              <img className="banner-image" alt="" src={item.get("imgUrl")} />
              {item.get("title")}
            </TopicItem>
          )))
        }
      </TopicWrapper> 
    );
  }
}
const mapState = state => ({
  list: state.get("home").get("topicList")
});
export default connect(
  mapState,
  null
)(Topic);
