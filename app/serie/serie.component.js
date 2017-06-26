'use strict';

angular.
  module('serie').
  component('serie', {
    templateUrl: 'serie/serie.template.html',
    controller: ['$http', '$routeParams', 'userService',
      function serieController($http, $routeParams, userService) {

        var ctrl = this;

        var omdbGetSerie = 'https://omdbapi.com/?i=IMDBID&apikey=93330d3c&type=series';

        ctrl.imdbID = $routeParams.imdbID;

        ctrl.serieObj;

        ctrl.buscarSerie = function() {
          var serie = userService.getSerie(ctrl.imdbID);
          serie.nota;
          serie.temporada;
          serie.epsodio;
          if (serie != null && serie.Plot != null)
            return serie;

          $http.get(omdbGetSerie.replace('IMDBID', ctrl.imdbID))
            .success(function (data){
              if (data.Response === 'False')
                alert('Erro: ' + data.Error);
              else {
                ctrl.serieObj = data;
                return ctrl.serieObj;
              }
            })
            .error(function (data){
              alert('Erro: ' + data.error);
              return null;
            });
          }

        ctrl.ehSerieValida = function() {
          return ctrl.serieObj != null;
        }

        ctrl.openModal = function() {
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector))
          }

        // hack
        var forceCall = ctrl.buscarSerie();

    }],
    bindings: {
      serieObj: '<' 
    }
  });
 