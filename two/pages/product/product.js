// pages/product/product.js
var product = require('../../data/json.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:product.data,
    productTitle: ["抵押贷款", "企业贷款", "信用贷款"]
  },
  detail(e){
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var title = options.title;
      //this.sw(title);
     this.setData({
       title: title,
       productarr: product.data[title]
     })
  },
  tab(e){
    var title=e.currentTarget.dataset.title;
    this.setData({
      title: title,
      productarr: product.data[title]
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