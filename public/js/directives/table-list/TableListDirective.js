angular.module('conta-azul').directive('tableList', [function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/table-list/table-list.html',
    scope:{
      options:"="
    },
    link: function(scope, elem, attrs) {
    }
  };
}]);
