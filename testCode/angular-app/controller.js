console.log('main controller');
sigfigApp.controller('MainController', MainController)

function MainController($scope, $http) {
  $scope.company = {};
  $scope.compayList = [];
  var companiesUrl = '/companies'
  $http.get(companiesUrl).then(function(res) {
    $scope.compayList = res.data;
  }).catch(function(err) {
    console.log(err);
  });

  $scope.createCompany = function() {
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
      $http.post('/companies', newCompany).then(function(res) {
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
  var companyId = $routeParams.id;
  $scope.company = {};
  $scope.newPerson = {};
  var compayPeopleUrl = '/companies/' + companyId + '/people';
  $scope.companyPeopleList = [];

  $http.get('/companies/' + companyId).then(function(res) {
    $scope.company = res.data;
  })
  $http.get(compayPeopleUrl).then(function(res) {
    $scope.companyPeopleList = res.data;
    $scope.companyPeopleList.forEach(function(ele) {
      ele.companyName = $scope.company.name;
    })
  }).catch(function(err) {
    console.log(err);
  });

  $scope.createNewPerson = function() {
    var newPerson = $scope.newPerson;
    if (newPerson.name !== undefined && newPerson.email !== undefined) {
      newPerson.companyId = companyId;
      $http.post('/person', newPerson).then(function(res) {
        $scope.companyPeopleList.push(res.data);
        $scope.cancel();
      }).catch(function(err) {
        console.log(err);
      });
    }
  }
  $scope.cancel = function() {
    $scope.newPerson = {};
    $scope.newPerson.email = '';
  }



}