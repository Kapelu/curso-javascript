const router = require('express').Router();
const porPoblacion = require('../controllers/02-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  8️⃣ ***** EJERCICIO 8 ***** - GET /ciudades 8️⃣:

  🟢 Integrar la función porPoblacion que desarrollaste previamente (Ejercicio 2) para obtener las ciudades según la cantidad y el índice que nos indiquen.
  📌 Responder con los resultados encontrados.
  📌 Si hay un error, responder un objeto con una propiedad "err": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás el argumento necesario para ejecutar esa función porPoblacion mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get('/ciudades', (req, res) => {
   
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
