function Lista() {
	this.head = null
	//this.length = 0
}
function Nodo(value) {
	this.dato = value
	this.next = null
}

Lista.prototype.agregar = function (value) {
	// creamos una referencia a this.head
	let current = this.head
	// SI el head es igual a null, this.head pasa a ser la nueva instancia de Nodo
	if (!current) this.head = new Nodo(value)
	// SINO
	else {
		// Mientras el next no sea igual a null
		while (current.next != null) {
			//this.head va ser igual a this.head.next
			current = current.next
		}
		// sino this.head.next va a ser igual a la nueva instancia de Nodo
		current.next = new Nodo(value)
	}
	//this.length++
}

Lista.prototype.remover = function () {  // ultimo nodo de la lista
	let siguiente = this.head
	if (this.head === null) return null
	else if (this.head.next === null) {
		let aux = siguiente.value
		this.head = null
		this.length--
		return aux
	} // mientras tenga un siguiente.next.next, sigo avanzando
	while (siguiente.next.next) {
		siguiente = siguiente.next
	}// guardo el valor de siguiente.next
	let aux = siguiente.next.value
	//cuando siguiente.next sea igual a null 
	siguiente.next = null
	// le saco uno a length
	this.length--
	// retorno el ultimo nodo
	return aux
}

Lista.prototype.Buscar = function (value) {
	if (this.head === null) return null
	let current = this.head
	while (current) {
		if (current.value === value) return current.value
		else if (typeof value === 'function') {
			if (value(current.value)) {
				return current.value
			}
		}
		current = current.next
	}
	return null
}

const lista = new Lista()
console.log(lista)

lista.agregar('Primero')
lista.agregar('Segundo')
lista.agregar('Tercero')
lista.agregar('Cuarto')
lista.agregar('Quinto')
console.log(lista)

//**************************************************/

lista.remover()
console.log(lista)

//**************************************************/

console.log(lista.Buscar('value'))
