/* 
* Implementa la clase LinkedList tiene metodos `add`, `remove`, y `search`
*
* add: Agrega un nuevo nodo en el final de la lista
* Ej:      Head --> null
* add(1):  Head --> 1 --> null
* add(2):  Head --> 1 --> 2 --> null
*
* remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
* Ej:         Head --> 1
* remove():   Head --> null y devuelve 1
*
*search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
*/

function LinkedList() {this.head = null; this._length = 0}
function Node(value) {this.value = value; this.next = null}

LinkedList.prototype.add = function (data) {
	let node = new Node(data)
	if (this.head === null) this.head = new Node(data)
	else {
		let current = this.head
		while (current.next) {current = current.next}
		current.next = node
	}
	this._length++
	return node
}

LinkedList.prototype.remove = function () {
	let current = this.head
	// si current no existe
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