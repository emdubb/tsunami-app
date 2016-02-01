(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log", "$http", "localStorageService", "urlFactory", "currentUser"]

  function MapsController($state, $log, $http, localStorageService, urlFactory, currentUser){

    var vm = this;
    var url = urlFactory
    vm.counties = ["San Diego"]
    vm.previewMap = previewMap;
    vm.user = currentUser.user

    $http({
      method: 'GET',
      url:  url + '/me',
      contentType: "application/json",
      headers: {
        'Authorization': localStorageService.loadData('token')
        }
    }).then(function successCallback(response) {
        vm.user = currentUser.createUser(response.data)
        localStorageService.saveData('user', response.data.id)
        $log.log('current user: ', vm.user)
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
      $log.log("All cities: ", vm.cities)
    }, function errorCallback(response) {
      $log.debug(response)
    })

    function previewMap() {
      localStorageService.saveData('map', vm.map.id)
      $state.go("tab.map-preview", {"id": vm.map.id})
    }

  }

})();
