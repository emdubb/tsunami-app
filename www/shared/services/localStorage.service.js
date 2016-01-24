(function(){
  "use strict";

  angular
    .module("tsunamiApp")
    .factory("localStorageService", localStorageService);

  localStorageService.$inject = ["$window"];

  function localStorageService($window) {
    return {
      loadData: loadData,
      saveData: saveData
    };

    function loadData(value) {
      return JSON.parse($window.localStorage.getItem(value));
    }

    function saveData(value, data) {
      $window.localStorage.setItem(value, JSON.stringify(data));
    }

  }
})();
