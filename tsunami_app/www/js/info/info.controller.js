(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("InfoController", InfoController);

    InfoController.$inject = ["$state", "$log", "$http", "localStorageService"]

    function InfoController($state, $log, $http, localStorageService) {
      var vm = this;

      $http({
        method: 'GET',
        url:  'http://localhost:3000/api/me',
        contentType: "application/json",
        headers: {
          'Authorization': localStorageService.loadData('token')
          }
      }).then(function successCallback(response) {
          $log.debug(response.data);
          vm.user = response.data
        }, function errorCallback(response) {
          $log.debug(response);
        });

    }
})();
