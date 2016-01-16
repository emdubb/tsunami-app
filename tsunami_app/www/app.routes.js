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
        templateUrl: 'components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'components/login/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'shared/tabs/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.maps', {
        url: '/maps',
        views: {
          'tab-maps': {
            templateUrl: 'components/maps/tab-maps.html',
            controller: 'MapsController',
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.map-detail', {
        url: '/maps/coronado',
        // url: '/maps/:mapId',
        views: {
          'tab-maps': {
            templateUrl: 'components/maps/map-detail.html',
            controller: 'MapsController',
            controllerAs: "vm"
          }
        }
      })
      .state('tab.map-preview', {
        url: '/maps/preview/:id',
        views: {
          'tab-maps': {
            templateUrl: 'components/maps/map-preview.html',
            controller: 'MapPreviewController',
            controllerAs: "vm"
          }
        }
      })
    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'components/info/tab-info.html',
          controller: 'InfoController',
          controllerAs: "vm"
        }
      }
    })
    .state('tab.prepare', {
      url: '/prepare',
      views: {
        'tab-prepare': {
          templateUrl: 'components/prepare/tab-prepare.html',
          controller: 'PrepareController',
          controllerAs: "vm"
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  }

})();
