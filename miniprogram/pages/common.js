
/**
 * 页面跳转
 */
function navigateTo(event){
  console.log(event);
  var url = '';
  var name = event.currentTarget.dataset.name;
  if(name == 'faxian'){
    url = '/pages/index/index';
  }else if(name == 'person'){
    url = '/pages/person/person';
  }
  wx.navigateTo({
    url: url,
  })
}

module.exports.navigateTo = navigateTo;