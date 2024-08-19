/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// Crea una Clase de ES6 o una función constructora llamada "Usuario".
// El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
// El valor de cada propiedad la recibirá por parámetro.
// Además, esta clase debe tener un método llamado "saludar".
// Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
// El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
// Retornar la clase.
function crearUsuario() {
  // Tu código:
}

// Agrega un método al prototipo de "Usuario".
// El método debe llamarse "saludar" y debe devolver el string "Hello World!".
function agregarMetodoPrototype(Usuario) {
  // Tu código:
}

// Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
// El método debe llamarse "reverse".
// [PISTA]: necesitarás utilizar el objeto "this".
function agregarStringInvertida() {
  // Tu código:
}

// Crea el constructor de la clase "Persona".
// Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
// Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
// sus valores.
class Persona {
  // Tu código:
}

// En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
// Recibirás las propiedades por parámetro.
// Retornar la instancia creada.
function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
  // Tu código:
}

// La función agrega un método "datos" a la clase "Persona".
// Este método toma la propiedad "nombre" y "edad", y devuelve el string:
// Ejemplo: "Juan, 22 años".
function agregarMetodo() {
  // Tu código:
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona,
};
