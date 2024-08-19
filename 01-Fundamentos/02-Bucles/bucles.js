// Recibes un objeto. Tendrás que crear un arreglo de arreglos.
// Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
// Estos elementos debe ser cada par clave:valor del objeto recibido.
// [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
function deObjetoAarray(objeto) {
  // Tú código:
}

// La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
// letras del string, y su valor es la cantidad de veces que se repite en el string.
// Las letras deben estar en orden alfabético.
// [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
function numberOfCharacters(string) {
  // Tú código:
}

// Recibes un string con algunas letras en mayúscula y otras en minúscula.
// Debes enviar todas las letras en mayúscula al comienzo del string.
// Retornar el string.
// [EJEMPLO]: soyHENRY ---> HENRYsoy
function capToFront(string) {
  // Tú código:
}

// Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
// La diferencia es que cada palabra estará escrita al inverso.
// [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
function asAmirror(frase) {
  // Tú código:
}

// Si el número que recibes es capicúa debes retornar el string: "Es capicua".
// Caso contrario: "No es capicua".
function capicua(numero) {
  // Tú código:
}

// Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
// Retorna el string sin estas letras.
function deleteAbc(string) {
  // Tú código:
}

// Recibes un arreglo de strings.
// Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
// de la longitud de cada string.
// [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
function sortArray(arrayOfStrings) {
  // Tú código:
}

// Recibes dos arreglos de números.
// Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
// [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
// Si no tienen elementos en común, retornar un arreglo vacío.
// [PISTA]: los arreglos no necesariamente tienen la misma longitud.
function buscoInterseccion(array1, array2) {
  // Tú código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
