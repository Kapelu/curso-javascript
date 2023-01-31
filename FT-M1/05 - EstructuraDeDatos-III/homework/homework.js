'use strict';

/*
* Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
*   - size: retorna la cantidad total de nodos del árbol
*   - insert: agrega un nodo en el lugar correspondiente
*   - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
*   - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según 
*     se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
*     hará el recorrido "in-order" por defecto.
*   - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
* El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {  // para generar un nuevo árbol recibiamos un value.
   this.value = value  // es el tipo de dato que se recibe, puede ser un array, objeto o cualquier cosa.
   this.right = null  // Hacia la derecha va el value de mayor valor.
   this.left = null  // Hacia la izquierda va el valor de menor tamaño.
}
//                      value
//                     /     \
//                  null     null

BinarySearchTree.prototype.insert = function (value){
   // Si el valor de value es mayor a this.value
   if (value > this.value){
      // si 
      if (this.right === null) { this.right = new BinarySearchTree(value)}
   }
}

BinarySearchTree.prototype.size = function (){
   
}

BinarySearchTree.prototype.contains = function (){}

BinarySearchTree.prototype.depthFirstForEach = function (){}

BinarySearchTree.prototype.breadthFirstForEach = function (){}

//**************************************************************************************************************/
// arbolBinario = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]
let arbolBinario = new BinarySearchTree()
arbolBinario.insert(0)
arbolBinario.insert(1)
arbolBinario.insert(5)
arbolBinario.insert(15)
arbolBinario.insert(25)
arbolBinario.insert(17)
arbolBinario.insert(21)
arbolBinario.insert(28)
arbolBinario.insert(14)
arbolBinario.insert(50)
arbolBinario.insert(45)
arbolBinario.insert(13)
arbolBinario.insert(12)
arbolBinario.insert(11)
arbolBinario.insert(30)
arbolBinario.insert(35)
arbolBinario.insert(33)
arbolBinario.insert(31)
arbolBinario.insert(34)

console.log(arbolBinario);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
