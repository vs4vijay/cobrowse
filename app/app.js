/** TogetherJS Configuration */

(function(TogetherJS) {

  var configs = {
    toolName: 'CoBrowse',
    hubBase: 'http://vijay.etechaces.com:1337/',
    dontShowClicks: true,
    cloneClicks: true,
    storagePrefix: 'cobrowse',
    //disableWebRTC: false,
    //suppressJoinConfirmation: true,
    getUserName: _getUserName
  };

  for(var key in configs) {
    TogetherJS.config(key, configs[key]);
  };
  //TogetherJS.config('toolName', config.toolName);

  var _getUserName = function(username) {
    alert(username);
  };

  window.demoClick = function(demoVar) {
    console.log('demo click log');
  };

  window.startCobrowse = function(options) {
    TogetherJS(this);
    return false;
  };

})(TogetherJS);
