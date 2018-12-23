//index.js
const app = getApp()
const common = require('../common.js');
Page({
  data: {
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
  },

  /**
   * 页面跳转
   */
  navigateTo: function (event) {
    common.navigateTo(event);
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  }

})
