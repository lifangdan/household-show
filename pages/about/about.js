const util = require('../../utils/util.js');
const api = require('../../config/api.js');

//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lname: '陈经理',
    lphone: '13975131029',
    wx: 'csdywjc'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.getAbout()
  },
  getAbout: function() {
    let that = this;
    util.request(api.AboutUrl).then(function(res) {
      if (res.errno === 0) {
        that.setData({
          name: res.data.name,
          address: res.data.address,
          phone: res.data.phone,
          qq: res.data.qq,
          latitude: res.data.latitude,
          longitude: res.data.longitude
        });
      }
    });
  },
  /**
   * 复制相关信息
   */
  copy: function(e) {
    let copyVal = e.currentTarget.dataset.value
    wx.setClipboardData({
      data: copyVal,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },
  callPhone: function(e) {
    var that = this
    wx.makePhoneCall({
      phoneNumber: "15007003751",
    })
  }
})