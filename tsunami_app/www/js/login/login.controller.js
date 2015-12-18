(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "$log", "$http"]

  function LoginController($state, $log, $http) {
    var vm = this;

    vm.test = "controller linked!"
    vm.login = login;
    vm.user = {
      email:    "",
      password: ""
    }

    function login() {
      $log.debug(vm.user.email, vm.user.password);

      if (vm.user.email && vm.user.password) {
        $log.debug("credentials valid!");
        // var userParams = {
        //   user: {
        //       email: vm.user.email,
        //       password: vm.user.password
        //     }
        //   }

        // function reqListener () {
        //   $log.debug(this.responseText);
        // }

        // var req = new XMLHttpRequest(userParams);

        // req.addEventListener("load", reqListener);
        // req.open("POST", "http://localhost:3000/api/token");
        // req.send();

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
          $log.debug(response);
        }, function errorCallback(response) {
          $log.debug(response);
        });
      } else {
        $log.debug("invalid credentials");
      }
    }
  }
})()
