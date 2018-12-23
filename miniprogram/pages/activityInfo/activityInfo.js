// miniprogram/pages/activityInfo.js
const common = require('../common.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '超值体验课',
    innerAudioContext: null,
    //音乐控件动画
    music_animated:'',
    //节奏跳动
    rhythm_show: false,
    // 播放、暂停
    play_pause: false,
    //音乐地址
    music_src:'cloud://test-d1deb7.7465-test-d1deb7/music/Schnuffel - Schnuffels Weihnachtslied.mp3',
    //轮播图
    slide: {
      indicator_dots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000,
      swiper_images: [
        "http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg",
        "http://seopic.699pic.com/photo/40007/0328.jpg_wh1200.jpg",
        "http://seopic.699pic.com/photo/40008/2846.jpg_wh1200.jpg"
      ]
    },
    //倒计时
    counter: 0,
    countdown: {
      day: 0,
      hours: 0,
      minute: 0,
      seconds: 0
    },
    //推荐人
    referrer: {
      avatarUrl: '',
      nickName: '昵称'
    },
    //数据统计
    statisticalData: {
      stock: 100,
      pageView: 1111,
      buyNum: 66,
      jindu: 66
    },
    //浏览记录
    pageView: [
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称昵称昵称昵称昵称昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称'
      }
    ],
    newOrder:[
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称1',
        phone: '17091921952',
        money: '100',
        payTime: '2018-12-23 15:30:30'
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
        nickName: '昵称2',
        phone: '17091921952',
        money: '100',
        payTime: '2018-12-23 15:30:30'
      }
    ],
    activityIntroduce: [
      'http://seopic.699pic.com/photo/50020/3865.jpg_wh1200.jpg',
      'http://seopic.699pic.com/photo/40007/0328.jpg_wh1200.jpg'
    ],
    brokerageRankingList: [
      {
        avatarUrl: 'http://seopic.699pic.com/photo/40007/0328.jpg_wh1200.jpg',
        nickName: '昵称1',
        referrerNum: 10,
        money: 10
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/40007/0328.jpg_wh1200.jpg',
        nickName: '昵称2',
        referrerNum: 20,
        money: 20
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/40007/0328.jpg_wh1200.jpg',
        nickName: '昵称3',
        referrerNum: 30,
        money: 30
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/40007/0328.jpg_wh1200.jpg',
        nickName: '昵称4',
        referrerNum: 40,
        money: 40
      },
      {
        avatarUrl: 'http://seopic.699pic.com/photo/40007/0328.jpg_wh1200.jpg',
        nickName: '昵称5',
        referrerNum: 50,
        money: 50
      }
    ],
    activityImg: '../../images/huodongfang.jpg'
  },
  /**
   * 音乐控件--监听点击
   */
  playOrPause: function (event){

    console.log(event);
    if (this.data.play_pause){
      // 播放
      this.data.innerAudioContext.play();
      this.data.play_pause = false;
    }else{
      // 暂停
      this.data.innerAudioContext.pause();
      this.data.play_pause = true;
    }
  },

  /**
   * 获取用户信息
   */
  getUserInfo: function(event){
    console.log(event);
  },

  /**
   * 活动倒计时
   */
  countdown: function(){
    this.data.counter = this.data.counter+1;
    var endTime = 15 * 24 * 60 * 60 * 1000;
    var time = endTime - this.data.counter * 1000;
    if (time > 0) {
      var d = Math.floor(time / (1000 * 60 * 60 * 24));
      var h = Math.floor(time / (1000 * 60 * 60)) % 24;
      var m = Math.floor(time / (1000 * 60)) % 60;
      var s = Math.floor(time / 1000) % 60;
      this.setData({
        countdown: {
          day: d,
          hours: h,
          minute: m,
          seconds: s
        }
      });
    } else {
      
    }
  },
  /**
   * 分享
   */
  fenxiang: function() {
    console.log('22222222');
    wx.showShareMenu({
      withShareTicket: true,
    });
  },
  navigateTo: function(event) {
    common.navigateTo(event);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //倒计时
    setInterval(this.countdown, 1000);
    //music
    const innerAudioContext = wx.createInnerAudioContext();
    this.data.innerAudioContext = innerAudioContext;
    innerAudioContext.src = this.data.music_src;
    // innerAudioContext.autoplay = true;
    innerAudioContext.loop = true;
    innerAudioContext.onPlay(() => {
      console.log('监听-播放音乐');
      this.setData({
        music_animated: 'music-animated',
        rhythm_show: true,
      });
    });
    innerAudioContext.onPause(() => {
      console.log('监听-暂停音乐');
      this.setData({
        music_animated: '',
        rhythm_show: false,
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.title,
      path: '/pages/activityInfo/activityInfo?id=xxx&referrerCode=123'
    }
  }
})