'use strict';

// Registrar componente `watchList`
angular.
  module('user').
  component('watchlist', {
    templateUrl: 'user/watchlist.template.html',
    controller: ['userService',
      function userController(userService) {
        var ctrl = this;
        ctrl.watchList = userService.watchList;
    }]
  });
