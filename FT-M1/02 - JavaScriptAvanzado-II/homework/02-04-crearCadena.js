/*
Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, '*', '*');
let textoGuiones = crearCadena.bind(this, '-', '-');
let textoUnderscore = crearCadena.bind(this, '_', '_');

console.log(textoAsteriscos(' Hola '));
console.log(textoGuiones(' Hola '));
console.log(textoUnderscore(' Hola '));
