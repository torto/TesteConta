angular.module('conta-azul').controller('RegisterCarController',['$scope', 'ListCarService', '$location',
    function($scope, ListCarService, $location) {

      $scope.car = {};
      $scope.car.combustivel = 'Gasolina';
      $scope.imagem = null;

      /**
      Salva o Carro
      */
      $scope.saveCar = function(){
        ListCarService.addCar($scope.car).then(function (car) {
          $scope.car = {};
          $location.path('/');
        });
      };

    }]);
