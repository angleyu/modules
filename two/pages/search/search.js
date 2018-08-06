// pages/search/search.js
var pro = require('../../data/json.js');
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
  
  },
  onProduct(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/reresult/reresult?id='+id,
    })
  },
  search(ev){
    var searchValue = ev.detail.value;
    var arr =[];
    for(var i in pro.data){
      for(var j in pro.data[i]){
        var title = pro.data[i][j].title;
        if (title.indexOf(searchValue)==-1){
         
        }else {
          if (searchValue==""){
              return;
          }else{
            arr.push(pro.data[i][j]);
          }
          
        }
      }
    }
    
    app.globalData.math = arr;
    if(arr.length>0){
      arr=null;
      wx.navigateTo({
        url: '/pages/reresult/reresult',
      })
    }else {
      wx.navigateTo({
        url: '/pages/result/result',
      })
    }
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