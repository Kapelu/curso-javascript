'use strict'

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
- add: agrega un nuevo nodo al final de la lista;
- remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
- search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
EJEMPLO 
search(3) busca un nodo cuyo valor sea 3;
search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {this.head = null}
function Node(value) {this.value = value; this.next = null}

LinkedList.prototype.add = function (value) {
	let current = this.head
	// Si current no existe => current pasa a ser nuevo Nodo()
	if (!current){this.head = new Node(value)}
	// Sino
	else {
		// Mientras current.next tenga algo, current va a ser igual a current.next siguiente
		while (current.next){current = current.next}
		// Cuando current.next sea igual a null, pasa a ser igual a nuevo Nodo
		current.next = new Node(value)
	}
}

LinkedList.prototype.remove = function () {
	let current = this.head
	// si current no existe, retona null
	if (!current) return null
	// si current tiene un valor
	if (!current.next) {this.head = null; return current.value}
	// mientras current.next.next sea verdadero current = current.next
	while (current.next.next){ current = current.next}
	let aux = current.next
	current.next = null
	return aux.value
}

LinkedList.prototype.search = function (value) {
	let current = this.head
	if (!current) return null
	while (current) {
		if (typeof value === 'function'){
			if (value(current.value)) return current.value
		}
		if (current.value === value) return current.value
		current = current.next
	}
	return null
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
- hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
- set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
- get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
- hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
	this.numBuckets = 35  // Representa la cantidad de lugares
	this.buckets = []  // Representa cada lugar, que va a ser un array de objeto
	// buckets => [{key1 : Value1}, {key2 : Value2}, {key3 : Value3}, {etc...}]
}

HashTable.prototype.hash = function(key){
	let suma = 0
	for (let i = 0; i < key.length; i++) {suma += key.charCodeAt(i)}
	return suma % this.numBuckets
} 
HashTable.prototype.set = function(key, value){
	let index = this.hash(key)  // Guarda el indice
	if (typeof key !== 'string') throw new TypeError ('Keys must be strings') // Si el key no es string devolver error
	if (!this.buckets[index]){this.buckets[index] = {}}  // Si no hay nada en el bucket con indice, bucket con indice se crea un objeto vacio
	this.buckets[index][key] = value  // En this.bucket sub index crea una propiedad que valga value y se guarda ahi
	
} 
HashTable.prototype.get = function(key){
	let index = this.hash(key)
	return this.buckets[index][key]  // buscamos en el buckets nuestro indice y de ahi la clave(key)
}

HashTable.prototype.hasKey = function (key){
	let index = this.hash(key)  // Primero vemos el indice al que debemos ir
	if (this.buckets[index][key]) return true // Buscamos en el bucket y si encontramos el valor de key devolvemos true
	return false
	} 

/*
* SET => permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos
* GET => Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
*
* trow => Lanza una excepcion definida por el usuario.
* TypeError => Representa un error cuando un valor no es del tipo esperado. Lanza un error con un sms definido
* hasOwnProperty => Dvuelve un booleano indicando si el objeto tiene la propiedad especificada.
*/


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Node,
	LinkedList,
	HashTable,
}
