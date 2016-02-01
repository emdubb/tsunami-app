(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapPreviewController", MapPreviewController)

  MapPreviewController.$inject = ["$state", "$log", "$http", "$ionicPopup", "localStorageService", "urlFactory", "currentUser"]

  function MapPreviewController($state, $log, $http, $ionicPopup, localStorageService, urlFactory, currentUser) {
    var vm = this;
    var url = urlFactory
    vm.addMap = addMap
    vm.mapPreview = {}

    $http({
      method: 'GET',
      url: url + '/maps/' + localStorageService.loadData('map'),
      contentType: 'application/json',
      headers: {
        'Authorization': localStorageService.loadData('token')
      }
    }).then(function successCallback(response){
      vm.mapPreview = response.data
      $log.log("map: ", vm.mapPreview)
      angular.element(document.querySelector('#map-preview')).css({
            'background-image': 'url(' + vm.mapPreview.map_url +')'
        });
    }, function errorCallback(response){
      $log.log(response)
    })

    function addMap() {
      $log.log("add map!")
      $http({
        method: 'PATCH',
        url: url + '/users/' + localStorageService.loadData("user") + '?map_id=' + vm.mapPreview.id + '&add=true',
        contentType: 'application/json',
        headers: {
          'Authorization': localStorageService.loadData('token')
        }
      }).then(function successCallback(response){
        var alertPopup = $ionicPopup.alert({
          title: 'Map successfully saved!',
        });
        currentUser.addMap(vm.mapPreview)
        alertPopup.then(function(res) {
          $state.go('tab.maps')
        });
      }, function errorCallback(response){
        var alertPopup = $ionicPopup.alert({
          title: 'Uh oh, something went wrong! Please try again.',
        });
      });
     };

  }
})()
