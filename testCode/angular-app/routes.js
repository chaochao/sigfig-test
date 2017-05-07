sigfigApp.config(routes);

function routes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/pages/main.html',
      controller: 'MainController as vm'
    })
    .when('/companies/:id', {
      templateUrl: 'angular-app/pages/people-in-company.html',
      controller: 'CompanyPeopleController as vm'
    })
    .when('/companies/:id/edit', {
      templateUrl: 'angular-app/pages/company-profile.html',
      controller: 'CompanyProfileController as vm'
    })
    .when('/people/:id', {
      templateUrl: 'angular-app/pages/person-profile.html',
      controller: 'PeopleProfileController as vm'
    })
    .otherwise({
      redirectTo: '/'
    })
}