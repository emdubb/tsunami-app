(function(){
  "use strict"

  angular
    .module("tsunamiApp")
    .controller("MapPreviewController", MapPreviewController)

  MapPreviewController.$inject = ["$state", "$log", "$http", "$ionicPopup", "localStorageService"]

  function MapPreviewController($state, $log, $http, $ionicPopup, localStorageService) {
    var vm = this;
    vm.mapTest = mapTest
    vm.mapPreview

    $http({
      method: 'GET',
      url: 'http://107.170.252.219/api/maps/' + localStorageService.loadData('map'),
      contentType: 'application/json',
      headers: {
        'Authorization': localStorageService.loadData('token')
      }
    }).then(function successCallback(response){
      $log.log(response.data)
      vm.mapPreview = response.data
      angular.element(document.querySelector('#map-preview')).css({
            'background-image': 'url(' + vm.mapPreview.map_url +')'
        });
    }, function errorCallback(response){
      $log.log(response)
    })

    function mapTest() {
      $log.log("add map!")
      $http({
        method: 'PATCH',
        url: 'http://107.170.252.219/api/users/' + localStorageService.loadData("user") + '?map_id=' + vm.mapPreview.id + '&add=true',
        contentType: 'application/json',
        headers: {
          'Authorization': localStorageService.loadData('token')
        }
      }).then(function successCallback(response){
        var alertPopup = $ionicPopup.alert({
          title: 'Map successfully saved!',
        });
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
