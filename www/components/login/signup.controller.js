(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("SignupController", SignupController);

  SignupController.$inject = ["$state", "$log", "$http", "localStorageService"]

  function SignupController($state, $log, $http, localStorageService) {
    var vm = this;

    vm.test = "controller linked!"
    vm.signUp = signUp;
    vm.user = {
      fname:    "",
      lname:    "",
      email:    "",
      password: "",
      password_confirm: ""
    }
    vm.token = ""

    function signUp() {
      $log.debug(vm.user.fname, vm.user.lname);

      vm.user = {
              fname: vm.user.fname,
              lname: vm.user.lname,
              email: vm.user.email,
              password: vm.user.password
            }

      $log.debug(vm.user)

      if (vm.user.email && vm.user.password && vm.user.fname && vm.user.lname) {
        $http({
          method: 'POST',
          url: 'http://107.170.252.219/api/users',
          contentType: "application/json",
          data: {
            user: {
              fname: vm.user.fname,
              lname: vm.user.lname,
              email: vm.user.email,
              password: vm.user.password
            }
          }
        }).then(function successCallback(response) {
          $log.debug(response.data.token);
          localStorageService.saveData('token', response.data.token)
          $state.go("tab.maps")
        }, function errorCallback(response) {
          $log.debug(response);
        });
      } else {
        vm.message = "Please fill out all fields"
        $log.debug("Please fill out all fields");
      }
    }
  }
})()
