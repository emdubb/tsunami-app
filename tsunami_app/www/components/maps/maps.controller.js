(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log", "$http", "$routeParams", "localStorageService"]

  function MapsController($state, $log, $http, $routeParams, localStorageService){

    var vm = this;
    vm.test = "test"
    vm.counties = ["San Diego"]
    vm.previewMap = previewMap;

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

    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/cities',
      contentType: 'application/json',
      headers: {
        'Authorization': localStorageService.loadData('token')
      }
    }).then(function successCallback(response){
      vm.cities = response.data.cities;
      $log.log(response.data)
    }, function errorCallback(response) {
      $log.debug(response)
    })

    function previewMap() {
      $log.log(vm.map)
      localStorageService.saveData('name', vm.cityName)
    }

  }

})();
