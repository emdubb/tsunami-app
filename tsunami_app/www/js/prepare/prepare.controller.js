(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("PrepareController", PrepareController);

    PrepareController.$inject = ["$state", "$log", "localStorageService"]

    function PrepareController($state, $log, localStorageService) {
      var vm = this;

      vm.prepareTest = "PrepareController is working!"
    }
})();
