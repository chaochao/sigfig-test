console.log('main controller');
sigfigApp.controller('MainController', MainController)

function MainController($scope, $http) {
  var self = this;
  $scope.company = {};
  var companyUrl = '/companies'
  $http.get(companyUrl).then(function(res) {
    console.log(res);
    $scope.compayList = res.data;
  }).catch(function(err) {
    console.log(err);
  });

  $scope.createCompany = function() {
    // post 
    var name = $scope.company.name;
    var address = $scope.company.address;
    var revenue = $scope.company.revenue;
    var phone = $scope.company.phone;
    if (name !== undefined && address !== undefined && revenue !== undefined && phone !== undefined) {
      var newCompany = {
        "name": name,
        "address": address,
        "revenue": revenue,
        "phone": phone
      };
      console.log(newCompany);
      $http.post('/companies', newCompany).then(function(res) {
        console.log("res",res);
        $scope.compayList.push(res.data);
        $scope.cancel();
      }).catch(function(err) {
        console.log(err);
      });
    }



  }
  $scope.cancel = function() {
    $scope['company'] = {};
    $scope.company.phone = '';
  }
}

sigfigApp.controller('CompanyPeopleController', CompanyPeopleController)

function CompanyPeopleController($scope, $http, $routeParams) {
  var self = this;
  var companyId = $routeParams.id;
  console.log("cpid", companyId);
}