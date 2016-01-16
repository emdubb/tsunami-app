(function(){
  "use strict";

  angular
    .module("tsunamiApp")
    .factory("mapsService", mapsService);

  mapsService.$inject = ["$http", "$window", "localStorageService", "$log"];

  function mapsService($http, $window, localStorageService, $log) {

    return {
      saveData: saveData,
      loadData: loadData
    };

    function saveData(value, data) {
      $window.localStorage.setItem(value, JSON.stringify(data));
    }

    function loadData(value) {
      return JSON.parse($window.localStorage.getItem(value));
    }

    // function getMap(name) {
    //   return $http({
    //     method: 'GET',
    //     url: 'http://localhost:3000/api/cities?name=' + name,
    //     contentType: 'application/json',
    //     headers: {
    //       'Authorization': localStorageService.loadData('token')
    //     }
    //   }).then(function successCallback(response){
    //     return response
    //   }, function errorCallback(response){
    //     return response
    //   })
    // }

    // function loadMap() {

    // }

  }
})();
