(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapPreviewController", MapPreviewController)

  MapPreviewController.$inject = ["$state", "$log", "$http", "localStorageService", "mapsService"]

  function MapPreviewController($state, $log, $http, localStorageService, mapsService) {
    var vm = this;
    vm.mapTest = mapTest
    // vm.map_url = "img/ionic.png"




    // var url;
    //       var url = window.location.href;
    //   var id = url.substring(url.lastIndexOf('/') + 1);

    // var id;
    // var idInt;
    // var load = false;

    // function checkInt(data) {
    //   if (data === parseInt(data, 10)) {
    //     load = true
    //     console.log(load)
    //   } else {
    //     load = false
    //     console.log(load)
    //   }
    // }
    // while (load === false) {
    //   var url = window.location.href;
    //   var id = url.substring(url.lastIndexOf('/') + 1);
    //   var idInt = parseInt(id, 10)
    //   checkInt(idInt);
    // }
    // function loadIsh(){
    //   if (load === false) {
    //     checkInt(idInt)
    //   } else {
    //     loadMaps();
    //   }

    // }
    // loadIsh();

    // $log.log(mapsService.loadData("name"));
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/cities?name=' + mapsService.loadData("name"),
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

    // function loadMaps() {
    //   $http({
    //     method: 'GET',
    //     url:  'http://localhost:3000/api/maps/'+ id,
    //     contentType: "application/json",
    //     headers: {
    //       'Authorization': localStorageService.loadData('token')
    //       }
    //   }).then(function successCallback(response) {
    //       $log.debug(response.data);
    //       vm.map = response.data
    //       // vm.userMaps = response.data.maps
    //     }, function errorCallback(response) {
    //       $log.debug(response);
    //   });
    // }
    // loadMaps();
    function mapTest() {
      // var currentId = $routeParams.id;
      $log.log("add map!")
      // mapsService.getMap(vm.cityName).then(function(data){
      //   vm.map = data.data.cities[0].maps[0]
      //   $log.debug(vm.map);
      // });
    }

  }
})()
