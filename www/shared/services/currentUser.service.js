(function(){
  "use strict"

  angular
    .module('tsunamiApp')
    .factory('currentUser', currentUser);

  currentUser.$inject = ["$log"];

  function currentUser($log){
    return {
      user: user,
      createUser: createUser,
      addMap: addMap
    }

    var user = {}

    function createUser(dbUser){
      user = dbUser
      return user
    }

    function addMap(dbMap){
      $log.log("adding map: ", dbMap)
      user.maps.unshift(dbMap)
    }
  }

})()
