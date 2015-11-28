describe("IndexController", function() {
  var $scope, ListCarService, list;
  beforeEach(function() {
    angular.mock.module('conta-azul');
    angular.mock.inject(function($injector, _ListCarService_) {
      $scope = $injector.get('$rootScope').$new();
      ListCarService = _ListCarService_;
      list = {
        combustivel: "Flex",
        imagem: null,
        marca: "Volkswagem",
        modelo: "Gol",
        placa: "FFF-5498",
        valor: 20000
      };
    });
  });
  describe("CurrentPage", function() {
    it("Trocar posicao do currentPage",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        expect($scope.listCar.currentPage).toBe(0);

        $scope.setListPosition(1);

        expect($scope.listCar.currentPage).toBe(1);
      }));
  });

  describe("Filter", function() {

    it("Filtro dos Carros com valores de Modelo identicos",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'Gol';
        $scope.listCar.search.modelo = 'Gol';
        var list = {
          combustivel: "Flex",
          imagem: null,
          marca: "Volkswagem",
          modelo: "Gol",
          placa: "FFF-5498",
          valor: 20000
        };

        expect($scope.filterCars(list)).toBe(true);
      }));

    it("Filtro dos Carros com valores Marca identicos",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'Volkswagem';
        $scope.listCar.search.modelo = 'Volkswagem';

        expect($scope.filterCars(list)).toBe(true);

      }));

    it("Filtro dos Carros com valores Marca pela metade",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'Volks';
        $scope.listCar.search.modelo = 'Volks';

        expect($scope.filterCars(list)).toBe(true);

      }));

    it("Filtro dos Carros com valores marca pela metade e minusculos",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'volks';
        $scope.listCar.search.modelo = 'volks';

        expect($scope.filterCars(list)).toBe(true);

      }));

    it("Filtro dos Carros com valores Marca pela metade",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'Go';
        $scope.listCar.search.modelo = 'Go';

        expect($scope.filterCars(list)).toBe(true);

      }));

    it("Filtro dos Carros com valores modelo pela metade e minusculos",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'go';
        $scope.listCar.search.modelo = 'go';

        expect($scope.filterCars(list)).toBe(true);

      }));


    it("Filtro dos Carros com valores marca errados",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'Ford';
        $scope.listCar.search.modelo = 'Ford';

        expect($scope.filterCars(list)).toBe(false);
      }));

    it("Filtro dos Carros com valores modelo errados",
      angular.mock.inject(function($controller) {
        $controller('IndexController', {
          "$scope": $scope,
          "ListCarService": ListCarService
        });

        $scope.listCar.search.marca = 'Fusca';
        $scope.listCar.search.modelo = 'Fusca';

        expect($scope.filterCars(list)).toBe(false);
      }));
  });
});
