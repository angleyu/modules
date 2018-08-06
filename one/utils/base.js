import {Token} from './token.js';

class Base {
  constructor(){
    //存放公共数据
    //v1版本号
    this.baseRequestUrl = 'http://z.cn/api/v1/'
  }
  request(parmas,flag){
    var url = this.baseRequestUrl+parmas.url;
    if(!parmas.method){
      parmas.method="GET"
    }
    var that = this;
    wx.request({
      url:url,
      data: parmas.data,
      header: {
        token:wx.getStorageSync('token')
      },
      method: parmas.method,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        //获取状态码的第一个字符；
        var code = res.statusCode.toString();
        var startCode = code.charAt(0);
        if (startCode=='2'){
           //如果有回调函数则执行回调函数-==-if( parmas.sCallback){          parmas.sCallback(res)}
          parmas.sCallback && parmas.sCallback(res.data);
        }else {
          if(code=='401'){
            //重新获取token，在发送网络请求请求接口把这块封装成函数                 
            if(!flag){
              that.resetToken(parmas);
            }
            
          }
          parmas.eCallback && parmas.eCallback(res.data);
        }
       
      
      },
      fail: function(res) {
        //请求未发送过去
      },
      complete: function(res){},
    })
  }
  getsetData(e,key){
    return e.currentTarget.dataset[key]
  }
  //添加标志位，当为true的时候不再做重新授权管理
  resetToken(parmas){
    var token = new Token();
    //为了保证this.request()在执行token.getTokenFromServer之后执行，需用一个回调函数，因为其为一步操作；
    token.getTokenFromServer(()=>{
      this.request(parmas,true);
    });
  }
}
export { Base};