angular.module('conta-azul').factory('ListCarService', [function() {


  var listAllCar = [{
    combustivel: "Flex",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Gol",
    placa: "FFF-5498",
    valor: 20000
  }, {
    combustivel: "Gasolina",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Fox",
    placa: "FOX-4125",
    valor: 20000
  }, {
    combustivel: "Alcool",
    imagem: "hhttp://2.bp.blogspot.com/_lkkBt-EnhRs/TPDsQPiT1LI/AAAAAAAAIhQ/7irCdCPghlk/s1600/Image00004.jpg",
    marca: "Volkswagen",
    modelo: "Fusca",
    placa: "PAI-4121",
    valor: 20000
  }];
  var arrays = [];
  function updateSplit() {
    arrays = splitArray(listAllCar, 5);
  }

  var retorno = {
    labelTable: function(callback) {
      var jsonReturn = [{
        label: 'Placa',
        value: 'placa'
      }, {
        label: 'Modelo',
        value: 'modelo'
      }, {
        label: 'Marca',
        value: 'marca'
      }, {
        label: 'Foto',
        value: 'imagem'
      }, {
        label: 'Combustível',
        value: 'combustivel'
      }, {
        label: 'Valor',
        value: 'valor'
      }];
      callback(jsonReturn);
    },
    listCar: function(position, callback) {
      updateSplit();
      var jsonReturn = arrays[position];
      callback(jsonReturn);
    },
    addCar: function(car) {
      updateSplit();
      listAllCar.push(car);
    },
    removeCar: function(car) {
      updateSplit();
      var index = listAllCar.indexOf(car);
      if (index > -1) {
        listAllCar.splice(index, 1);
        return true;
      } else {
        return false;
      }
    },
    getCar: function(positionList, position, callback) {
      callback(array[positionList][position]);
    }
  };

  function splitArray(arr, size) {

    var arr2 = arr.slice(0),
      arrays = [];

    while (arr2.length > 0) {
      arrays.push(arr2.splice(0, size));
    }

    return arrays;
  }

  return retorno;

}]);
