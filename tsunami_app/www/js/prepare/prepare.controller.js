(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("PrepareController", PrepareController);

    PrepareController.$inject = ["$state", "$log"]

    function PrepareController($state, $log) {
      var vm = this;

      vm.prepareTest = prepareTest
      var prepareTest = "PrepareController is working!"
    }
})();
