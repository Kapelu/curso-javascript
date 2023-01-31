const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

describe('GET /ciudades/:codigoPostal', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('Responde con las ciudades solicitadas y su respectivo código postal solicitado', () => {
      const ciudades = [
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
      ];
      const codigo = utils.generateCodigoPostal();
      utils.testCiudades().push(ciudades[0]);
      utils.testCiudades().push(ciudades[1]);
      utils.testCiudades().push(ciudades[2]);
      utils.testCiudades().push(ciudades[3]);
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCodigosPostales().push(codigo);
      utils.testCodigosPostales().push(utils.generateCodigoPostal());
      utils.testCodigosPostales().push(utils.generateCodigoPostal());
      codigo.ciudades.push(ciudades[1].id);
      codigo.ciudades.push(ciudades[3].id);
      return supertest
         .get(`/ciudades/${codigo.codigoPostal}`)
         .expect(200)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               codigoPostals: codigo.codigoPostal,
               results: [ciudades[1], ciudades[3]],
            });
         });
   });

   it('Responde con un error si no se encontraron ciudades asociadas al código postal', () => {
      const codigo = utils.generateCodigoPostal();
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
      utils.testCodigosPostales().push(codigo);
      return supertest
         .get(`/ciudades/${codigo.codigoPostal}`)
         .expect(400)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               error: 'No se encontraron ciudades asociadas',
            });
         });
   });

   it('Responde con un error si el código postal no existe', () => {
      return supertest
         .get(`/ciudades/${utils.generateCodigoPostal().codigoPostal}`)
         .expect(404)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql({ error: 'Codigo postal no encontrado' });
         });
   });
});
