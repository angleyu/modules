// pages/detail/detail.js

import { Detail } from 'detail-model.js';
import { Cart } from '../car/car-model.js';
var cart = new Cart();
var detail = new Detail();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aindex:0,
    list: ["商品详情", "产品参数","售后保障"],
    countsArray:[1,2,3,4,5,6,7,8,9,10],
    num:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    //console.log(cart.getTotalCounts());
    detail.getDetailData(id,data=>{
      //console.log(data);
      this.setData({
        detailData:data,
        loadingHidden:true,
        all: cart.getTotalCounts()
      })
    })
  },
  onTap(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      aindex:index
    })
  },
  onPickerChange(event){
    //console.log(event);
    var index =event.detail.value;
    var selectCounts = this.data.countsArray[index]
    this.setData({
      num: selectCounts
    })
  },
  //点击加入购物车
  onAddingCart(event){
    this.addToCart();
    if(this.data.isFly){
      return;
    }
    this.isFlyToCart(event);
   
  },
  // ==飞入购物车效果
  isFlyToCart(ev){
    //console.log(ev);
    var touches = ev.touches[0];
    //定义平移距离
    var diff = {
      x:'10px',
      y:30-touches.clientY+'px'
    }
    //定义末状态
    var style = 'display:block;-webkit-transform:translate('+diff.x+','+diff.y+') rotate(300deg) scale(0)'
    this.setData({
      isFly:true,
      translateStyle:style
    })
    var that = this;
    setTimeout(function () {
      that.setData({
        isFly: false,
        translateStyle:"webkit-transform:none",
        isChange: true
      })
      setTimeout(function(){
        //先飞后加
        //总数
        that.setData({
          all: that.data.all + that.data.num,
          isChange: false
        })
      },200)
    }, 1000)
  },
  addToCart(){
    //把当前商品相关信息打包成对象存入缓存
    var tempObj = {};
    var keys = ['id','name','price','main_img_url'];
    for (var key in this.data.detailData){
        //key代表该对象的键
        if(keys.indexOf(key)!==-1){
          tempObj[key]=this.data.detailData[key]
        }
    }
    //console.log(tempObj);
    //打包完的对象加入缓存;
    cart.add(tempObj,this.data.num);
  },
  onCart(){
    wx.switchTab({
      url: '/pages/car/car',
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