
import {Base} from '../../utils/base.js';
class Home extends Base{
  constructor(){
    
//super()方法作用：将父类中的属性和方法继承过来相当于一个new Base()创建出来的实例，这个实例里面的this指向当前这个类也就是子类本身
    super();
  }
  getBannerData(callBack){
      var parmas = {
        url:"banner/1",
        method:'GET',
        sCallback:function(res){
          callBack && callBack(res.items);
        }
      }
      this.request(parmas);
    //调用base下面的request方法
    /*
    //调用banner接口
    wx.request({
      url: 'http://z.cn/api/v1/banner/1',
      method:"GET",
      success:function(res){
        // return res;
        //异步程序需要通过回调函数返回值，在这里相当于函数的调用，返回值充当实参
       callBack(res);
      }
    })
    */
  }
  getThemeData(callBack){
    var parmas = {
      url: "theme?ids=1,2,3",
      method: 'GET',
      sCallback: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(parmas);
  }

  getNewsData(callBack) {
    var parmas = {
      url: "product/recent",
      method: 'GET',
      sCallback: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(parmas);
  }

}

export {Home};