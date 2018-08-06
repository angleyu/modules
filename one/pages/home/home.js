// pages/home/home.js
import { Home } from 'home-model.js';
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
    this.loadData();
    // this.themeData();
    // this.newsData();
  },
  //同一个函数执行不同的业务，传一个参数，回调函数
  loadData(callBack) {
    var home = new Home();
    home.getBannerData(data => {
      this.setData({
        imgUrl: data,
        loadingHidden:true
      })
    });

    home.getThemeData(data => {
      //console.log(data);
      this.setData({
        themeData:data
      })
    })

    home.getNewsData(data => {
      //console.log(data);
      this.setData({
        newsList: data
      })
      callBack&&callBack()
    })
  },
  onTheme(e){
      var id = e.currentTarget.dataset.id;
      //console.log(id);
      wx.navigateTo({
        url: '/pages/theme/theme?id='+id,
      })
  },
  onDetail(e){
    var id = e.currentTarget.dataset.id;
    //console.log(e.currentTarget);
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  onShareAppMessage(options){
    return {
      title:"零食商贩 Pretty Venner",
      path:"pages/home/home"
    }
  },
  //定义回调函数利用形参接受异步方法的返回值
  // callBack:function(data){
  //     console.log(data);
  // },
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
    this.loadData(function(){
      wx.stopPullDownRefresh();
    });
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