(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapsController", MapsController);

  MapsController.$inject = ["$state", "$log", "$http", "$scope", "$ionicModal", "$ionicPopup", "$ionicScrollDelegate", "localStorageService", "urlFactory", "currentUser"]

  function MapsController($state, $log, $http, $scope, $ionicModal, $ionicPopup, $ionicScrollDelegate, localStorageService, urlFactory, currentUser){

    var vm = this;
    var url = urlFactory
    vm.counties = ["San Diego"]
    vm.previewMap = previewMap
    vm.showMap = showMap
    vm.user = currentUser.user
    vm.addMap = addMap

    $http({
      method: 'GET',
      url:  url + '/me',
      contentType: "application/json",
      headers: {
        'Authorization': localStorageService.loadData('token')
        }
    }).then(function successCallback(response) {
        vm.user = currentUser.createUser(response.data)
        localStorageService.saveData('user', response.data.id)
        $log.log('current user: ', vm.user)
      }, function errorCallback(response) {
        $log.debug(response);
    });

    $http({
      method: 'GET',
      url: url + '/cities',
      contentType: 'application/json',
      headers: {
        'Authorization': localStorageService.loadData('token')
      }
    }).then(function successCallback(response){
      vm.cities = response.data.cities;
      $log.log("All cities: ", vm.cities)
    }, function errorCallback(response) {
      $log.debug(response)
    })

    function previewMap() {
      localStorageService.saveData("map", vm.map.id)
      $state.go("tab.map-preview", {"id": vm.map.id})
    }

    function showMap(id) {
      localStorageService.saveData("map", id)
      $state.go("tab.map-detail", {"id": id})
    }

    // ====================
    // Show Maps
    // ====================

    $ionicModal.fromTemplateUrl('components/maps/mapDetailModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.detailModalodal = modal;
      });
      $scope.openDetailModal = function(map) {
        vm.mapDetail = map
        $scope.detailModalodal.show();
      };
      $scope.closeDetailModal = function() {
        $scope.detailModalodal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.detailModalodal.remove();
      });
      // Execute action on hide modal
      $scope.$on('detailModalodal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('detailModalodal.removed', function() {
        // Execute action
      });

    // ====================
    // Preview Maps
    // ====================

    $ionicModal.fromTemplateUrl('components/maps/mapPreviewModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.previewModal = modal;
      });
      $scope.openPreviewModal = function() {
        $scope.previewModal.show();
      };
      $scope.closePreviewModal = function() {
        $scope.previewModal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.previewModal.remove();
      });
      // Execute action on hide modal
      $scope.$on('previewModal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('previewModal.removed', function() {
        // Execute action
      });

      function addMap() {
        $log.log("add map!")
        $http({
          method: 'PATCH',
          url: url + '/users/' + localStorageService.loadData("user") + '?map_id=' + vm.previewMap.id + '&add=true',
          contentType: 'application/json',
          headers: {
            'Authorization': localStorageService.loadData('token')
          }
        }).then(function successCallback(response){
          var alertPopup = $ionicPopup.alert({
            title: 'Map successfully saved!',
          });
          currentUser.addMap(vm.previewMap)
          alertPopup.then(function(res) {
            // $state.go('tab.maps')
            vm.showme = !vm.showme
            $scope.closePreviewModal()
            // $ionicScrollDelegate.scrollTop();
          });
        }, function errorCallback(response){
          var alertPopup = $ionicPopup.alert({
            title: 'Uh oh, something went wrong! Please try again.',
          });
        });
       };

  }

})();
