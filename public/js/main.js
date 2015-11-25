(function() {
  'use strict';

  angular.module('conta-azul', ['ngRoute']).config(function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'partials/index.html',
      controller: 'IndexController'
    });

    $routeProvider.otherwise({
      redirectTo: '/index'
    });

  });

}());
