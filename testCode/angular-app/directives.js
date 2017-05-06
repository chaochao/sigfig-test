console.log("directive");
sigfigApp.directive('formatPhone', [
  function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, elem, attrs, ctrl, ngModel) {
        elem.add(phonenumber).on('keyup', function() {
          var origVal = elem.val().replace(/[^\w\s]/gi, '');
          console.log(origVal);
          if (origVal.length === 10) {
            var str = origVal.replace(/(.{3})/g, "$1-");
            var phone = str.slice(0, -2) + str.slice(-1);
            jQuery("#phonenumber").val(phone);
          }

        });
      }
    };
  }
]);