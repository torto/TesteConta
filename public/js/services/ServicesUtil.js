angular.module('conta-azul').factory('ServicesUtil', [function() {
  'use strict';

  var retorno = {
    applyUpdate: function($scope, exec) {
      if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
        $scope.$apply(function() {
          exec();
        });
      }
    }

  };

  return retorno;

}]);
