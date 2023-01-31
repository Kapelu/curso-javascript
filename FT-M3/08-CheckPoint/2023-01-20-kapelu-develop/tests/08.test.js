/// ========================================================================== ///
/// ============================= HENRY-ciudades ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const supertest = require('supertest-as-promised')(require('../app'));
const expect = require('chai').expect;

describe('-----getPorPoblacion-----', function () {
   beforeEach(function () {
      utils.reset();
   });

   describe('Error 400', function () {
      it('Si no hay coincidencias con la cantidad y el índice requerido, arroja un error', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         utils.ciudades.push(ciudad, ciudad2);
         ciudad.poblacion = 178059;
         ciudad2.poblacion = 161853;
         return supertest
            .get('/ciudades')
            .send({ cantidad: 160000, indice: 'Menor' })
            .expect(400)
            .expect(function (res) {
               expect(res.body).to.eql({
                  err: 'No hay ciudades que coincidan con la cantidad y el indice solicitado',
               });
            });
      });

      it('Si no hay coincidencias con la cantidad y el índice requerido, arroja un error', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         utils.ciudades.push(ciudad, ciudad2);
         ciudad.poblacion = 178059;
         ciudad2.poblacion = 161853;
         return supertest
            .get('/ciudades')
            .send({ cantidad: 180000, indice: 'Mayor' })
            .expect(400)
            .expect(function (res) {
               expect(res.body).to.eql({
                  err: 'No hay ciudades que coincidan con la cantidad y el indice solicitado',
               });
            });
      });
   });

   describe('Exito 200', () => {
      it('Devuelve las ciudades filtradas según el índice de la cantidad y el índice solicitado', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         utils.ciudades.push(ciudad, ciudad2);
         ciudad.poblacion = 178059;
         ciudad2.poblacion = 161853;
         return supertest
            .get('/ciudades')
            .send({ cantidad: 161854, indice: 'Mayor' })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(res.body).to.eql([ciudad]);
            });
      });

      it('Devuelve las ciudades filtradas según el índice la cantidad y el índice solicitado', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         utils.ciudades.push(ciudad, ciudad2);
         ciudad.poblacion = 178059;
         ciudad2.poblacion = 161853;
         return supertest
            .get('/ciudades')
            .send({ cantidad: 178000, indice: 'Menor' })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(res.body).to.eql([ciudad2]);
            });
      });
   });
});
