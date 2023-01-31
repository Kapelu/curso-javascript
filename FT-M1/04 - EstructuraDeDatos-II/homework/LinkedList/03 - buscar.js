function Lista() {
	this.head = null
	this.length = 0
}
function Nodo(value) {
	this.dato = value
	this.next = null
}


const lista = new Lista()
console.log(lista)

lista.buscar("Tercero")
lista.buscar("Quinto")
console.log(lista)
