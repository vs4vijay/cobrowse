/** TogetherJS Configuration */

;(function(TogetherJS) {

  var configs = {
    toolName: 'CoBrowse',
    //hubBase: 'http://vijay.etechaces.com:1337/',
    dontShowClicks: true,
    cloneClicks: true,
    storagePrefix: 'cobrowse',
    //disableWebRTC: false,
    //getUserName: _getUserName,
    suppressInvite: true,
    suppressJoinConfirmation: true
  };

  for(var key in configs) {
    TogetherJS.config(key, configs[key]);
  };
  //TogetherJS.config('toolName', config.toolName);

  TogetherJS.on('ready', function() {
    document.querySelector('#togetherjs-container').style.display = 'none';
    var shareUrl = TogetherJS.shareUrl();
    _createCobrowseEvent(shareUrl);
    _addStyle();
  });

  TogetherJS.on('close', function() {
    var cobrowseEvent = document.createEvent('Event');
    cobrowseEvent.initEvent('Cobrowse.ended', true, true);
    console.info('[+] Cobrowse Session Ended');
    _removeStyle();
  });

  var _createCobrowseEvent = function(shareUrl) {
    var cobrowseEvent = document.createEvent('Event');
    cobrowseEvent.shareUrl = shareUrl;
    cobrowseEvent.initEvent('Cobrowse.started', true, true);
    window.dispatchEvent(cobrowseEvent);
  };

  var _addStyle = function() {
    document.body.style.border = '2px dashed green';

    window.cobrowseInterval = setInterval(function() {
      var border = document.body.style.border;
      if(border == '2px dashed green') {
        document.body.style.border = '2px dashed red';
      } else {
        document.body.style.border = '2px dashed green';
      }
    }, 200);
  };

  var _removeStyle = function() {
    document.body.style.border = '';

    if(window.cobrowseInterval) {
      clearInterval(window.cobrowseInterval);
    }
  };

  window.addEventListener('Cobrowse.started', function(obj) {
    console.log('start', obj);
    //document.getElementById('demoLabel').innerHTML = obj.shareUrl;
    console.info('[+] Got Share URL: ', obj.shareUrl);
  });

  window.demoClick = function(demoVar) {
    document.getElementById('demoTxt').value = 'Button Clicked ' + Math.floor(Math.random() * 100);
    console.info('demo click log');
  };

  window.startCobrowse = function(options) {
    TogetherJS(this);
    return false;
  };

})(TogetherJS);
