(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log", "$http", "localStorageService", "urlFactory"]

  function MapsController($state, $log, $http, localStorageService, urlFactory){

    var vm = this;
    var url = urlFactory
    vm.counties = ["San Diego"]
    vm.previewMap = previewMap;

    $http({
      method: 'GET',
      url:  url + '/me',
      contentType: "application/json",
      headers: {
        'Authorization': localStorageService.loadData('token')
        }
    }).then(function successCallback(response) {
        $log.debug(response.data.maps);
        vm.user = response.data
        vm.userMaps = response.data.maps
        localStorageService.saveData('user', response.data.id)
      }, function errorCallback(response) {
        $log.debug(response);
    });

    $http({
      method: 'GET',
      url: url + '/cities',
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
      localStorageService.saveData('map', vm.map.id)
      $state.go("tab.map-preview", {"id": vm.map.id})
    }

  }

})();
