console.log('main controller');

sigfigApp.controller('MainController', MainController)
function MainController($scope, $http) {
  var self = this;
  $scope.title = 'scope main';
  self.title = 'self main';
  var companyUrl = '/companies'
  $http.get(companyUrl).then(function(res){
    console.log(res);
  })
}