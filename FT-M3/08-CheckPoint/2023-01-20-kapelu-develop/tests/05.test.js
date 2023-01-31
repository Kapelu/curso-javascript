/// ========================================================================== ///
/// ============================= HENRY-CIUDAD ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const obtenerCiudadesDelCodigoPostal = require('../controllers/05-controller');
const { util } = require('chai');
const expect = require('chai').expect;

describe('---------- `obtenerCiudadesDelCodigoPostal` ----------', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('Debe retornar las ciudades según el código postal solicitado', function () {
      const codigoPostal = utils.generateCodigoPostal();
      const ciudades = [
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
      ];
      utils.testCiudades().push(ciudades[0]);
      utils.testCiudades().push(ciudades[1]);
      utils.testCiudades().push(ciudades[2]);
      utils.testCiudades().push(ciudades[3]);
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCodigosPostales().push(codigoPostal);
      utils.testCodigosPostales().push(utils.generateCodigoPostal());
      utils.testCodigosPostales().push(utils.generateCodigoPostal());
      codigoPostal.ciudades.push(ciudades[1].id);
      expect(obtenerCiudadesDelCodigoPostal(codigoPostal.codigoPostal, null)).to.eql(
         [ciudades[1]]
      );
      utils.testCodigosPostales()[0].ciudades.push(ciudades[3].id);
      expect(obtenerCiudadesDelCodigoPostal(codigoPostal.codigoPostal, null)).to.eql(
         [ciudades[1], ciudades[3]]
      );
   });

   it('Debe arrojar un error si el código postal no existe', function () {
      expect(() => obtenerCiudadesDelCodigoPostal(null, null)).to.throw(
         'Codigo postal no encontrado'
      );
      expect(() =>
      obtenerCiudadesDelCodigoPostal(
            utils.generateCodigoPostal().codigoPostal,
            null
         )
      ).to.throw('Codigo postal no encontrado');
   });

   it('Debe retornar un string si no se encuentran ciudades asociadas', function () {
      const codigoPostal = utils.generateCodigoPostal();
      const ciudades = [
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
      ];
      utils.testCiudades().push(ciudades[0]);
      utils.testCiudades().push(ciudades[1]);
      utils.testCiudades().push(ciudades[2]);
      utils.testCiudades().push(ciudades[3]);
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCodigosPostales().push(utils.generateCodigoPostal());
      utils.testCodigosPostales().push(utils.generateCodigoPostal());
      utils.testCodigosPostales().push(codigoPostal);
      expect(obtenerCiudadesDelCodigoPostal(codigoPostal.codigoPostal, null)).to.eql(
         'No se encontraron ciudades asociadas'
      );
   });
});
