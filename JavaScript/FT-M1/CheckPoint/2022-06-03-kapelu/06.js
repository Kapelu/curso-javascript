const { LinkedList } = require('./DS');
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
  
/*
EJERCICIO 2
Agregar el método indexOf al prototipo de LinkedList. Este método deberá retornar el índice del elemento 
recibido por parámetros 
Si la lista está vacía, debe retornar false
Si no se encuentra el indice del elemento, retornar -1
Ejemplo:
    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.indexOf(7);
    El valor retornado debería ser: 5
ACLARACIÓN: El indice debe arrancar desde 0, como con los bucles for.
  */
 
LinkedList.prototype.indexOf = function (value) { 
  // Tu código aca:
 
}
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};