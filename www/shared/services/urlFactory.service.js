(function(){
  "use strict"

  angular
    .module('tsunamiApp')
    .factory('urlFactory', urlFactory);

    urlFactory.$inject = [];

    function urlFactory() {
      return "http://localhost:3000/api"
      // return "http://107.170.252.219/api"
    }

})()
