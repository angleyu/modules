// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      swiper:["赵女士申请无抵押贷款20.0万元","荣先生成功贷款 500万","赵先生成功贷款59万"],
      money: [{
        "image": "/images/1-首页_20.png",
        "have": "有车一族",
        "have1": "有车旅游人士",
        "have2": "有车",
        "money": '1万~200万',
        "money1": '贷款金额',
        "lilv": "0.5~0.85",
        "lilv1": "贷款利率",
        "pawn": "车辆抵押",
        "pawn1": "抵押物",
        "id": 102
      },
      {
        "image": "/images/1-首页_23.png",
        "have": "有房一族",
        "have1": "有房创业人士",
        "have2": "有房",
        "money": '30万~3000万',
        "money1": '贷款金额',
        "lilv": "0.43~0.61",
        "lilv1": "贷款利率",
        "pawn": "房屋抵押",
        "pawn1": "抵押物",
        "id": 101
      },
      {
        "image": "/images/1-首页_25.png",
        "have": "白领一族",
        "have1": "学习深造人士",
        "have2": "白领",
        "money": '1万~200万',
        "money1": '贷款金额',
        "lilv": "0.5~0.85",
        "lilv1": "贷款利率",
        "pawn": "无抵押贷款",
        "pawn1": "抵押物",
        "id": 304
      },
      {
        "image": "/images/1-首页_30.png",
        "have": "创业人士",
        "have1": "企业资金短缺人士",
        "have2": "创业",
        "money": '30万~3000万',
        "money1": '贷款金额',
        "lilv": "0.43~0.61",
        "lilv1": "贷款利率",
        "pawn": "根据实际选择",
        "pawn1": "抵押物",
        "id": 204
      }]


  },
  tele(){
    wx.makePhoneCall({
      phoneNumber: '18813158393',
    })
  },
  nav(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  detail(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  product(e){
    var title = e.currentTarget.dataset.id;
    
    wx.navigateTo({
      url: '/pages/product/product?title='+title,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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