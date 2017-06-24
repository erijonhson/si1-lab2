'use strict';

angular.
  module('serieList').
  component('findSerieList', {
    templateUrl: 'serie-list/find-serie-list.template.html',
    controller: ['$http', 'userService', 
    function FindSerieListController($http, userService) {
      var ctrl = this;
      var omdbGetSerie = 'https://omdbapi.com/?s=TITLE&apikey=93330d3c&type=series';

      ctrl.query = '';

      ctrl.series = {
        list: userService.getSerieList()
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

    }]
  });
