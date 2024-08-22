/* NO MODIFIQUES EL NOMBRE DE LAS FUNCIONES */

// Crea una variable de tipo string.
const string = "Daniel";

// Crea una variable de tipo number.
const numero = 150;

// Crea una variable de tipo boolean.
const boolean = true;

// ⛔️ "X" e "Y" son números.

// Retorna el resultado de su suma.
function suma(x, y) {
  return x + y;
}

// Retorna el resultado de la resta.
function resta(x, y) {
  return x - y;
}

// Retorna el resultado de su división.
function divide(x, y) {
  return x / y;
}

// Retorna el resultado de su multiplicación.
function multiplica(x, y) {
  return x * y;
}

// Obten el resto de la división de "x" entre "y".
function obtenerResto(x, y) {
  return x % y;
}

// Retorna True si "x" e "y" son iguales. De lo contrario, retorna False.
function sonIguales(x, y) {
  z = x === y ? true : false;
  return z;
}

// Retorna True si los dos strings tienen la misma longitud. De lo contrario, retorna False.
function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}

// Retorna True si el argumento "num" es menor que noventa. De lo contrario, retorna False.
function menosQueNoventa(num) {
  return num < 90;
}

// Retorna True si el argumento "num" es mayor que cincuenta. De lo contrario, retorna False.
function mayorQueCincuenta(num) {
  return num > 50;
}

// Retorna True si "num" es par. De lo contrario, retorna False.
function esPar(num) {
  return num % 2 === 0;
}

// Retorna True si "num" es impar. De lo contrario, retorna False.
function esImpar(num) {
  return num % 2 !== 0;
}

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

// Retorna el valor de "num" elevado al cuadrado.
function elevarAlCuadrado(num) {
  return num ** 2;
}

// Retorna el valor de "num" elevado al cubo.
function elevarAlCubo(num) {
  return num ** 3;
}

// Retorna el valor de "num" elevado al exponente "exponent".
function elevar(num, exponent) {
  return Math.pow(num, exponent);
}

// Redondea "num" al entero más próximo y retórnalo.
function redondearNumero(num) {
  return Math.round(num);
}

// Redondea "num" hacia arriba y retórnalo.
function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

// Genera un número al azar entre 0 y 1 y retórnalo.
function numeroRandom() {
  return Math.random();
}

// La función recibe un entero. Devuelve como resultado un string que indica si el número
// es positivo o negativo.
// Si el número es positivo ---> "Es positivo".
// Si el número es negativo ---> "Es negativo".
// Si el número es 0, devuelve False.
function esPositivo(num) {
  return num > 0 ? "Es positivo" : num < 0 ? "Es negativo" : false;
}

// Agrega un símbolo de exclamación al final del string "str" y retórnalo
// Ejemplo: "hello world" ---> "hello world!"
function agregarSimboloExclamacion(str) {
  return str + "!";
}

// Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
// Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
function combinarNombres(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

// Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
// Ejemplo: "Martin" ---> "Hola Martin!"
function obtenerSaludo(nombre) {
  return `Hola ${nombre}!`;
}

// Retornar el área de un rectángulo teniendo su altura y ancho.
function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}

// La función recibe como argumento la medida de un lado de un rectángulo.
// Debes retornar su perímetro.
function retornarPerimetro(lado) {
  return lado * 4;
}

// Calcula el área de un triángulo y retorna el resultado.
function areaDelTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Supongamos que 1 dolar equivale a 1.2 peso.
// Debes calcular el valor recibido como argumento pasándolo a pesos.
function deDolaresApesos(dolar) {
  return dolar * 1.2;
}

// Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
// Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
// Si no es vocal, tambien debe retornar "Dato incorrecto".
function esVocal(letra) {return letra.length !== 1
  ? "Dato incorrecto"
  : ["a", "e", "i", "o", "u"].includes(letra.toLowerCase())
  ? "Es vocal"
  : "Dato incorrecto";}

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
  deDolaresApesos,
  esVocal,
};
