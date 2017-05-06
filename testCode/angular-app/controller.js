console.log('main controller');
sigfigApp.controller('MainController', MainController)

function MainController($scope, $http) {
  var self = this;
  $scope.title = 'scope main';
  
  var companyUrl = '/companies'
  $http.get(companyUrl).then(function(res) {
    console.log(res);
    $scope.compayList = res.data;
  }).catch(function(err) {
    console.log(err);
  });
}

sigfigApp.controller('CompanyPeopleController', CompanyPeopleController)
function CompanyPeopleController($scope, $http, $routeParams) {
  var self = this;
  var companyId = $routeParams.id;
  console.log("cpid",companyId);
}