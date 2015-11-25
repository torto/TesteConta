angular.module('conta-azul').controller('IndexController',['$scope', 'ListCarService',
    function($scope, ListCarService) {

      $scope.listCar = {
        list: [],
        labels: [],
        search: ''
      };

      $scope.getListPosition = function(position) {
        ListCarService.listCar(position, function(values) {
          $scope.listCar.list = values;
        });
      };

      $scope.page = 0;
      $scope.getListPosition($scope.page);
      
      ListCarService.labelTable(function(labels) {
        $scope.listCar.labels = labels;
      });



    }]);
