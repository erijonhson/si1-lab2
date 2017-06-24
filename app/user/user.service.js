'use strict';

// Registrar serviços de `user` 
angular.
  module('user').
  service('userService', [function () {

    var ctrl = this;

    ctrl.serieList = {
      list: []
    }

    ctrl.watchList = {
      list: []
    }

    ctrl.getSerieList = function() {
      return ctrl.serieList.list;
    }

    ctrl.ehSerieDeUsuario = function(serie) {
      return buscaSerie(ctrl.serieList.list, serie);
    }

    ctrl.adicioneSerieDeUsuario = function(serie) {
  		ctrl.serieList.list.push(serie);
      if (ctrl.ehWatchList(serie))
        ctrl.removeWatchList(serie);
    }

    ctrl.removeSerieDeUsuario = function(serie) {
      return removeSerie(ctrl.serieList.list, serie);
    }

    ctrl.ehWatchList = function(serie) {
      return buscaSerie(ctrl.watchList.list, serie);
    }

    ctrl.adicioneWatchList = function(serie) {
      ctrl.watchList.list.push(serie);
    }

    ctrl.removeWatchList = function(serie) {
      return removeSerie(ctrl.watchList.list, serie);
    }

    ctrl.atualizarSerie = function(serie) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].imdbID === serie.imdbID) {
          list[i] = serie;
        }
      }
    }

    function buscaSerie(list, serie) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].imdbID === serie.imdbID)
          return true;
      }
      return false;
    }

    function removeSerie(list, serie){
      for (var i = 0; i < list.length; i++) {
        if (list[i].imdbID === serie.imdbID) {
          list.splice(i,1);
          return true;
        }
      }
      return false;
    }

}]);
