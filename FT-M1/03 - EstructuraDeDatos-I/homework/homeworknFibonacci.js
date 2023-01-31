/*
* Se trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores. nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la * posición 7 de la secuencia. Ej: nFibonacci de 7 = 13 ==> 0, 1, 1, 2, 3, 5, 8, 13
*/
function nFibonacci(n) {
	if (n===0 || n===1) return n
    return nFibonacci(n - 1) + nFibonacci(n - 2)
}
console.log(nFibonacci(7))

//* Con Ooperador Condicional
function nFibonacci2(n) {
	let fibonacci = n === 0 || n === 1 ? n : nFibonacci2(n - 1) + nFibonacci2(n - 2)
	return fibonacci
}
console.log(nFibonacci2(7))

//* Sin Recursion => A simple vista parecen iguales, la diferencia radica en que al hacerlo sin recursion, podemos saberl el fibonacci de numero muy grandes como por ejemplo el del 555. mientras que con recursion al querer saber el fibonacci de 55 provoca un desbordamiento de memoria y la maquina puede colgarse.
function fibonacci(num) {
	let fibo = [0, 1]
	for (let i = 2; i <= num; i++) {
		fibo[i] = fibo[i - 1] + fibo[i - 2]
	}
	return fibo
}
console.log(fibonacci(7))
