/*
 * Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO,
 * donde el primer elemento que ingresa es el primero que se quita. Definir
 * los siguientes métodos:
 *  - enqueue: agrega un valor respetando el orden.
 *  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando * la queue está vacía.
 *  - size: retorna el tamaño (cantidad de elementos) de la queue.
 * Pueden utilizar class o función constructora.
 */

function Queue() {
	this.array = []
}
//* Agrega elementos
Queue.prototype.enqueue = function (elemento) {
	return this.array.push(elemento)
}
//* Elimina elementos
Queue.prototype.dequeue = function () {
	return this.array.shift()
}
//* Dice la cantidad de elementos de la cola
Queue.prototype.size = function () {
	return this.array.length
}

let cola = new Queue()    // Se Crea la cola

cola.enqueue(1)    // se le agregan los elementos
cola.enqueue(2)
cola.enqueue(3)
cola.enqueue(4)
console.log(cola.size())   // te dice que tiene 4 elementos
console.log(cola)
cola.dequeue()       // se eliminan 2 elementos
cola.dequeue()

console.log(cola.size())  // quedan en la cola 2 elementos
