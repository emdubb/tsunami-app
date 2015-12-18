(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("InfoController", InfoController);

    InfoController.$inject = ["$state", "$log"]

    function InfoController($state, $log) {
      var vm = this;

      vm.infoTest = "InfoController is working!"
    }
})();
