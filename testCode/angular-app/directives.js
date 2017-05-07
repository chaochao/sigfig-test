console.log("directive");
sigfigApp.directive('card', card);
function card(){
  return {
    restrict: 'E',
    templateUrl:'angular-app/directives/company-card.html',
    replace: true,
    scope:{
      company: '=',
    }
  }
}