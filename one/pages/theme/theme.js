// pages/theme/theme.js
import { Theme } from 'theme-model.js';
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
    var themeurl = '/theme/'+id;
    this.setData({
      themeurl: themeurl,
      loadingHidden:true
    })
    this.getThemeData();
  },
  getThemeData:function(){
    var theme = new Theme();
    theme.getThemeData(this.data.themeurl,data=>{
      //console.log(data);
      this.setData({
        themeData:data,
        newsList: data.products
      })
      wx.setNavigationBarTitle({
        title: data.name
      }) 
    })
  },
  onDetail(e) {
    var id = e.currentTarget.dataset.id;
    console.log(e.currentTarget);
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