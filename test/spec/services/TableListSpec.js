describe('ListCarService', function() {
  // Declarando as variaveis a serem utilizadas nos testes
  var ListCarService,
    $httpBackend;

  // Injetando o modulo app nos testes
  beforeEach(module('conta-azul'));

  beforeEach(inject(function(_ListCarService_, _$httpBackend_) {
    ListCarService = _ListCarService_;

    $httpBackend = _$httpBackend_;

  }));

  describe('getListCar: ', function() {
    it('Pegar lista de carros por posição da pagina', function() {
      ListCarService.listCar(0, function(lista) {
        expect(lista.length).toBe(3);
      });
    });
  });

  describe('getCar: ', function() {
    it('Pegar um carro por posicao da pagina e lista', function() {
      ListCarService.getCar(0, 0, function(car) {
        expect(car.placa).toBe("FFF-5498");
      });
    });
  });

  describe('addCar: ', function() {
    it('Adiciona carro', function() {
      ListCarService.listCar(0, function(lista) {
        expect(lista.length).toBe(3);
      });

      var carro = {
        combustivel: "Alcool",
        imagem: "hhttp://2.bp.blogspot.com/_lkkBt-EnhRs/TPDsQPiT1LI/AAAAAAAAIhQ/7irCdCPghlk/s1600/Image00004.jpg",
        marca: "Volkswagen",
        modelo: "Fusca",
        placa: "PAI-4121",
        valor: 20000
      };

      ListCarService.addCar(carro);

      ListCarService.listCar(0, function(lista) {
        expect(lista.length).toBe(4);
      });

    });
  });

  describe('moreCar: ', function() {
    it('Mais de 5 carros para testar os arrays', function() {
      ListCarService.listCar(0, function(lista) {
        expect(lista.length).toBe(3);
      });

      var carro = {
        combustivel: "Alcool",
        imagem: "hhttp://2.bp.blogspot.com/_lkkBt-EnhRs/TPDsQPiT1LI/AAAAAAAAIhQ/7irCdCPghlk/s1600/Image00004.jpg",
        marca: "Volkswagen",
        modelo: "Fusca",
        placa: "PAI-4121",
        valor: 20000
      };

      ListCarService.addCar(carro);
      ListCarService.addCar(carro);
      ListCarService.addCar(carro);

      ListCarService.listCar(0, function(lista) {
        expect(lista.length).toBe(5);
      });
      ListCarService.listCar(1, function(lista) {
        expect(lista.length).toBe(1);
      });

    });
  });

  describe('removeCar: ', function() {
    it('Remove o carro do array', function() {
      ListCarService.listCar(0, function(lista) {
        expect(lista.length).toBe(3);
      });

      ListCarService.getCar(0, 0, function(car) {
        expect(car.placa).toBe("FFF-5498");
        expect(ListCarService.removeCar(car)).toBe(true);
        ListCarService.listCar(0, function(lista) {
          expect(lista.length).toBe(2);
        });
      });
    });
  });

});
