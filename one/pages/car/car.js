// pages/car/car.js
import { Cart } from 'car-model.js';
var cart = new Cart();
Page({
  // ====加减数量
  changeCounts(e){
    var index = cart.getsetData(e,'index');
    var types = cart.getsetData(e,'types');
    var data = this.data.cartData;
    if(types=='add'){
      data[index].counts++;
    }else {
      if (data[index].counts>1){
        data[index].counts--;  
      }
      
    }
    this.resetData();
    
  },
  //删除
  onDel(e){
    var index = cart.getsetData(e, 'index');
    this.data.cartData.splice(index,1);
    this.resetData()
   
  },
  // ========更新数据
  resetData(){
    var newData = this.selectedCounts(this.data.cartData);
    this.setData({
      cartData: this.data.cartData,
      totalCounts: newData.selectedSum,
      totalSum: newData.selectPrice,
      totalType: newData.selectTypes
    })
   
  },
  onShow: function () {
    //拿缓存数据
    // var flag = wx.getStorageSync('flag');
    var cartData = cart.getDataFromLocal();
    var total = this.selectedCounts(cartData);
    this.setData({
      cartData:cartData,
      totalCounts: total.selectedSum,
      totalSum: total.selectPrice,
      totalType: total.selectTypes,
      loadingHidden:true
    })
  },
  //保存商品总数，总价，总类的信息
  selectedCounts(data){
    //用来保存选中商品的数量
      var selectedSum = 0;
     //用来保存选中商品的总价：单价*数量的和
      var selectPrice = 0;
    //选中商品的种类总数
    var selectTypes = 0;
      for(var i in data){
        if (data[i].selectStaus){
          selectedSum+=data[i].counts;
          selectPrice += data[i].counts*data[i].price*1000;
          selectTypes++;
        }
      }
      return {
        selectedSum: selectedSum,
        selectPrice: selectPrice/1000,
        selectTypes: selectTypes
      }
  },
  //点击切换+自动判断全选的按钮是否被选中
  ToggleStatus(e){
    //需要改变数据cartData里面当前商品选中状态：对原状态取反
    //数据里面的当前商品需要通过下标找
    var index = cart.getsetData(e,'index');
    //当前商品的状态
    var select = cart.getsetData(e,'status');
    
    this.data.cartData[index].selectStaus = !select;
   
    //重新计算商品的总价和总数
    this.resetData()
  },
  //全选
  selectAll(e){
    var status = cart.getsetData(e,'status');
    //拿到所有商品
    var data = this.data.cartData;
    //更改所有商品的状态
    for(var i in data){
      data[i].selectStaus = !status;
    }

    this.resetData()
  },
  onOrder(){
    wx.navigateTo({
      url: '/pages/orderDetails/orderDetails?allPrice=' + this.data.totalSum,
    })
  },
  //在离开这个页面时候统一更新缓存；
  onHide(){
    wx.setStorageSync('cart', this.data.cartData);
  }
})