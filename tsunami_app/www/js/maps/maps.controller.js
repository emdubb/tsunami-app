(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log", "$http", "localStorageService"]

  function MapsController($state, $log, $http, localStorageService){
    var vm = this;
    vm.mapTest = "we linked!"
    $http({
      method: 'GET',
      url:  'http://localhost:3000/api/me',
      contentType: "application/json",
      headers: {
        'Authorization': localStorageService.loadData('token')
        }
    }).then(function successCallback(response) {
        $log.debug(response.data.maps);
        vm.user = response.data
        vm.userMaps = response.data.maps
      }, function errorCallback(response) {
        $log.debug(response);
      });


  }

})();
