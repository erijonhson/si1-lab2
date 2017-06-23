'use strict';

// Registrar componente `serieList`
angular.
  module('serieList').
  component('serieListing', {
    templateUrl: 'serie-list/serie-listing.template.html',
    controller: ['userService',
      function SerieListingController(userService) {
        var ctrl = this;

      ctrl.ehSerieDeUsuario = function(serie) {
        return userService.ehSerieDeUsuario(serie);
      }

      ctrl.adicioneSerieDeUsuario = function(serie) {
        userService.adicioneSerieDeUsuario(serie);
      }

      ctrl.removeSerieDeUsuario = function(serie) {
        userService.removeSerieDeUsuario(serie);
      }

      ctrl.ehWatchList = function(serie) {
        return userService.ehWatchList(serie);
      }

      ctrl.adicioneWatchList = function(serie) {
        userService.adicioneWatchList(serie);
      }

      ctrl.removeWatchList = function(serie) {
        userService.removeWatchList(serie);
      }

    }],
    bindings: {
      series: '<' // '@?', '&', '=' 
    }
  });
