/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// Retornar el primer elemento del arreglo recibido por parámetro.
function devolverPrimerElemento(array) {
  // Tú código:
}

// Retornar el último elemento del arreglo recibido por parámetro.
function devolverUltimoElemento(array) {
  // Tú código:
}

// Retornar la longitud del arreglo recibido por parámetro.
function obtenerLargoDelArray(array) {
  // Tú código:
}

// El arreglo recibido por parámetro contiene números.
// Retornar un arreglo con los elementos incrementados en +1.
function incrementarPorUno(array) {
  // Tú código:
}

// Agrega el "elemento" al final del arreglo recibido.
// Retorna el arreglo.
function agregarItemAlFinalDelArray(array, elemento) {
  // Tú código:
}

// Agrega el "elemento" al comienzo del arreglo recibido.
// Retorna el arreglo.
function agregarItemAlComienzoDelArray(array, elemento) {
  // Tú código:
}

// El argumento "palabras" es un arreglo de strings.
// Retornar un string donde todas las palabras estén concatenadas
// con un espacio entre cada palabra.
// Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
function dePalabrasAFrase(palabras) {
  // Tú código:
}

// Verifica si el elemento existe dentro del arreglo recibido.
// Retornar True si está, o False si no está.
function arrayContiene(array, elemento) {
  // Tú código:
}

// El parámetro "arrayOfNums" debe ser un arreglo de números.
// Suma todos los elementos y retorna el resultado.
function agregarNumeros(arrayOfNums) {
  // Tú código:
}

// El parámetro "resultadosTest" es un arreglo de números.
// Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
function promedioResultadosTest(resultadosTest) {
  // Tú código:
}

// El parámetro "arrayOfNums" es un arreglo de números.
// Retornar el número más grande.
function numeroMasGrande(arrayOfNums) {
  // Tú código:
}

// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
// Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
// [PISTA]: "arguments" es un arreglo.
function multiplicarArgumentos() {
  // Tú código:
}

// Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
function cuentoElementos(array) {
  // Tú código:
}

// Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
// Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
// si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
function diaDeLaSemana(numeroDeDia) {
  // Tú código:
}

// Esta función recibe por parámetro un número.
// Debe retornar True si el entero inicia con 9 y False en otro caso.
function empiezaConNueve(num) {
  // Tú código:
}

// Si todos los elementos del arreglo son iguales, retornar True.
// Caso contrario retornar False.
function todosIguales(array) {
  // Tú código:
}

// El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
function mesesDelAño(array) {
  // Tú código:
}

// Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
// La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
function tablaDelSeis() {
  // Tú código:
}

// La función recibe un arreglo con enteros entre 0 y 200.
// Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
function mayorACien(array) {
  // Tú código:
}

// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
// Guardar cada nuevo valor en un arreglo y retornarlo.
// Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
// la ejecución y retornar el string: "Se interrumpió la ejecución".
// [PISTA]: utiliza el statement 'break'.
function breakStatement(num) {
  // Tú código:
}

// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
// Guardar cada nuevo valor en un array y retornarlo.
// Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
// se continua con la siguiente iteración.
// [PISTA]: utiliza el statement 'continue'.
function continueStatement(num) {
  // Tú código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
