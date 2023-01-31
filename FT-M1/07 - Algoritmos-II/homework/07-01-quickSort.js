/*
* Implementar el método conocido como quickSort para ordenar de menor a mayor el array recibido como parámetro. Devolver el array ordenado resultante
*/
function quickSort(array) {
    if (array.length <= 1) return array

    let pivot = array[Math.floor(Math.random() * array.length)]
    let left = []
    let right = []
    let equal = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else if (array[i] > pivot) {
            right.push(array[i])
        } else {
            equal.push(array[i])
        }
    }
    return quickSort(left).concat(equal).concat(quickSort(right))
}
