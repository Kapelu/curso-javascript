// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
	this.numBuckets = 35
	this.buckets = []
}

HashTable.prototype.hash = function (key) {
	let sum = 0
	for (let i = 0; i < key.length; i++) {
		sum += key.charCodeAt(i)
	}
	return sum % this.numBuckets
}

HashTable.prototype.set = function (key, value) {
	if (typeof key !== 'string') throw TypeError('Keys must be strings')
	let i = this.hash(key)
	if (this.buckets[i] === undefined) {
		this.buckets[i] = {}
	}
	this.buckets[i][key] = value
}

HashTable.prototype.get = function (key) {
	let i = this.hash(key)
	return this.buckets[i][key]
}

HashTable.prototype.hasKey = function (key) {
	let i = this.hash(key)
	return this.buckets[i].hasOwnProperty(key)
}

const input = new HashTable()
//input.hash
console.log(input.hash('foo'));