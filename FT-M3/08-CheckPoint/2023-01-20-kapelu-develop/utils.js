const { faker } = require('@faker-js/faker');
faker.locale = 'es';
// ⚠️ NO MODIFICAR ESTE ARCHIVO ⚠️
// Aquí podrás ver las funciones escenciales para resolver este CheckPoint.

module.exports = {
   ciudades: [],
   codigosPostales: [],

   reset: function () {
      this.ciudades = [];
      this.codigosPostales = [];
   },

   testCiudades: function () {
      return this.ciudades;
   },
   testCodigosPostales: function () {
      return this.codigosPostales;
   },
   // Genera una nueva ciudad con fakerJs. Si es necesario, se pueden pisar los valores en los test después
   // para forzar ciertos casos.
   generateCiudades: function () {
      return {
         id: faker.datatype.uuid(),
         nombre: faker.address.country(),
         poblacion: faker.datatype.number({ min: 100000 }),
         latitud: faker.address.latitude(),
      };
   },
   // Genera un nuevo código postal con fakerJs.
   generateCodigoPostal: function () {
      return {
         codigoPostal: faker.address.zipCode(),
         // Para agregar más ciudades es necesario hardcodearlos desde el test a utilizar.
         ciudades: [],
      };
   },
};
