const router = require('express').Router();
const eliminarCiudad = require('../controllers/04-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  🔟 ***** EJERCICIO 10 ***** - DELETE /ciudad 🔟:

  🟢 Integrar la función eliminarCiudad que desarrollaste previamente (Ejercicio 4) para eliminar una ciudad.
  📌 Responder con un objeto con una propiedad "message" que se igual al string `la ciudad con el id ${id} fue eliminado de forma exitosa.
  📌 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla debes responder con el mensaje del error.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

 router.delete('/ciudad', (req, res) => {
 
 });

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;