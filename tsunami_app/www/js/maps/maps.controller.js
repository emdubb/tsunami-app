(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log", "$http", "$routeParams", "localStorageService", "mapsService"]

  function MapsController($state, $log, $http, $routeParams, localStorageService, mapsService){

    var vm = this;
    vm.test = "test"
    vm.counties = ["San Diego"]
    vm.previewMap = previewMap;

    // vm.map = {id: "", map_name: "", map_type: "", map_url: ""}

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
    }, function errorCallback(response) {
      $log.debug(response)
    })

    function previewMap() {

      mapsService.saveData("name", vm.cityName)
      // $state.go("tab.map-preview", {"id": vm.map.id})
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/cities?name=' + vm.cityName,
        contentType: 'application/json',
        headers: {
          'Authorization': localStorageService.loadData('token')
        }
      }).then(function successCallback(response){
        vm.map = response.data.cities[0].maps[0]
        $log.debug(vm.map)
        if (vm.map) {
          $state.go("tab.map-preview", {"id": vm.map.id})
        }
      }, function errorCallback(response){
        $log.debug(response)
      })

      // $log.log(vm.cityName);
      // mapsService.getMap(vm.cityName).then(function(data){
      //   vm.map = data.data.cities[0].maps[0]
      //   $log.debug(vm.map);
      // }).then(function(data){
      //   $state.go("tab.map-preview", {"id": vm.map.id})
      // });


    }

  }

})();
