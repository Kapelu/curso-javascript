const router = require('express').Router();
const obtenerCiudadesDelCodigoPostal = require('../controllers/05-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣1️⃣ ***** EJERCICIO 11 ***** - GET /ciudades/:codigoPostal 1️⃣1️⃣:
  
  🟢 Integrar la función obtenerCiudadesDelCodigoPostal que desarrollaste previamente (Ejercicio 5) para obtener las ciudades
  precedentes de una marca.
  🟢 Responder con el resultado de la operación, el formato debe ser: { codigoPostals: 'el codigo postal enviado', results: 'Las ciudades encontradas' }.
  🟢 Responder con el mensaje adecuado si no se encontraron ciudades asociados al codigo postal.
  🟢 Si surge algún error durante la operación, responder con el mensaje correspondiente.
  
    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás los argumentos necesarios para ejecutar la función obtenerCiudadesDelCodigoPostal mediante las propiedades "params" 
  y "query" de *req*.
  2) Si algo falla debes responder con el mensaje del error.
  3) ¡Revisa en los test el status que deben tener tus respuestas!
  4) Recordá validar los parámetros que recibas a través de la URL.
  5) Debes responder con las ciudades, no sólo su ID.
*/

 router.get('/ciudades/:codigoPostal', (req, res) => {
 
 });

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
