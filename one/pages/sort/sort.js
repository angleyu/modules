// pages/sort/sort.js
import { sort } from 'sort-model.js';
var Sort = new sort();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      aindex:0,
      loadedData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadSortData();
  },
  loadSortData(){
   
    Sort.getSortData(res=>{
      //console.log(res);
      this.setData({
        sortAll:res,
        loadingHidden:true
      })
      Sort.getSortIdData(res[0].id, data => {
       
        var categoryObj={
          sortList: data,
          headImage: res[0].img.url,
          typename: res[0].name
        }
        this.setData({
          categroyInfo0: categoryObj
        })
      })
    });
    
  },
  change(e){
    var arr = [0,1,2,3,4,5];
    var obj ={};
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    this.setData({
      aindex:index
    })
    if (!this.data['categroyInfo' + index]){
      Sort.getSortIdData(id, data => {
        for (var item in arr) {
          if (item == index) {
            obj['categroyInfo' + item] = {
              sortList: data,
              headImage: this.data.sortAll[index].img.url,
              typename: this.data.sortAll[index].name
            }
          }
        }
        this.setData(obj);
      })
    }
    
    
    //判断我的字典里是否有这条数据，若有则从字典加载，否则从服务器加     载
    /*if (this.data.loadedData[index]){

        this.setData({
          categoryProduct: this.data.loadedData[index]
        })
    }else {
      //说明之前没有加载过
      Sort.getSortIdData(id, data => {
        //console.log(data);
        var obj = {};
        // obj['categroyInfo'+index] = {
        //   sortList: data,
        //   headImage: this.data.sortAll[index].img.url,
        //   typename: this.data.sortAll[index].name
        // }
        var categoryObj = {
          sortList: data,
          headImage: this.data.sortAll[index].img.url,
          typename: this.data.sortAll[index].name
        }
       
        this.setData({
          categoryProduct: categoryObj
        })
        // this.setData(obj)
        //将加载过来的数据存入this.data.loadedData
        this.data.loadedData[index] = categoryObj;
      })
    }*/

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