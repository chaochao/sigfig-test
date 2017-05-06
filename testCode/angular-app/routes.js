sigfigApp.config(routes);

function routes($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'angular-app/pages/main.html',
    controller: 'MainController as vm'
  })
  .otherwise({
    redirectTo: '/'
  })
}