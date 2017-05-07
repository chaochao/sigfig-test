sigfigApp.controller('MainController', MainController)

function MainController($scope, HttpServices) {
  $scope.company = {};
  $scope.compayList = [];
  var companiesUrl = '/companies'
  HttpServices.get(companiesUrl).then(function(res) {
    $scope.compayList = res.data;
  });

  $scope.createCompany = function() {
    var name = $scope.company.name;
    var address = $scope.company.address;
    var revenue = $scope.company.revenue;
    var phone = $scope.company.phone;
    if (name !== undefined &&
      address !== undefined &&
      revenue !== undefined &&
      phone !== undefined) {
      // may not needed
      var newCompany = {
        "name": name,
        "address": address,
        "revenue": revenue,
        "phone": phone
      };
      HttpServices.post('/companies', newCompany).then(function(res) {
        $scope.compayList.push(res.data);
        $scope.cancel();
      });
    }
  }
  $scope.cancel = function() {
    $scope['company'] = {};
    $scope.company.phone = '';
  }
}

sigfigApp.controller('CompanyPeopleController', CompanyPeopleController)

function CompanyPeopleController($scope, $routeParams, HttpServices) {
  var companyId = $routeParams.id;
  $scope.company = {};
  $scope.newPerson = {};
  var compayPeopleUrl = '/companies/' + companyId + '/people';
  $scope.companyPeopleList = [];

  HttpServices.get('/companies/' + companyId).then(function(res) {
    $scope.company = res.data;
  })
  HttpServices.get(compayPeopleUrl).then(function(res) {
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
      HttpServices.post('/person', newPerson).then(function(res) {
        res.data.companyName = $scope.company.name;
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

sigfigApp.controller('PeopleProfileController', PeopleProfileController)

function PeopleProfileController($scope, $routeParams, $location, HttpServices) {
  var personId = $routeParams.id;
  var companyName = $routeParams.companyName;
  $scope.showEdit = false;
  $scope.person = {};
  $scope.tempPerson = {};
  $scope.companyList = {};
  var personUrl = '/person/' + personId;
  HttpServices.get('/companies').then(function(res) {
    $scope.companyList = res.data;
  })
  HttpServices.get(personUrl).then(function(res) {
    $scope.person = res.data;
    $scope.person.companyName = companyName;
    $scope.tempPerson = {
      name: $scope.person.name,
      email: $scope.person.email,
      companyId: $scope.person.companyId,
    };
  });

  $scope.editPerson = function() {
    if ($scope.tempPerson.name !== undefined &&
      $scope.tempPerson.email !== undefined &&
      $scope.tempPerson.companyId !== undefined) {
      var personUrl = '/person/' + $scope.person._id;
      HttpServices.put(personUrl, $scope.tempPerson).then(function(res) {
        $location.path('/companies/' + $scope.tempPerson.companyId);
      });
      $scope.showEdit = false;
    }
  }

  $scope.deltePerson = function() {
    if (confirm('Do you want to delete this person?')) {
      HttpServices.delete('/person/' + $scope.person._id).then(function(res) {
        $location.path('/companies/' + $scope.person.companyId);
      });
    }
  }
}

sigfigApp.controller('CompanyProfileController', CompanyProfileController)

function CompanyProfileController($scope, $routeParams, $location, HttpServices) {
  var companyId = $routeParams.id;
  $scope.company = {};
  console.log(companyId);
  var companyUrl = '/companies/' + companyId;
  HttpServices.get(companyUrl).then(function(res) {
      console.log(res);
      $scope.company = res.data;
    })

  $scope.saveCompany = function() {
    var name = $scope.company.name;
    var address = $scope.company.address;
    var revenue = $scope.company.revenue;
    var phone = $scope.company.phone;
    if (name !== undefined &&
      address !== undefined &&
      revenue !== undefined &&
      phone !== undefined) {
      console.log("scopr comp",$scope.company);
      HttpServices.put(companyUrl, $scope.company).then(function(res) {
        $location.path('#!/');
      })
    }
  }

}