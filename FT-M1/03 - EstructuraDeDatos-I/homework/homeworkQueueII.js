function Cola() {
	this.array = []
}
let fila = new Cola() // Se Crea la cola
console.log(fila.array)
//* AGREGA AL PRINCIPIO
Cola.prototype.agregaPrincipio = function (elemento) {
	return this.array.unshift(elemento)
}

//* AGREGA AL FINAL
Cola.prototype.agregaFinal = function (elemento) {
	return this.array.push(elemento)
}
//* REMUEVE EL PRIMERO
Cola.prototype.remuevePrimero = function () {
	return this.array.shift()
}
//* REMUEVE EL FINAL
Cola.prototype.remueveFinal = function () {
	return this.array.pop()
}
//* TAMAÑO DE ARRAY
Cola.prototype.tamaño = function () {
	return this.array.length
}
//* AGREGAR ELEMENTOS
fila.agregaPrincipio(8)
fila.agregaPrincipio(9)
fila.agregaPrincipio(10)
fila.agregaFinal(1) 
fila.agregaFinal(3)
fila.agregaFinal(4)
console.log(fila.array)
console.log(fila.tamaño())
//* REMUEVE ELEMENTOS
fila.remueveFinal() // se elimina 1 elemento al final
console.log(fila.array)
console.log(fila.tamaño())

fila.remuevePrimero() // se eliminan 2 elementos al principio
fila.remuevePrimero()
console.log(fila.array)
console.log(fila.tamaño())
