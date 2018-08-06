// pages/reresult/reresult.js
var proDetail = require('../../data/json.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;

    var detailArr = [];
    detailArr = app.globalData.math;
    for (var i in proDetail.data) {
      for (var j in proDetail.data[i]) {
        var proId = proDetail.data[i][j].id;
        if (proId == id) {
          detailArr = [];
          detailArr.push(proDetail.data[i][j]);
          this.setData({
            pro: detailArr
          })
        }
      }
    } 
    var mathArr = app.globalData.math;
    this.setData({
      pro: detailArr
    })
  },
  detail(e) {
    var id = e.currentTarget.dataset.id;
    // console.log(id);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
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