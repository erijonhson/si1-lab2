'use strict';

angular.
  module('app')
  .config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<find-serie-list></find-serie-list>'
        }).
        when('/perfil', {
          template: '<user-serie-list></user-serie-list>'
        }).
        when('/watchlist', {
          template: '<watchlist></watchlist>'
        }).
        when('/serie/:imdbID', {
          template: '<serie></serie>',
        }).
        when('/modal', {
          template: '<modal></modal>',
        }).
        otherwise('/home');
    }
  ]);
