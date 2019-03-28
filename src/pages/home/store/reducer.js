import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articalPage: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case 'add_artical_list':
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articalPage': action.nextPage
      })
      case 'toggle_scroll_top':
      return state.set('showScroll', action.show)
    default:
      return state;
  }
};
