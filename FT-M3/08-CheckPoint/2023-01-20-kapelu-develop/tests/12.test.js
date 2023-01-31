const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

describe('GET /codigoPostales/:codigoPostal/poblacion-total', function () {
   beforeEach(() => {
      utils.reset();
   });

   it('Responde con el total de la población del código postal', function () {
      const totalPrice = Math.ceil(Math.random() * 1000);
      const codigo = utils.generateCodigoPostal();
      const ciudades = [
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
         utils.generateCiudades(),
      ];
      const registro = [];
      registro.push(ciudades[0].nombre);
      registro.push(ciudades[1].nombre);
      registro.push(ciudades[2].nombre);
      registro.push(ciudades[3].nombre);
      registro.push(ciudades[5].nombre);
      ciudades.forEach((c) => (c.poblacion = totalPrice / 5));
      codigo.ciudades.push(ciudades[0]);
      codigo.ciudades.push(ciudades[1]);
      codigo.ciudades.push(ciudades[2]);
      codigo.ciudades.push(ciudades[3]);
      codigo.ciudades.push(ciudades[4]);
      codigo.ciudades.push(ciudades[5]);
      utils.testCodigosPostales().push(codigo);
      utils.testCiudades().push(ciudades[0]);
      utils.testCiudades().push(ciudades[1]);
      utils.testCiudades().push(ciudades[2]);
      utils.testCiudades().push(ciudades[3]);
      utils.testCiudades().push(ciudades[4]);
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().unshift(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      utils.testCiudades().push(utils.generateCiudades());
      return supertest
         .get(
            `/codigoPostales/${codigo.codigoPostal}/poblacion-total?registro=${registro}`
         )
         .expect(200)
         .expect('Content-Type', /json/)
         .expect((res) => {
            expect(res.body).to.eql({ results: totalPrice });
         });
   });

   it('Debe responder con un error si el código postal no es encontrado', () => {
      const codigo = utils.generateCodigoPostal();
      return supertest
         .get(`/codigoPostales/${codigo.codigoPostal}/poblacion-total`)
         .expect(404)
         .expect('Content-Type', /json/)
         .expect((res) => {
            expect(res.body).to.eql({ error: 'Codigo postal no encontrado' });
         });
   });
});
