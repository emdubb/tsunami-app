(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log"]

  function MapsController($state, $log){
    var vm = this;

    vm.mapTest = "Map controller is working!"
  }

})();
