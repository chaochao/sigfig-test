sigfigApp.config(routes);

function routes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/pages/main.html',
      controller: 'MainController as vm'
    })
    .when('/companies/:id', {
      templateUrl: 'angular-app/pages/company.html',
      controller: 'CompanyController as vm'
    })
    .otherwise({
      redirectTo: '/'
    })
}