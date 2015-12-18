(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("InfoController", InfoController);

    InfoController.$inject = ["$state", "$log", "localStorageService"]

    function InfoController($state, $log, localStorageService) {
      var vm = this;

      vm.infoTest = "InfoController is working!"
    }
})();
