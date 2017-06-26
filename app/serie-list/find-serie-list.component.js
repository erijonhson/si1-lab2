'use strict';

angular.
  module('serieList').
  component('findSerieList', {
    templateUrl: 'serie-list/find-serie-list.template.html',
    controller: ['$http', 'userService', 
    function FindSerieListController($http, userService) {

      var ctrl = this;

      var omdbGetSeries = 'https://omdbapi.com/?s=TITLE&apikey=93330d3c&type=series';

      ctrl.query = '';

      ctrl.series = {
        list: userService.getSerieList()
      };

      ctrl.buscarSeries = function() {
        $http.get(omdbGetSeries.replace('TITLE', ctrl.query))
          .success(function (data){
            ctrl.series.list = data.Search;
          })
          .error(function (response, error){
            alert('Erro: ' + error);
          });
        }

    }]
  });
