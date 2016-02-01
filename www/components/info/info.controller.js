(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("InfoController", InfoController);

    InfoController.$inject = ["$state", "$log", "$http", "localStorageService", "urlFactory"]

    function InfoController($state, $log, $http, localStorageService, urlFactory) {
      var vm = this;
      var url = urlFactory

      $http({
        method: 'GET',
        url:  url + '/me',
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
