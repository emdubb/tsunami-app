(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapPreviewController", MapPreviewController)

  MapPreviewController.$inject = ["$state", "$log", "$http", "localStorageService"]

  function MapPreviewController($state, $log, $http, localStorageService) {
    var vm = this;
    vm.mapTest = mapTest

    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/cities?name=' + localStorageService.loadData('name'),
      contentType: 'application/json',
      headers: {
        'Authorization': localStorageService.loadData('token')
      }
    }).then(function successCallback(response){
      $log.log(response.data.cities[0].maps[0].map_url)
      var map_url = response.data.cities[0].maps[0].map_url
      angular.element(document.querySelector('#map-preview')).css({
            'background-image': 'url(' + map_url +')'
        });
    }, function errorCallback(response){
      $log.log(response)
    })

    function mapTest() {
      $log.log("add map!")
    }

  }
})()
