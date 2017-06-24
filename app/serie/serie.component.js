'use strict';
 
angular.
  module('serie').
  component('serie', {
    templateUrl: 'serie/serie.template.html',
    controller: ['$http', 'userService',
      function serieController($http, userService) {
        var ctrl = this;
        var omdbGetSerie = 'https://omdbapi.com/?i=IMDBID&apikey=93330d3c&type=series';
 
        ctrl.query = '';
 
        ctrl.serie;

        ctrl.buscarSeries = function() {
          $http.get(omdbGetSerie.replace('IMDBID', ctrl.serie.imdbID))
            .success(function (data){
              ctrl.serie = data;
              userService.atualizarSerie(serie);
            })
            .error(function (error, status){
              alert('Erro: ' + error);
            });
        }
    }],
    bindings: {
      serie: '<' // '@?', '&', '=' 
    }
  });
 