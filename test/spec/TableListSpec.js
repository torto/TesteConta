describe("IndexControler", function() {
  var $scope;
  beforeEach(function () {
   module('conta-azul');
});
  // beforeEach(function() {
  //   angular.mock.module('conta-azul');
  //   angular.mock.inject(function($injector) {
  //     $scope = $injector.get('$rootScope').$new();
  //   });
  // });
  it('greet deve retornar Hi', inject(function (GreetingService) {
   expect(GreetingService.greeting()).toBe('Hi');
}));
});
