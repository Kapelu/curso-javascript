/*
 * La función counter debe retornar otra función. Esta función retornada debe * actuar como un contador, retornando un valor numérico que empieza en 1 e * * incrementa con cada invocación.
 *
 * Ejemplo:
 *  const nuevoContador = counter()
 *  nuevoContador()     // 1
 *  nuevoContador()     // 2
 *  nuevoContador()     // 3
 *
 *  const otroContador = counter()
 *  otroContador()      // 1
 *  otroContador()      // 2
 *  otroContador()      // 3
 */

function counter(count = 0) {
	//return () => ++count 
	return () => count++
}

const contador = counter()
console.log(contador())
console.log(contador())
console.log(contador())

const contador2 = counter()
console.log(contador2())
console.log(contador2())
console.log(contador2())
