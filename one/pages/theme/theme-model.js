import {Base} from '../../utils/base.js';
class Theme extends Base{
  constructor() {
    super();
  }
  getThemeData(themeUrl,callBack){
    var parmas = {
      url: themeUrl,
      sCallback: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(parmas);
  }
}

export {Theme};