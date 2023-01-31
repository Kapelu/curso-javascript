const router = require('express').Router();
const actualizarCiudad = require('../controllers/03-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  9️⃣ ***** EJERCICIO 9 ***** - PUT /ciudades 9️⃣:

  🟢 Integrar la función actualizarCiudad que desarrollaste previamente (Ejercicio 3) para poder actualizar una ciudad.
  📌 Responder un objeto con la ciudad modificada si la operación fue exitosa.
  📌 Si hay un error, responder un objeto con una propiedad "err": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla al actualizar la ciudad, debes responder con el mensaje del error.
  2) Recibirás los argumentos necesario para ejecutar esa función actualizarCiudad mediante la propiedad "body" de *req*.
  3) ¡Revisa en los test el status que deben tener tus respuestas!

*/

router.put('/ciudades', (req, res) => {
  
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
