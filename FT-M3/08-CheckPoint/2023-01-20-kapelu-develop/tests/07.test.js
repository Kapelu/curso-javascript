const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;

describe('-----postAgregarCiudad-----', function () {
   beforeEach(function () {
      utils.reset();
   });

   describe('400 Error', () => {
      it('POST si el coche ya existe, responde con el error correspondiente', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         utils.ciudades.push(ciudad, ciudad2);
         return supertest
            .post('/ciudades')
            .send({ ciudades: ciudad2 })
            .expect(400)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               console.log('test', res.body);
               expect(res.body).to.eql({
                  err: 'No se puede agregar una ciudad ya existente',
               });
            });
      });
   });

   describe('201 OK', () => {
      it('POST responde con un status 201 y todas las ciudades', function () {
         const ciudad = utils.generateCiudades();
         const ciudad2 = utils.generateCiudades();
         const codigo = utils.generateCodigoPostal();
         utils.ciudades.push(ciudad2);
         utils.codigosPostales.push(codigo);
         return supertest
            .post('/ciudades')
            .send({ ciudades: ciudad, codigo: codigo })
            .expect(201)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(res.body).to.eql({ msg: [ciudad2, ciudad] });
               expect(utils.ciudades).to.have.length(2);
               utils.reset();
            });
      });

      it('POST debe agregar la ciudad al código postal y responde con un status 201 junto con todas las ciudades', () => {
         const ciudad = utils.generateCiudades();
         const codigo = utils.generateCodigoPostal();
         const ciudadAgregada = {
            codigoPostal: codigo.codigoPostal,
            ciudades: [ciudad],
         };
         return supertest
            .post('/ciudades')
            .send({ ciudades: ciudad, codigo: codigo })
            .expect(201)
            .expect('Content-Type', /json/)
            .expect(function (res) {
               expect(utils.codigosPostales).to.have.length(1);
               expect(utils.codigosPostales[0]).to.eql(ciudadAgregada);
            });
      });
   });
});
