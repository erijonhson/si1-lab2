'use strict';

// Registrar componente `serieList`
angular.
  module('serieList').
  component('findSerieList', {
    templateUrl: 'serie-list/find-serie-list.template.html',
    controller: ['$http', function FindSerieListController($http) {
      var ctrl = this;
      var omdbGetSerie = 'https://omdbapi.com/?s=TITLE&apikey=93330d3c&type=series';

      ctrl.query = '';

      ctrl.series = {
        list: []
      };

      ctrl.buscarSeries = function() {
        $http.get(omdbGetSerie.replace('TITLE', ctrl.query))
          .success(function (data){
            ctrl.series.list = data.Search;
          })
          .error(function (error, status){
            alert('Erro: ' + error);
          });
        }

      ctrl.buscaVazia = function() {
        return ctrl.series.list.lenght == 0;
      }

    }],
    bindings: {
      query: '<', // '@?', '&', '=' 
      series: '<'
    }
  });
