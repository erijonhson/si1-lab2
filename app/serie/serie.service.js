
angular.
  module('serie').
  service('serieService', ['$http', 'modalService', 'serieFactory',
  function($http, modalService, serieFactory) {
    
    var ctrl = this;
 
    var viaImdbID = 'https://omdbapi.com/?i=IMDBID&apikey=93330d3c&type=series';
    var viaTitle = 'https://omdbapi.com/?s=TITLE&apikey=93330d3c&type=series';
 
    ctrl.buscarUmaSerie = function(imdbID) {
      return $http.get(viaImdbID.replace('IMDBID', imdbID)).then(
        function (response){
          if (response.data.Error !== undefined) {
            modalService.mostraAlertaSimples('Erro: ' + response.data.Error);
            return undefined;
          }
          else {
            var result = {};
            result.data = new serieFactory(response.data);
            return result;
          }
        },
        function (response){
          modalService.mostraAlertaSimples(`Erro de busca ao banco de dados. `
            + `Verifique sua conexão com a internet.`);
          return undefined;
        });
    }
 
    ctrl.buscarSeries = function(tituloDaSerie) {
      return $http.get(viaTitle.replace('TITLE', tituloDaSerie)).then(
        function (response){
          if (response.data.Error !== undefined) {
            modalService.mostraAlertaSimples('Erro: ' + response.data.Error);
            return undefined;
          } else {
            var result = {};
            result.data = constroiSeries(response.data.Search);
            return result;
          }
        },
        function (response){
          modalService.mostraAlertaSimples(`Erro de busca ao banco de dados. `
            + `Verifique sua conexão com a internet.`);
          return undefined;
        });
    }
 
    ctrl.ehSerieValida = function(serie) {
      return serie !== undefined;
    }

    function constroiSeries(seriesOmdbapi) {
      var listaDeSeries = [];
      for (var i = seriesOmdbapi.length - 1; i >= 0; i--) {
        listaDeSeries.push(new serieFactory(seriesOmdbapi[i]));
      }
      return listaDeSeries;
    }

  }])
