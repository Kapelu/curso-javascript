const utils = require('../utils');
// ⚠️ No modificar nada arriba de esta línea ⚠️

/// =========================================================================== ///
/// =========================== 🌍 HENRY-CIUDADES 🌍 ============================ ///
/// =========================================================================== ///

/*
  1️⃣ ***** EJERCICIO 1 ***** - agregarCiudad 1️⃣:
  🟢 Agregar una ciudad a utils.ciudades.
  🟢 Si la ciudad ya existe en la base de datos, arrojar un Error('No se puede agregar una ciudad ya existente') 
  🟢 Si el código postal pasado por parametro existe en la base de datos utils.codigosPostales, agregarle la ciudad.
  🟢 Si el código postal pasado por parametro no existe en la base de datos utils.codigosPostales, agregarlo junto con la ciudad.
  🟢 Retornar todas las ciudades si la operación fue exitosa.

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a las ciudades mediante *utils.ciudades*.
  2) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  3) Recuerda verificar si la ciudad que intentas agregar ya existe en utils.ciudades.
  4) Recuerda agregar la ciudad al código postal si este ya existe en la base de datos.
  5) Recuerda agregar el código postal junto con la ciudad si el código postal no existe en nuestra base de datos.
  6) Investiga acerca de Throw Error() para devolver errores.

  */

const agregarCiudad = (ciudad, codigo) => {
   
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = agregarCiudad;
