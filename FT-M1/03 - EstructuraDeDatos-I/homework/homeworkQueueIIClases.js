class Cola {
    constructor() {
        this.array = []
    }
    //* AGREGA AL PRINCIPIO
    agregaPrincipio(elemento) {
        return this.array.unshift(elemento)
    }
    //* AGREGA EN n POSICION
    //Cola.prototype.agregaPosicion = function (i,elemento){
    //    return this.array(i,elemento)
    //}
    //* AGREGA AL FINAL
    agregaFinal(elemento) {
        return this.array.push(elemento)
    }
    //* REMUEVE EL PRIMERO
    remuevePrimero() {
        return this.array.shift()
    }
    //* REMUEVE EL FINAL
    remueveFinal() {
        return this.array.pop()
    }
    //* TAMAÑO DE ARRAY
    tamaño() {
        return this.array.length
    }
}
let fila = new Cola() // Se Crea la cola
console.log(fila.array)
//* AGREGAR ELEMENTOS
fila.agregaFinal(1) 
fila.agregaPrincipio(2)
fila.agregaFinal(3)
fila.agregaFinal(4)
console.log(fila.array)
console.log(fila.tamaño())
//* REMUEVE ELEMENTOS
fila.remueveFinal()
console.log(fila.array)
console.log(fila.tamaño())

fila.remuevePrimero() // se eliminan 2 elementos
console.log(fila.array)
console.log(fila.tamaño())
