// describe("CadHistoriaEditor", function() {
//   var $scope;
//   beforeEach(function() {
//     angular.mock.module('jogo');
//     angular.mock.inject(function($injector) {
//       $scope = $injector.get('$rootScope').$new();
//     });
//   });
//   it("Deve criar um Historia fundo tem q ser vazio",
//     angular.mock.inject(function($controller) {
//       $controller('CadHistoriaEditor', {
//         "$scope": $scope
//       });
//       expect($scope.historia.nomeQuadrinho).toBe("Sem nome");
//     }));
// });


describe("IndexControler", function() {
  var $scope;
  beforeEach(function () {
   angular.mock.module('conta-azul');
});
  // beforeEach(function() {
  //   angular.mock.module('conta-azul');
  //   angular.mock.inject(function($injector) {
  //     $scope = $injector.get('$rootScope').$new();
  //   });
  // });
  it('greet deve retornar Hi', angular.mock.inject(function (ListCarService) {
   expect(ListCarService.labelTable()).toBe('Hi');
}));
});
