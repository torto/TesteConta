angular.module('conta-azul').factory('ListCarService', [function() {
  'use strict';

  var listAllCar = [{
    combustivel: "Flex",
    imagem: null,
    marca: "Volkswagem",
    modelo: "Gol",
    placa: "AFF-5498",
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

  var retorno = {
    labelTable: function(callback) {
      var jsonReturn = [{
        label: 'Placa',
        value: 'placa',
        size:'col-md-2'
      }, {
        label: 'Modelo',
        value: 'modelo',
        size:'col-md-2'
      }, {
        label: 'Marca',
        value: 'marca',
        size:'col-md-2'
      }, {
        label: 'Foto',
        value: 'imagem',
        size:'col-md-2'
      }, {
        label: 'Combustível',
        value: 'combustivel',
        size:'col-md-2'
      }, {
        label: 'Valor',
        value: 'valor',
        size:'col-md-2 text-right padding-table'
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
      updateSplit();
      callback(arrays[positionList][position]);
    }
  };

// Utils
  function splitArray(arr, size) {
    var arr2 = arr.slice(0),
      arrays = [];

    while (arr2.length > 0) {
      arrays.push(arr2.splice(0, size));
    }

    return arrays;
  }

  function updateSplit() {
    arrays = splitArray(listAllCar, 5);
  }

  return retorno;

}]);
