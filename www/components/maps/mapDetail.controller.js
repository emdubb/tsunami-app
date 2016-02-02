(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapDetailController", MapDetailController);

  MapDetailController.$inject = ["$state", "$log", "$http", "localStorageService", "urlFactory"];

  function MapDetailController($state, $log, $http, localStorageService, urlFactory) {
    var vm = this;
    var url = urlFactory

    $http({
      method: 'GET',
      url: url + '/maps/' + localStorageService.loadData('map'),
      contentType: 'application/json',
      headers: {
        'Authorization': localStorageService.loadData('token')
      }
    }).then(function successCallback(response){
      vm.map = response.data
      $log.log("map: ", vm.map)
      angular.element(document.querySelector('#map-detail')).css({
            'background-image': 'url(' + vm.map.map_url +')'
        });
    }, function errorCallback(error){
      $log.log(error)
    })

  }
})();
