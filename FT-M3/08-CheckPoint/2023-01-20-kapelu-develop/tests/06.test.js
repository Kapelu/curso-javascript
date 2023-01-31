/// ========================================================================== ///
/// ============================= HENRY-CIUDAD ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const recibirTodaLaPoblacion = require('../controllers/06-controller');
const expect = require('chai').expect;

describe('---------- `recibirTodaLaPoblacion` ----------', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('Debe retornar el total de la poblaciones que pertenecen en cada código postal', function () {
      const registro = [];
      const totalPrice = Math.ceil(Math.random() * 1000);
      const codigoPostal = utils.generateCodigoPostal();
      const ciudades = [
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
      ];
      registro.push(ciudades[0].nombre);
      registro.push(ciudades[1].nombre);
      registro.push(ciudades[2].nombre);
      registro.push(ciudades[3].nombre);
      registro.push(ciudades[5].nombre);
      ciudades.forEach((c) => (c.poblacion = totalPrice / 5));
      codigoPostal.ciudades.push(ciudades[0]);
      codigoPostal.ciudades.push(ciudades[1]);
      codigoPostal.ciudades.push(ciudades[2]);
      codigoPostal.ciudades.push(ciudades[3]);
      codigoPostal.ciudades.push(ciudades[4]);
      codigoPostal.ciudades.push(ciudades[5]);
      utils.testCodigosPostales().push(codigoPostal);
      utils.testCiudades().push(ciudades[0]);
      utils.testCiudades().push(ciudades[1]);
      utils.testCiudades().push(ciudades[2]);
      utils.testCiudades().push(ciudades[3]);
      utils.testCiudades().push(ciudades[4]);
      utils.testCiudades().push(ciudades[5]);
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      expect(recibirTodaLaPoblacion(codigoPostal.codigoPostal, registro)).to.eql(
         totalPrice
      );
   });

   it('Debe arrojar un error si el código postal no existe', () => {
      const codigoPostal = utils.generateCodigoPostal();
      expect(() => recibirTodaLaPoblacion(codigoPostal.codigoPostal)).to.throw(
         'Codigo postal no encontrado'
      );
   });
});
