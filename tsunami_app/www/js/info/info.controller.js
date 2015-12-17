(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("InfoController", InfoController);

    InfoController.$inject = ["$state", "$log"]

    function InfoController($state, $log) {
      var vm = this;

      vm.infoTest = infoTest
      var infoTest = "InfoController is working!"
    }
})();
