import { fromJS } from 'immutable'

const defaultState = fromJS({
   topicList: [{
       id: 1,
       title: '社会热点',
       imgUrl: '//upload.jianshu.io/collections/images/352234/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
   },{
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/352234/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
   }]
});

export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}