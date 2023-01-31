/*
* Implementar el método conocido como mergeSort para ordenar de menor a mayor el array recibido como parámetro. Devolver el array ordenado resultante
*/

function mergeSort(array) {
    if (array.length === 1) return array;

    let div = split(array);
    let left = div[0];
    let right = div[1];

    return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([1,1,2,5,3,4,6,5,7]));


function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let array = [];

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array.push(left[leftIndex])
            leftIndex++
        } else {
            array.push(right[rightIndex])
            rightIndex++
        }
    }
    return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function split(array) {
    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return [left, right]
}
