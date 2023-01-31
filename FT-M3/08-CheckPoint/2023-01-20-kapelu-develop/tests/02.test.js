/// ========================================================================== ///
/// ============================= HENRY-BOOKS ============================= ///
/// ================================== TESTS ================================= ///

const porPoblacion = require('../controllers/02-controller');
const utils = require('../utils');
const expect = require('chai').expect;

describe('---------- `porPoblacion` ----------', function () {
   const ciudad = utils.generateCiudades();
   const ciudad2 = utils.generateCiudades();
   const ciudad3 = {
      id: '6cfcdb49-dc70-4cde-913d-18b077311bb6',
      nombre: 'Barcelona',
      poblacion: 110115,
      latitud: '26.6053',
   };
   const ciudad4 = {
      id: '6cfcds49-dc70-4cde-113d-18b077a11bz6',
      nombre: 'Ibiza',
      poblacion: 100200,
      latitud: '24.2153',
   };
   ciudad.poblacion = 178059;
   ciudad2.poblacion = 161853;

   beforeEach(function () {
      utils.reset();
   });

   it("Si el índice pasado por parámetro es 'Mayor' debe devolver las ciudades con población mayor o igual a la cantidad solicitada. ", function () {
      utils.ciudades.push(ciudad, ciudad2, ciudad3);
      expect(porPoblacion(110116, 'Mayor')).to.eql([ciudad, ciudad2]);
   });

   it("Si el índice pasado por parámetro es 'Menor' debe devolver las ciudades con población menor o igual a la cantidad solicitada. ", function () {
      utils.ciudades.push(ciudad, ciudad2, ciudad3, ciudad4);
      expect(porPoblacion(110115, 'Menor')).to.eql([ciudad3, ciudad4]);
   });

   it('Si no hay coincidencias con la cantidad y el índice requerido, devuelve un error que diga: "No hay ciudades que coincidan con la cantidad y el indice solicitado"', function () {
      utils.ciudades.push(ciudad, ciudad2, ciudad3, ciudad4);
      expect(() => porPoblacion(100000, 'Menor')).to.throw(
         'No hay ciudades que coincidan con la cantidad y el indice solicitado'
      );
      expect(() => porPoblacion(180000, 'Mayor')).to.throw(
         'No hay ciudades que coincidan con la cantidad y el indice solicitado'
      );
   });
});
