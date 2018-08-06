import {Base} from '../../utils/base.js';
class sort extends Base {
  constructor(){
    super();
  }
  getSortData(callBack){
    var parmas = {
      url: "category/all",
      sCallback: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(parmas);
  }

  getSortIdData(id,callBack) {
    var parmas = {
      url: "product/by_category?id="+id,
      sCallback: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(parmas);
  }
}

export {sort};