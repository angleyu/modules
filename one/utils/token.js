class Token {
  constructor(){
    this.baseUrl = 'http://z.cn/api/v1/';
  }
  //获取验证令牌
  verify(){
    //尝试到缓存里面获取令牌
    var token = wx.getStorageSync('token');
    //如果缓存里面没有则代表第一次获取令牌则去服务器拿令牌
    if(!token){
      this.getTokenFromServer();
    }else{
      this.verifyFromServer(token);
    }
  }
  //获取令牌
  getTokenFromServer(callback){
    var that = this;
    wx.login({
      success(res){
        wx.request({
          url: that.baseUrl+'token/user',
          method:"POST",
          data:{
            code:res.code
          },
          success(res){
            wx.setStorageSync('token',res.data.token);
            //在base里调用其时，若token过期在请求一次
            callback&&callback();
          }
        })
      }
    })
  }
  //验证令牌
  verifyFromServer(token){
    var that = this;
    wx.request({
      url: that.baseUrl +"token/verify",
      method:"POST",
      data:{
        token:token
      },
      success(res){
        var flag = res.data.isValid;
        //如果验证没有通过则重新去服务器换取令牌
       if(!flag){
            that.getTokenFromServer();
       }
      }
    })
  }
  //保存地址
  saveAddress(user){
    var that = this;
    var token = wx.getStorageSync('token');
    wx.request({
      url: that.baseUrl+'address',
      data:{
        name: user.userName,
        mobile: '18813158696',
        province: user.provinceName,
        city: user.cityName,
        country: user.countyName,
        detail: user.detailInfo
      },
      method:"POST",
      header: {
        token:token 
      },
      success(res){
        console.log(res)
      }
    })
  }
  getAddress(callback){
    var that = this;
    var token = wx.getStorageSync('token');
    wx.request({
      url: that.baseUrl + 'address',
      method: "GET",
      header: {
        token: token
      },
      success(res) {
        callback&&callback(res.data);
      }
    })
  }
}
export {Token};