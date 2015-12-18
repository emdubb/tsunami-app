(function(){
  "use strict";

  angular
    .module("tsunamiApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.maps', {
        url: '/maps',
        views: {
          'tab-maps': {
            templateUrl: 'templates/tab-maps.html',
            controller: 'MapsController',
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.mapDetail', {
        url: '/map/:mapId',
        views: {
          'tab-maps-detail': {
            templateUrl: 'templates/map-detail.html',
            controller: 'MapsController',
            controllerAs: "vm"
          }
        }
      })
    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html',
          controller: 'InfoController',
          controllerAs: "vm"
        }
      }
    })
    .state('tab.prepare', {
      url: '/prepare',
      views: {
        'tab-prepare': {
          templateUrl: 'templates/tab-prepare.html',
          controller: 'PrepareController',
          controllerAs: "vm"
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  }

})();
