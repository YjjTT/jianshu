import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "//upload.jianshu.io/collections/images/352234/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "//upload.jianshu.io/collections/images/352234/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "婆婆想丢掉公公这个包袱",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/13211952-83adecdc76115f68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      desc:
        "公公三年前开始得脑梗，之后每年都要住院两三次，有两次发病都倒在地上，好在都是白天，有人看到，每次发病婆婆都要在医院日夜照顾他。三年前 公公三年..."
    },
    {
      id: 2,
      title: "婆婆想丢掉公公这个包袱",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/13211952-83adecdc76115f68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      desc:
        "公公三年前开始得脑梗，之后每年都要住院两三次，有两次发病都倒在地上，好在都是白天，有人看到，每次发病婆婆都要在医院日夜照顾他。三年前 公公三年..."
    },
    {
      id: 3,
      title: "婆婆想丢掉公公这个包袱",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/13211952-83adecdc76115f68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      desc:
        "公公三年前开始得脑梗，之后每年都要住院两三次，有两次发病都倒在地上，好在都是白天，有人看到，每次发病婆婆都要在医院日夜照顾他。三年前 公公三年..."
    },
    {
      id: 4,
      title: "婆婆想丢掉公公这个包袱",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/13211952-83adecdc76115f68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      desc:
        "公公三年前开始得脑梗，之后每年都要住院两三次，有两次发病都倒在地上，好在都是白天，有人看到，每次发病婆婆都要在医院日夜照顾他。三年前 公公三年..."
    }
  ],
  recommendList: [{
    id: 1,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
  },{
    id: 2,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png',
  },{
    id: 3,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png',
  },{
    id: 4,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
  },{
    id: 5,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
  },{
    id: 6,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
