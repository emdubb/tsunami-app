(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("PrepareController", PrepareController);

    PrepareController.$inject = ["$state", "$log"]

    function PrepareController($state, $log) {
      var vm = this;

      vm.prepareTest = "PrepareController is working!"
    }
})();
