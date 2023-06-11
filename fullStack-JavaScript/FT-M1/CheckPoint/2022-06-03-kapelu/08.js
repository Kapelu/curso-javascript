const { LinkedList } = require('./DS');
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

/*
  EJERCICIO 1
   Agregar el método oddList al prototipo de LinkedList. Este método deberá retornar una nueva lista enlazada sólo con los números pares de la lista actual.
   Si la lista está vacía, debe retornar false
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16] --> [7]	
     LinkedList.oddList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8]
*/

LinkedList.prototype.oddList = function () {
  // Tu código aca:
  
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};