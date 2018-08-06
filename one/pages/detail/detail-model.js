import {Base} from '../../utils/base.js';
class Detail extends Base {
  constructor(){
    super()
  }
  getDetailData(id,callBack){
    var parmas = {
      url:"/product/"+id,
      sCallback: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(parmas);
  }
}
export {Detail};