(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log", "localStorageService"]

  function MapsController($state, $log, localStorageService){
    var vm = this;

    vm.mapTest = "Map controller is working!"
  }

})();
