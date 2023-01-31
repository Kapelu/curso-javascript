/*
* Implementar el método conocido como selectionSort para ordenar de menor a mayor el array recibido como parámetro utilizando dos arreglos. Devolver el array ordenado resultante
*/
function selectionSort(array) {
  for(let j = 0; j<array.length-1; j++){
    let min = j;
    for(let i = j+1; i<array.length; i++){
      if(array[i] < array[min]){
        min = i;
      }
    }
    if(j!==min){
      let aux = array[j]; 
      array[j] = array[min];
      array[min] = aux;
    }
  }
  return array;
}