const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;

describe('DELETE /ciudad', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('DELETE responde con un mensaje que nos indica que la ciudad fue eliminada correctamente', function () {
      const ciudad1 = utils.generateCiudades();

      const ciudad2 = utils.generateCiudades();

      const ciudad3 = utils.generateCiudades();

      utils.ciudades.push(ciudad1);

      utils.ciudades.push(ciudad2);

      utils.ciudades.push(ciudad3);

      return supertest
         .delete('/ciudad')
         .send({ id: ciudad1.id })
         .expect(200)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               message: `la ciudad con el id ${ciudad1.id} fue eliminada de forma exitosa`,
            });
         });
   });

   it('DELETE responde el mensaje de error en caso de que no encuentre la ciudad', function () {
      const ciudad1 = utils.generateCiudades();

      const ciudad2 = utils.generateCiudades();

      const ciudad3 = utils.generateCiudades();

      utils.ciudades.push(ciudad1);

      utils.ciudades.push(ciudad2);

      utils.ciudades.push(ciudad3);

      const id = 90;

      return supertest
         .delete('/ciudad')
         .send({ id: id })
         .expect(400)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               error: `No existe la ciudad con id: ${id}`,
            });
         });
   });
});
