/*
 * Cantidad que resulta de la multiplicación de determinado número natural por todos los números naturales que le anteceden excluyendo el cero; se representa por n!. Ej: nFactorial 4 es 24 ==> 4 x 3 x 2 x 1 = 24
 */
function nFactorial(n) {
	if (n === 0 || n === 1) return 1
	return n * nFactorial(n - 1)
}
console.log(nFactorial(5))

// Usando condicional operador

function nFactorial(n) {
	let factorial = n <= 1 ? 1 : n * nFactorial(n - 1)
	return factorial
}
console.log(nFactorial(5))