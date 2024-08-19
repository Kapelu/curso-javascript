/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
// Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
// Además, agregar una propiedad con el nombre "meow".
// La propiedad "meow" será una función que retorne el string: "Meow!".
// Retornar el objeto.
function crearGato(nombre, edad) {
  // Tú código:
}

// Debes crear un nuevo objeto.
// Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
// Retornar el objeto.
function nuevoUsuario(nombre, email, password) {
  // Tú código:
}

// Recibirás un objeto por parámetro.
// Debes agregarle una propiedad con el nombre recibido por parámetro.
// Esta propiedad será igual al valor `null`.
// Retornar el objeto.
function agregarPropiedad(objeto, propiedad) {
  // Tú código:
}

// El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
// Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
// [NOTA]: no necesitar retornar nada.
function invocarMetodo(objeto, metodo) {
  // Tú código:
}

// El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
// Debes multiplicar este número por 5 y retornar el resultado.
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // Tú código:
}

// El parámetro "propiedad" es una propiedad del objeto que recibes.
// Debes eliminarla del objeto y retornarlo finalmente.
function eliminarPropiedad(objeto, propiedad) {
  // Tú código:
}

// Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
// En ese caso retornar True. Caso contrario, False.
function tieneEmail(objetoUsuario) {
  // Tú código:
}

// Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
// En ese caso retornar True. Caso contrario, False.
function tienePropiedad(objeto, propiedad) {
  // Tú código:
}

// Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
// En ese caso retornar True. Caso contrario, False.
function verificarPassword(objetoUsuario, password) {
  // Tú código:
}

// Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
// La nueva contraseña la recibes por parámetro.
// Retornar el objeto.
function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Tú código:
}

// El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
// Debes agregar el "nuevoAmigo" al final de este arreglo.
// Retornar el objeto.
function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // Tú código:
}

// El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
// Cada usuario tiene una propiedad llamada "esPremium".
// Define esta propiedad de todos los usuarios como True.
// Retornar el arreglo.
function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // Tú código:
}

// El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
// Este arreglo contiene objetos (post).
// Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
// Debes sumar los likes de todos los post y retornar el resultado.
function sumarLikesDeUsuario(objetoUsuario) {
  // Tú código:
}

// Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
// Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
// El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
// Luego debes restar del precio total del producto ese valor de descuento.
// Retornar el precio final.
// Ejemplo:
// Precio ---> 10
// PorcentajeDeDescuento ---> 0.2
// Precio final ---> 8
function agregarMetodoCalculoDescuento(objetoProducto) {
  // Tú código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
