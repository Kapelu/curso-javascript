const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;

describe('-----putActualizarCiudad-----', function () {
   beforeEach(function () {
      utils.reset();
   });
   describe('Error 400', () => {
      it('PUT responde el mensaje de error en caso de que no encuentre la ciudad', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         utils.ciudades.push(ciudad);
         const ciudadModificada = {
            id: ciudad2.id,
            nombre: ciudad2.nombre,
            poblacion: 500000,
            latitud: -30000,
            modificada: true,
         };
         return supertest
            .put('/ciudades')
            .send({ ciudad: ciudadModificada })
            .expect(400)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(res.body).to.eql({
                  err: 'No se pudo encontrar la ciudad solicitada',
               });
            });
      });

      it('PUT responde el mensaje de error en caso de que reciba algún valor undefined', function () {
         const ciudad = utils.generateCiudades();
         utils.ciudades.push(ciudad);
         const ciudadModificada = {
            id: ciudad.id,
            nombre: ciudad.nombre,
            poblacion: 500000,
            latitud: -30000,
         };
         return supertest
            .put('/ciudades')
            .send({ ciudad: ciudadModificada })
            .expect(400)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(res.body).to.eql({
                  err: 'Faltan datos a completar',
               });
            });
      });

      it('PUT responde el mensaje de error en caso de que reciba algún valor undefined', function () {
         const ciudad = utils.generateCiudades();
         utils.ciudades.push(ciudad);
         const ciudadModificada = {
            id: ciudad.id,
            nombre: ciudad.nombre,
            poblacion: 500000,
            latitud: undefined,
            modificada: true,
         };
         return supertest
            .put('/ciudades')
            .send({ ciudad: ciudadModificada })
            .expect(400)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(res.body).to.eql({
                  err: 'Faltan datos a completar',
               });
            });
      });
   });

   describe('Exito 200', () => {
      it('PUT responde con la ciudad actualizada correctamente', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         utils.ciudades.push(ciudad, ciudad2);

         const ciudadModificada = {
            id: ciudad.id,
            nombre: ciudad.nombre,
            poblacion: 300000,
            latitud: ciudad.latitud,
            modificado: true,
         };
         const todo = [ciudadModificada, ciudad2];

         return supertest
            .put('/ciudades')
            .send({ ciudad: ciudadModificada })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(res.body).to.eql(ciudadModificada);
               expect(utils.ciudades).to.eql(todo);
            });
      });
   });
});
