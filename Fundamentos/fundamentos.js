/* NO MODIFIQUES EL NOMBRE DE LAS FUNCIONES */

// Crea una variable de tipo string.
const string = null;

// Crea una variable de tipo number.
const numero = null;

// Crea una variable de tipo boolean.
const boolean = null;

// ⛔️ "X" e "Y" son números.

// Retorna el resultado de su suma.
function suma(x, y) {
  // Tu código:
  return x + y;
}

// Retorna el resultado de la resta.
function resta(x, y) {
  // Tu código:
  return x - y;
}

// Retorna el resultado de su división.
function divide(x, y) {
  // Tu código:
  return x / y;
}

// Retorna el resultado de su multiplicación.
function multiplica(x, y) {
  // Tu código:
  return x * y;
}

// Obten el resto de la división de "x" entre "y".
function obtenerResto(x, y) {
  // Tu código:
  return x % y;
}

function sonIguales(x, y) {
  // Retorna True si "x" e "y" son iguales.
  // De lo contrario, retorna False.
  // Tu código:
  return x === y ? true : false;
}

function tienenMismaLongitud(str1, str2) {
  // Retorna True si los dos strings tienen la misma longitud.
  // De lo contrario, retorna False.
  // Tu código:
  return str1.length === str2.length ? true : false;
}

function menosQueNoventa(num) {
  // Retorna True si el argumento "num" es menor que noventa.
  // De lo contrario, retorna False.
  // Tu código:
  return num < 90 ? true : false;
}

function mayorQueCincuenta(num) {
  // Retorna True si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna False.
  // Tu código:
  return num > 50 ? true : false;
}

function esPar(num) {
  // Retorna True si "num" es par.
  // De lo contrario, retorna False.
  // Tu código:
  return num % 2 === 0 ? true : false;
}

function esImpar(num) {
  // Retorna True si "num" es impar.
  // De lo contrario, retorna False.
  // Tu código:
  return num % 2 !== 0 ? true : false;
}

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:
  return num ** 2;
}

function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:
  return num ** 3;
}

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  return num ** exponent;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y retórnalo.
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  return Math.random();
}

function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve False.
  // Tu código:
  return num > 0 ? "Es positivo" : num < 0 ? "Es negativo" : false;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
}

function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su altura y ancho.
  // Tu código:
}

function retornarPerimetro(lado) {
  // La función recibe como argumento la medida de un lado de un rectángulo.
  // Debes retornar su perímetro.
  // Tu código:
}

function areaDelTriangulo(base, altura) {
  // Calcula el área de un triángulo y retorna el resultado.
  // Tu código:
}

function deEuroAdolar(euro) {
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Debes calcular el valor recibido como argumento pasándolo a dolares.
  // Tu código:
}

function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  string,
  numero,
  boolean,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
