(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "$log", "$http", "localStorageService"]

  function LoginController($state, $log, $http, localStorageService) {
    var vm = this;

    vm.test = "controller linked!"
    vm.login = login;
    vm.user = {
      email:    "",
      password: ""
    }
    vm.token = ""

    function login() {
      $log.debug(vm.user.email, vm.user.password);

      if (vm.user.email && vm.user.password) {
        $log.debug("credentials valid!");

        $http({
          method: 'POST',
          url:  'http://localhost:3000/api/token',
          contentType: "application/json",
          data: {
            user: {
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
        $log.debug("invalid credentials");
        vm.message = "Invalid credentials! Try again."
      }
    }
  }
})()
