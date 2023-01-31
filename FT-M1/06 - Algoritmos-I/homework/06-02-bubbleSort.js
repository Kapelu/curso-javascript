/*
* Implementar el método conocido como bubbleSort para ordenar de menor a mayor el array recibido como parámetro. Devolver el array ordenado resultante
*/
function bubbleSort(array) {
    let swap = true
    while (swap) {
    swap = false
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
        let aux = array[i]
        array[i] = array[i + 1]
        array[i + 1] = aux
        swap = true
        }
    }
    }
    return array
}
