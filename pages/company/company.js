var util = require('../../utils/util.js');
var api = require('../../config/api.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    companyInfo:[
      {
        label: '公司简介',
        en: 'Company profile',
        value: '本公司成立于1992年，有着非常强大的技术。。本公司成立于1992年，有着非常强大的技术。。本公司成立于1992年，有着非常强大的技术。。本公司成立于1992年，有着非常强大的技术。。'
      },
      {
        label:'地址',
        en:'Address',
        value:'江西省广州市两江镇'
      },
      {
        label: '电话',
        en: 'Telephone',
        value: '15007003751'
      },
      {
        label: '微信号',
        en: 'WeChat',
        value: '15007003752'
      },
      {
        label: '客服',
        en: 'Service',
        value: '15007003753'
      }, 
    ],
    reqData:{}
  },
  /**
   * 复制相关信息
   */
  copy: function (e) {
    console.log(e)
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
  /**
   * 获取公司简介
   */
  getCompanyInfo:function(){
    let that = this;
    util.request(api.getCompanyInfo).then(function (res) {
      console.log(res)
      if (res.errno === 0) {
        that.setData({
          reqData: res.data
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCompanyInfo()
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