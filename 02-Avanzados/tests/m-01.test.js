/* eslint-disable no-undef */
"use strict";

const {
  BinarioADecimal,
  DecimalABinario,
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
  Queue,
  nFactorial,
  nFibonacci,
  Node,
  LinkedList,
  HashTable,
  BinarySearchTree,
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
} = require("../m-01.js");

describe("BinarioADecimal(num)", function () {
  it("Debería retornar 2", function () {
    expect(BinarioADecimal("10")).toBe(2);
  });
  it("Debería retornar 7", function () {
    expect(BinarioADecimal("111")).toBe(7);
  });
});

describe("DecimalABinario(num)", function () {
  it('Debería retornar "100"', function () {
    expect(DecimalABinario(4)).toBe("100");
  });
  it('Debería retornar "111"', function () {
    expect(DecimalABinario(7)).toBe("111");
  });
});

describe("counter", () => {
  it("Debería devolver una función", () => {
    expect(typeof counter()).toBe("function");
  });
  it("Debe devolver 1 cuando se invoca la función devuelta", () => {
    expect(counter()()).toBe(1);
  });
  it("Debe incrementar y devolver el número cada vez que se invoca la función", () => {
    const counterFunction = counter();
    expect(counterFunction()).toBe(1);
    expect(counterFunction()).toBe(2);
    expect(counterFunction()).toBe(3);
    expect(counterFunction()).toBe(4);
    expect(counterFunction()).toBe(5);
  });
  it("Debería tener dos acumuladores diferentes si se crean dos contadores", () => {
    const counterOne = counter();
    const counterTwo = counter();
    expect(counterOne()).toBe(1);
    expect(counterOne()).toBe(2);
    expect(counterOne()).toBe(3);
    expect(counterOne()).toBe(4);
    expect(counterTwo()).toBe(1);
    expect(counterTwo()).toBe(2);
  });
});

describe("cacheFunction(cb)", function () {
  const cb = function (x) {
    return x * 2;
  };
  it("Debería retornar la función callback", function () {
    expect(typeof cacheFunction(cb)).toEqual("function");
  });
  it("debe devolver el resultado de las funciones de callback cuando se invoca la función almacenada en caché", function () {
    const cachedFunction = cacheFunction(cb);
    expect(cachedFunction(5)).toBe(10);
  });
  it("Debería almacenarse en caché los resultados de la función", function () {
    const cachedFunction = cacheFunction(cb);
    var resultOne = cachedFunction(2);
    expect(resultOne).toBe(4);
    var resultTwo = cachedFunction(3);
    expect(resultTwo).toBe(6);
    var resultTwo = cachedFunction(2);
    expect(resultTwo).toBe(4);
  });
  it("Debería evitarse llamar a la función callback cuando no sea necesario", function () {
    const cb = jest.fn();
    const cachedFunction = cacheFunction(cb);
    cachedFunction(true);
    cachedFunction(true);
    cachedFunction(true);
    cachedFunction(true);
    cachedFunction(true);
    cachedFunction(10);
    cachedFunction(10);
    cachedFunction(10);
    cachedFunction(10);
    expect(cb).toHaveBeenCalledTimes(2);
  });
});

describe("Bind", function () {
  it('Debería retornar el nombre correcto "Franco"', function () {
    expect(getNombreInstructor()).toEqual("Franco");
  });
  it('Debería retornar el nombre correcto "Juan"', function () {
    expect(getNombreAlumno()).toEqual("Juan");
  });
  it('Debería retornar el siguiente string "*Hola*"', function () {
    expect(textoAsteriscos("Hola")).toEqual("*Hola*");
  });
  it('Debería retornar el siguiente string "-Hola-"', function () {
    expect(textoGuiones("Hola")).toEqual("-Hola-");
  });
  it('Debería retornar el siguiente string "_Hola_"', function () {
    expect(textoUnderscore("Hola")).toEqual("_Hola_");
  });
});

describe("nFactorial(n)", function () {
  it("debe devolver el factorial de n", function () {
    expect(nFactorial(5)).toBe(120);
    expect(nFactorial(15)).toBe(1307674368000);
  });
});

describe("nFibonacci(n)", function () {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  it("debe bevolver el enesimo número de la serie de fibonacci", () => {
    const fib1 = nFibonacci(0);
    const fib2 = nFibonacci(6);
    const fib3 = nFibonacci(9);
    const fib4 = nFibonacci(2);
    expect(fib1).toBe(0);
    expect(fib2).toBe(8);
    expect(fib3).toBe(34);
    expect(fib4).toBe(1);
  });
});

describe("Un queue", function () {
  var queue;

  beforeEach(function () {
    queue = new Queue();
  });

  it("tiene los metodos `enqueue`, `dequeue`, y `size`", function () {
    expect(typeof queue.enqueue).toBe("function");
    expect(typeof queue.dequeue).toBe("function");
    expect(typeof queue.size).toBe("function");
  });

  it("tiene size 0 inicialmente", function () {
    expect(queue.size()).toBe(0);
  });

  it("incrementa en size cuando agregamos items", function () {
    queue.enqueue("first in line");
    expect(queue.size()).toBe(1);
  });

  it("decrementa en size cuando removemos elementos", function () {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");
    queue.dequeue();
    expect(queue.size()).toBe(2);
  });

  it("devuelve el item correcto cuando dequeeamos", function () {
    queue.enqueue("first");
    queue.enqueue("second");
    queue.enqueue("third");
    expect(queue.size()).toBe(3);
    expect(queue.dequeue()).toBe("first");
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe("second");
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe("third");
    expect(queue.size()).toBe(0);
  });

  it("maneja bien el underflow, cuando no hay elementos dequeue devuelve undefined", function () {
    queue.enqueue("first in line");
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe("first in line");
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
  });

  it("maneja bien varios enqueue y dequeue", function () {
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    queue.enqueue(4);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(undefined);
  });

  it("agrega y remueve sus propios items", function () {
    var q2 = new Queue();
    queue.enqueue("fullstack");
    q2.enqueue("JavaScript");
    expect(q2.dequeue()).toBe("JavaScript");
    expect(q2.dequeue()).toBe(undefined);
    expect(queue.dequeue()).toBe("fullstack");
    expect(queue.dequeue()).toBe(undefined);
  });
});

describe("Una linked list", function () {
  var linkedList;

  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it("tiene metodos `add`, `remove`, y `search`", function () {
    expect(typeof linkedList.add).toBe("function");
    expect(typeof linkedList.remove).toBe("function");
    expect(typeof linkedList.search).toBe("function");
  });

  it("empiezan head como null", function () {
    expect(linkedList.hasOwnProperty("head")).toBe(true);
    expect(linkedList.head).toBeFalsy();
    expect(linkedList.remove()).toBeFalsy();
  });

  it("tiene una clase Node para representar un nodo", function () {
    expect(typeof Node).toBe("function");
    expect(isNative(Node)).toBe(false);
    function isNative(fn) {
      return /\{\s*\[native code]\s*\}/.test("" + fn);
    }
  });

  it("La clase Node deberia tomar un valor como argumento y definir next como null por default", function () {
    var node = new Node("test");
    expect(node.value).toBe("test");
    expect(node.next).toBe(null);
  });

  it("linkedlist deberia usar la clase Node para agregar nodos en add", function () {
    linkedList.add("first");
    expect(linkedList.head instanceof Node).toBe(true);
  });

  it("add agrega los elementos linkeandolos entre ellos a traves del next", function () {
    linkedList.add("first");
    linkedList.add("second");
    expect(linkedList.head.value).toBe("first");
    expect(linkedList.head.next.value).toBe("second");
    expect(linkedList.head.next.next).toBe(null);
  });

  it("remove deberia retornar null si la lista esta vacia", function () {
    expect(linkedList.remove()).toBeFalsy();
  });

  it("remove deberia sacar el ultimo nodo ingresado y devolver su valor", function () {
    linkedList.add("first");
    linkedList.add("second");
    expect(linkedList.remove()).toBe("second");
    expect(linkedList.remove()).toBe("first");
  });

  it("el head deberia ser null cuando se sacan todos los nodos", function () {
    expect(linkedList.remove()).toBeFalsy();
    linkedList.add("one");
    expect(linkedList.remove()).toBe("one");
    expect(linkedList.remove()).toBeFalsy();
    expect(linkedList.head).toBeFalsy();
  });

  it("deberia devolver los valores correctos para buscar", function () {
    linkedList.add("one");
    linkedList.add("two");
    linkedList.add("three");
    linkedList.add("four");
    expect(linkedList.search("two")).toBe("two");
    expect(linkedList.search("sdd")).toBe(null);
    expect(linkedList.search("one")).toBe("one");
    expect(linkedList.search("four")).toBe("four");
  });

  it("deberia poder tomar strings y funciones ambos como search inputs", function () {
    linkedList.add("one");
    linkedList.add("two");
    expect(
      linkedList.search(function (nodeValue) {
        return nodeValue === "two";
      })
    ).toBe("two");
  });

  it("deberia poder buscar por lo tanto no solo strings pero tambien objetos", function () {
    function UserNode(name, email, city) {
      this.name = name;
      this.email = email;
      this.city = city;
    }

    linkedList.add(new UserNode("Nimit", "nimit@fs.com", "New York"));
    linkedList.add(new UserNode("David", "david@fs.com", "New York"));
    linkedList.add(new UserNode("Paul", "paul@yc.com", "Mountain View"));

    expect(
      linkedList.search(function (userNode) {
        return userNode.name === "Nimit";
      }).email
    ).toBe("nimit@fs.com");

    expect(
      linkedList.search(function (userNode) {
        return userNode.email === "david@fs.com";
      }).city
    ).toBe("New York");

    expect(
      linkedList.search(function (userNode) {
        return userNode.city === "Mountain View";
      }).name
    ).toBe("Paul");
  });
});

describe("HashTable", function () {
  var hashTable;

  beforeEach(function () {
    hashTable = new HashTable();
  });

  it("deberia tener 35 buckets", function () {
    expect(hashTable.numBuckets).toBe(35);
  });

  it("deberia tener metodos `set`, `get`, y `hasKey`", function () {
    expect(typeof hashTable.set).toBe("function");
    expect(typeof hashTable.get).toBe("function");
    expect(typeof hashTable.hasKey).toBe("function");
  });

  it("deberia `hash` correctament", function () {
    // esta funcion hasheadora deberia sumar los key code de las letras de la palabra,
    // y hacer el mod de ese numero por el numero de buckets .
    expect(hashTable.hash("foo")).toBe(9);
    expect(hashTable.hash("this is a key")).toBe(27);
    expect(hashTable.hash("what about this one")).toBe(13);
  });

  it("deberia guardar y buscar valores por key", function () {
    hashTable.set("key1", "val1");
    hashTable.set("key2", "val2");
    hashTable.set("this is a very different string", 44.4);
    expect(hashTable.get("key1")).toBe("val1");
    expect(hashTable.get("key2")).toBe("val2");
    expect(hashTable.get("this is a very different string")).toBe(44.4);
  });

  it("deberia devolver un error cuando el key no es un string", function () {
    expect(function () {
      hashTable.set(false, "hi");
    }).toThrowError(TypeError, "Keys must be strings");
  });

  it("deberia manejar colisiones", function () {
    hashTable.set("foo", "bar1");
    hashTable.set("ofo", "bar2");
    expect(hashTable.get("ofo")).toBe("bar2");
    expect(hashTable.get("foo")).toBe("bar1");
  });

  it("deberia sobreescribir keys", function () {
    hashTable.set("foo", "bar1");
    hashTable.set("foo", "bar2");
    expect(hashTable.get("foo")).toBe("bar2");
  });

  it("deberia devolver booleanos para el metodo #hasKey", function () {
    hashTable.set("foobar", "fluf cats");
    expect(hashTable.hasKey("foobar")).toBe(true);
    expect(hashTable.hasKey("raboof")).toBe(false);
  });
});

describe("binarySearchTree", function () {
  var tree,
    testArr,
    valuesToInsert = [
      15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34,
    ];

  beforeEach(function () {
    tree = new BinarySearchTree(20);
    testArr = [];
  });

  it("tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, y `size`", function () {
    expect(typeof tree.insert).toBe("function");
    expect(typeof tree.contains).toBe("function");
    expect(typeof tree.depthFirstForEach).toBe("function");
    expect(typeof tree.breadthFirstForEach).toBe("function");
    expect(typeof tree.size).toBe("function");
  });

  it("toma valores y reporta tamaño correctamente", function () {
    tree.insert(12);
    expect(tree.size()).toBe(2);
  });

  it("hace nodos en la rama correcta", function () {
    tree.insert(12);
    tree.insert(22);
    expect(tree.size()).toBe(3);
    expect(tree.left.value).toBe(12);
    expect(tree.right.value).toBe(22);
  });

  it("ordena valores cuando agrega", function () {
    expect(tree.value).toBe(20);
    tree.insert(15);
    expect(tree.left.value).toBe(15);
    tree.insert(25);
    expect(tree.right.value).toBe(25);
    tree.insert(5);
    expect(tree.left.left.value).toBe(5);
    tree.insert(17);
    tree.insert(21);
    tree.insert(28);
    tree.insert(0);
    tree.insert(14);
    tree.insert(50);
    tree.insert(1);
    tree.insert(45);
    tree.insert(13);
    tree.insert(12);
    tree.insert(11);
    expect(tree.left.left.right.left.left.left.value).toBe(11);
    tree.insert(30);
    tree.insert(35);
    tree.insert(33);
    tree.insert(31);
    tree.insert(34);
    expect(tree.right.right.right.left.left.right.left.right.value).toBe(34);
  });

  it("`contains` devuelve true si el valor esta en el tree", function () {
    valuesToInsert.forEach(function (value) {
      tree.insert(value);
    });
    valuesToInsert.forEach(function (value) {
      expect(tree.contains(value)).toBe(true);
    });
  });

  it("`contains` devuelve false si el valor no esta en el tree", function () {
    valuesToInsert.forEach(function (value) {
      tree.insert(value);
    });
    [6, 23, 37, 51].forEach(function (value) {
      expect(tree.contains(value)).toBe(false);
    });
  });

  // ventaja obvia: valores son procesados respetando su orden lógico
  it('corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order"', function () {
    valuesToInsert.forEach(function (value) {
      tree.insert(value);
    });
    tree.depthFirstForEach(function (val) {
      testArr.push(val);
    });
    expect(testArr).toEqual([
      0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45,
      50,
    ]);
    testArr = [];
    tree.depthFirstForEach(function (val) {
      testArr.push(val);
    }, "in-order");
    expect(testArr).toEqual([
      0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45,
      50,
    ]);
  });

  // caso de uso: copiar el arbol (procesa primero la raiz)
  it('corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"', function () {
    valuesToInsert.forEach(function (value) {
      tree.insert(value);
    });
    tree.depthFirstForEach(function (val) {
      testArr.push(val);
    }, "pre-order");
    expect(testArr).toEqual([
      20, 15, 5, 0, 1, 14, 13, 12, 11, 17, 25, 21, 28, 50, 45, 30, 35, 33, 31,
      34,
    ]);
  });

  // caso de uso: borrar un arbol, procesa primero las hojas
  it('corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"', function () {
    valuesToInsert.forEach(function (value) {
      tree.insert(value);
    });
    tree.depthFirstForEach(function (val) {
      testArr.push(val);
    }, "post-order");
    expect(testArr).toEqual([
      1, 0, 11, 12, 13, 14, 5, 17, 15, 21, 31, 34, 33, 35, 30, 45, 50, 28, 25,
      20,
    ]);
  });

  // util cuando los niveles del arbol tienen significado (org chart? DOM elements?)
  it("corre breadth-first cuando breadthFirstForEach() es ejecutado", function () {
    valuesToInsert.forEach(function (value) {
      tree.insert(value);
    });
    var depth = [];
    tree.breadthFirstForEach(function (val) {
      depth.push(val);
    });
    expect(depth).toEqual([
      20, 15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 13, 45, 12, 30, 11, 35, 33, 31,
      34,
    ]);
  });
});

describe("factorear(num)", function () {
  it("Debería devolver ...?", function () {
    expect(factorear(180)).toEqual([1, 2, 2, 3, 3, 5]);
    expect(factorear(32)).toEqual([1, 2, 2, 2, 2, 2]);
    expect(factorear(33)).toEqual([1, 3, 11]);
    expect(factorear(1)).toEqual([1]);
  });
});

describe("bubbleSort(array)", function () {
  it("Debe retornar el array ordenado de menor a mayor", function () {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(bubbleSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(bubbleSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe("insertionSort(array)", function () {
  it("Debe retornar el array ordenado de menor a mayor", function () {
    expect(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(insertionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(insertionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe("selectionSort(array)", function () {
  it("Debe retornar el array ordenado de menor a mayor", function () {
    expect(selectionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(selectionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(selectionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe("quickSort(array)", function () {
  it("Debe retornar el array ordenado de menor a mayor", function () {
    expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(quickSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(quickSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});

describe("mergeSort(array)", function () {
  it("Debe retornar el array ordenado de menor a mayor", function () {
    expect(mergeSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(mergeSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
    expect(mergeSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
  });
});