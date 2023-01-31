function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;

}

let arbolPrueba = new BinarySearchTree(15)

BinarySearchTree.prototype.insert = function (valor) {
    if (valor < this.value) {
        if (this.left === null) {
            var newTree = new BinarySearchTree(valor);
            this.left = newTree;
        } else {
            this.left.insert(valor);
        }
    } else {
        if (this.right === null) {
            var newTree = new BinarySearchTree(valor);
            this.right = newTree;
        } else {
            this.right.insert(valor);
        }
    }
}

BinarySearchTree.prototype.size = function () {
    if (this.value === null) {
        return 0;
    }

    if (this.left === null && this.right === null) {
        return 1;
    }

    if (this.left === null) {
        return 1 + this.right.size();
    }

    if (this.right === null) {
        return 1 + this.left.size();
    }

    return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.search = function (value) {

    // value = 15
    if (this.value === value) {
        // 10 = 15?  ||||  12 = 15?  ||||  15 = 15?
        return "encontrado";
    }
    if (value < this.value && this.left !== null) {
        // 15 < 10 y hay algo en el nodo de la izquierda
        return this.left.search(value); // me paro en el nodo de la izq y aplico ahí el search
        // RECURSIÓN                             
        //  15 < 12 ....
    } else if (value > this.value && this.right !== null) { // 15 >= 10 y hay algo en el nodo de la izquierda
        return this.right.search(value); // me paro en el nodo de la derecha y aplico ahí el search
    } else {                                                // 15 >= 12 ... SI
        return "no se encontró el valor";
    }
}

//   Un árbol es una estructura de datos no lineal. Un árbol de búsqueda binaria es un árbol binario en el que los nodos que tienen un valor menor se almacenan a la izquierda mientras que los nodos con un valor más alto se almacenan a la derecha

let arbol1 = new BinarySearchTree(10)

console.log(arbol1.value);

arbol1.insert(5)
arbol1.insert(11)
arbol1.insert(1)

console.log(arbol1);

console.log(arbol1.search(10))
