
sigfigApp.service('HttpServices', HttpServices);

function HttpServices($http) {
  this.put = function(url, obj, options) {
    return $http.put(url, obj, options).catch(function(err) {
      console.log(err);
    });
  }

  this.get = function(url) {
    return $http.get(url).catch(function(err) {
      console.log(err);
    });
  }

  this.delete = function(url) {
    return $http.delete(url).catch(function(err) {
      console.log(err);
    });
  }

  this.post = function(url, obj, options) {
    return $http.post(url, obj, options).catch(function(err){
      console.log(err);
    });
  }
}
