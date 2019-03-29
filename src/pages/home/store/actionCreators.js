
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: "change_home_data",
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})
const addHomeList = (list, nextPage) => ({
  type: 'add_artical_list',
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then(res => {
      const result = res.data.data;
      console.log(result)
      dispatch(addHomeList(result, page + 1))
    });
  }
}
export const toggleTopShow = (show) => ({
  type: 'toggle_scroll_top',
  show
})
