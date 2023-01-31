const router = require("express").Router();
const agregarCiudad = require("../controllers/01-controller");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  7️⃣ ***** EJERCICIO 7 ***** - POST /ciudades 7️⃣:
  
  🟢 Integrar la función agregarCiudad que desarrollaste previamente (Ejericio 1) para agregar una nueva ciudad en la 
  base de datos.
  📌 Responder un objeto con una propiedad "msg": <la base de datos con la ciudad agregada>.
  📌 Si hay un error, responder un objeto con una propiedad "err": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás los argumentos necesarios para ejecutar esa función agregarCiudad mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.post("/ciudades", (req, res) => {
  
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
