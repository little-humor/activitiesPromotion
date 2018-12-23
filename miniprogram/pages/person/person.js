// miniprogram/pages/person/person.js
const common = require('../common.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    userInfo:{
      avatarUrl: '../../images/icon/user-unlogin.png',
      nickName: '',
      gender: 0
    }
  },

  /**
   * 页面跳转
   */
  navigateTo: function (event) {
    common.navigateTo(event);
  },
  /**
   * 获取用户信息
   */
  getUserInfo: function (event) {
    console.log(event);
    this.setData({
      userInfo: event.detail.userInfo,
      hasUserInfo: true
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.checkSession({
    //   success() {
    //     // session_key 未过期，并且在本生命周期一直有效
    //   },
    //   fail() {
    //     // session_key 已经失效，需要重新执行登录流程
    //     wx.login() // 重新登录
    //   }
    // })
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

  }
})