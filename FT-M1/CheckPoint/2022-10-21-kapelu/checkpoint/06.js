/*
* 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
*
* Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
* retorne false si un número dentro del array no es primo
* EJEMPLOS:
* Dado el siguiente array:
* [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
* sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
*
* Dado este otro array:
* [61, 7, 13, 11, 29, 3]
* sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
*⚠️ ATENCION ⚠️
* NO utilizar el método sort() de Array!
* REQUISITOS:
*  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
*  🟢 Si numuero dentro del array no es primo, retornar false
*/
function sortPrimeHouses(array) {
	let primo = false
	let n = array[0]
	for (let i = 2; i < n; i++) {
		if (n % i == 0) primo = true
	}
	if (!primo) {
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < array.length; j++) {
				if (array[j + 1] < array[j]) {
					let aux = array[j]
					array[j] = array[j + 1]
					array[j + 1] = aux
				}
			}
		}
		return array
	}
	return false
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
	sortPrimeHouses,
}
