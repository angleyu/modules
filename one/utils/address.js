import {Base} from './base.js';
class Address extends Base {
  constructor(){
    super();
  }
  //对返回的地址信息进行拼接
  setAddressInfo(res){
    var province = res.provinceName,
        city = res.cityName,
        country = res.countyName,
        details = res.detailInfo;
    var totalDetails = city+country+details;
    if(!this.isCenterCity(province)){
      totalDetails = province + totalDetails
    }
    return totalDetails;
  }
  //过滤掉直辖市
  isCenterCity(name){
    var centerCity = ['北京市','天津市','上海市','重庆市'];
    if(centerCity.indexOf(name)==-1){
      return false;
    }else {
      return true;
    }
  }
  //提交地址
  submitAdress(res,callback){
    var data = this.setUpAddress(res);
    var parmas = {
        url:'address',
        method:"POST",
        data:data,
        sCallback:function(res){
          callback&&callback(res)
        }
    }
    this.request(parmas)
  }
  //转换名字
  setUpAddress(res){
    var formData = {
      name: res.userName,
      mobile: "13521646437",
      province: res.provinceName,
      city: res.cityName,
      country: res.countyName,
      detail: res.detailInfo
    }
    return formData;
  }
}
export {Address};