// pages/orderDetails/orderDetails.js
import {Cart} from '../car/car-model.js';
import { Address} from '../../utils/address.js';
import {Token} from '../../utils/token.js';
var getoken = new Token();
var onaddress = new Address();
var cart = new Cart();
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
    var accounts = options.allPrice;
    var orderData = cart.getDataFromLocal(true);
    var that = this;
    // var address = getoken.getAddress(data=>{
    //   var obj ={
    //     userName: data.name,
    //     telNumber: data.mobile,
    //     address: data.province + data.city + data.country + data.detail
    //   }
    //     that.setData({
    //       addressInfo:obj
    //     })
    // });
      this.setData({
        buygoods: orderData,
        allPrice: accounts,
        loadingHidden:true,
       
      })
     
  },
  chooseAddress:function(event){
    var that = this;
    wx.chooseAddress({
      success(res){
        //console.log(res);
        var obj = {
          userName: res.userName,
          telNumber: res.telNumber,
          address: onaddress.setAddressInfo(res)
        }
        onaddress.submitAdress(res,data => {
          console.log(data);
        });
        that.setData({
          addressInfo:obj
        })
       
      }
    })  
  }
 
})