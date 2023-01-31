const router = require('express').Router();
const recibirTodaLaPoblacion = require('../controllers/06-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣2️⃣ ***** EJERCICIO 12 ***** - GET /codigoPostales/:codigoPostal/poblacion-total 1️⃣2️⃣:
  
  🟢 Integrar la función recibirTodaLaPoblacion que desarrollaste previamente (Ejercicio 6) para obtener el total de 
  la población.
  🟢 Responder con el resultado de la operación. El formato debe ser: { results: 23000 }

    📢 PUNTOS A TENER EN CUENTA 📢
  1) El parámetro query "registro" es recibido como un array de string.
  2) Si algo falla debes responder con el mensaje del error.
  3) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get('/codigoPostales/:codigoPostal/poblacion-total', (req, res) => {
  
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
