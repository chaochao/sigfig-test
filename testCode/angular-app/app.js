console.log("app.js");
var sigfigApp = angular.module('sigfigApp', ['ngRoute']);
sigfigApp.config(function($httpProvider) {
  $httpProvider.defaults.transformRequest = function(obj) {
    var str = [];
    for (var p in obj) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  };
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF8';
  $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF8';
});