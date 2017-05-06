console.log("app.js");
var sigfigApp = angular.module('sigfigApp',['ngRoute']);
sigfigApp.config(function($httpProvider){
  $httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded; charset=UTF8';
  $httpProvider.defaults.headers.put['Content-Type']='application/x-www-form-urlencoded; charset=UTF8';
});

