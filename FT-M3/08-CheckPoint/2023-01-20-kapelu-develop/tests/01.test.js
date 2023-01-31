/// ========================================================================== ///
/// ============================= HENRY-books ============================= ///
/// ================================== TESTS ================================= ///

const agregarCiudad = require('../controllers/01-controller');
const utils = require('../utils');
const expect = require('chai').expect;

describe('---------- `agregarCiudad` ----------', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('Busca la ciudad en la base de datos. Si está, devuelve un error que diga: "No se puede agregar una ciudad ya existente"', function () {
      const ciudad = utils.generateCiudades();
      const ciudad2 = utils.generateCiudades();
      utils.ciudades.push(ciudad, ciudad2);
      expect(() => agregarCiudad(ciudad2)).to.throw(
         'No se puede agregar una ciudad ya existente'
      );
      expect(utils.ciudades).to.have.length(2);
   });

   it('Debe agregar una ciudad a la base de datos (utils.ciudad)', function () {
      const ciudad = utils.generateCiudades();
      const codigo = utils.generateCodigoPostal();
      utils.codigosPostales.push(codigo);
      agregarCiudad(ciudad, codigo);
      expect(utils.ciudades).to.eql([ciudad]);
      expect(utils.ciudades).to.have.length(1);
   });

   it('Si el código postal pasado por parámetro ya existe, debe agregarle la ciudad.', () => {
      const ciudad = utils.generateCiudades();
      const codigo = utils.generateCodigoPostal();
      utils.codigosPostales.push(codigo);
      let codigo2 = {
         codigoPostal: codigo.codigoPostal,
         ciudades: [ciudad],
      };
      agregarCiudad(ciudad, codigo);
      expect(utils.codigosPostales).to.eql([codigo2]);
   });

   it('Si el código postal pasado por parámetro no existe en nuestro array de códigos postales, debemos agregarlo junto con la ciudad.', () => {
      const ciudad = utils.generateCiudades();
      const codigo = utils.generateCodigoPostal();
      let codigo2 = {
         codigoPostal: codigo.codigoPostal,
         ciudades: [ciudad],
      };
      agregarCiudad(ciudad, codigo);
      expect(utils.codigosPostales).to.eql([codigo2]);
   });
});
