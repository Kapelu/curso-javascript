/*
* Implementar el método conocido como insertionSort para ordenar de menor a mayor el array recibido como parámetro utilizando arreglos. Devolver el array ordenado resultante.
*/

function insertionSort(array) {
    for(let i = 1; i<array.length; i++){
    let j = i-1
    let aux = array[i]
    while(j>=0 && array[j] > aux){
        array[j+1] = array[j]
        j--
    }
    array[j+1] = aux
    }
    return array
}
