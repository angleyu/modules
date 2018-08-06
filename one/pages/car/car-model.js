import {Base} from '../../utils/base.js'
class Cart extends Base {
  constructor(){
    super();
    this.keyName = 'cart';
  }
  //添加缓存的方法
  add(item,counts){
   
    //首先从缓存里获取数据
    var cartData=this.getDataFromLocal();
    //判断传过来的数据在缓存里有没有记录;
    var _index = this.isHasThatOne(item.id,cartData);
    if(_index==-1){
      item.counts = counts;
      item.selectStaus = true;
      cartData.push(item);
    }else {
      cartData[_index].counts+=counts;
    }
  
    wx.setStorageSync(this.keyName,cartData);
  }
  //读取缓存的方法
  getDataFromLocal(flag){
    var res = wx.getStorageSync(this.keyName);
    if(!res){
      res=[];
    }
    //flag:添加标志位对数据进一步的筛选
    if(flag){
      var newRes = [];
      for(var i in res){
        if (res[i].selectStaus){
          newRes.push(res[i])
        }
      }
      res = newRes
    }
    return res;
  }
  // //判断传过来的数据在缓存里有没有记录的方法;
  isHasThatOne(id,cartArr){
    //id是传过来数据的id，catArr缓存里面的数据
    var index = -1;
    for (var i = 0; i < cartArr.length; i++) {
      if (cartArr[i].id == id) {
        //缓存里有这条数据记录
        index = i;
      }
     
    }
     return index;
  }
  
  adds(item, counts) {
    /*功能：存入缓存 */
    //读取缓存
    var cartData = wx.getStorageSync(this.keyName);
    if (!cartData) {
      // cartData.push(item)
      cartData=[];
      item.counts = counts;
      cartData.push(item);
    }else {
      //缓存有值
        //查看缓存里面有无此数据 通过id匹配
      var index = -1;
      for (var i in cartData) {
        if (cartData[i].id == item.id) {
          index = i;
        }
      }

      if (index == -1) {
        item.counts = counts;
        cartData.push(item);
      } else {
        cartData[index].counts += counts;
      }
    }
    wx.setStorageSync(this.keyName, cartData)
  }
  //获取缓存里的总数
  getTotalCounts(){
    var totalCounts = 0;
    var LocalData = this.getDataFromLocal();
    for (var i = 0; i < LocalData.length;i++){
      totalCounts += LocalData[i].counts
    }
    return totalCounts;
  }
  //获取flag
 
}
export {Cart};