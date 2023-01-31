/// ========================================================================== ///
/// ============================= HENRY-CIUDAD ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const eliminarCiudad = require('../controllers/04-controller');
const expect = require('chai').expect;
describe('----------`eliminarCiudad`----------', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('Debe retornar un mensaje con un error al no encontrar la ciudad', () => {
      const ciudad1 = utils.generateCiudades();

      const ciudad2 = utils.generateCiudades();

      utils.ciudades.push(ciudad1);

      utils.ciudades.push(ciudad2);

      let id = Math.ceil(Math.random() * 10);

      expect(() => eliminarCiudad(id)).to.throw(`No existe la ciudad con id: ${id}`);
   });

   it('Se debe eliminar una ciudad de forma correcta y responder con el array ciudades, teniendo en cuenta el eliminado', () => {
      const ciudad1 = utils.generateCiudades();

      const ciudad2 = utils.generateCiudades();

      const ciudad3 = utils.generateCiudades();

      utils.ciudades.push(ciudad1);

      utils.ciudades.push(ciudad2);

      utils.ciudades.push(ciudad3);

      expect(eliminarCiudad(ciudad3.id)).not.to.contain(ciudad3);

      expect(utils.ciudades).to.have.length(2);

      expect(eliminarCiudad(ciudad2.id)).not.to.contain(ciudad2);

      expect(utils.ciudades).to.have.length(1);
   });
});
