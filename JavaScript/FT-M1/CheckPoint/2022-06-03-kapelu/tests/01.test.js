const { BinarySearchTree } = require("../01");

describe("Test de ejercicio 01 - Agregar productos", () => {
  test("Si el método recibe un producto que no existe en la lista, debe retornar el string 'Producto inexistente'", () => {
    const arbolDeProductos = new BinarySearchTree("Leche");
    expect(arbolDeProductos.agregarProductos("Gaseosa")).toEqual(
      "Producto inexistente"
    );
    expect(arbolDeProductos.agregarProductos("Crema de Leche")).toEqual(
      "Producto inexistente"
    );
    expect(arbolDeProductos.agregarProductos("Hamburguesas")).toEqual(
      "Producto inexistente"
    );
  });

  test("Si el método recibe un producto que ya ha sido insertado en la góndola, debe retornar el string 'Ya existe el producto'", () => {
    const arbolDeProductos = new BinarySearchTree("Leche");
    const arbolDeProductos2 = new BinarySearchTree("Jugo");
    expect(arbolDeProductos.agregarProductos("Leche")).toEqual(
      "Ya existe el producto"
    );
    expect(arbolDeProductos2.agregarProductos("Jugo")).toEqual(
      "Ya existe el producto"
    );
  });

  test("El producto debe ubicarse en el lugar correspondiente, según su precio", () => {
    const arbolDeProductos = new BinarySearchTree("Leche");
    arbolDeProductos.agregarProductos("Pan");
    expect(arbolDeProductos).toEqual({
      value: "Leche",
      left: {
        value: "Pan",
        left: null,
        right: null,
      },
      right: null,
    });
    arbolDeProductos.agregarProductos("Frutas");
    expect(arbolDeProductos).toEqual({
      value: "Leche",
      left: {
        value: "Pan",
        left: null,
        right: null,
      },
      right: {
        value: "Frutas",
        left: null,
        right: null,
      },
    });
    arbolDeProductos.agregarProductos("Queso");
    expect(arbolDeProductos).toEqual({
      value: "Leche",
      left: {
        value: "Pan",
        left: null,
        right: null,
      },
      right: {
        value: "Frutas",
        left: null,
        right: {
          value: "Queso",
          left: null,
          right: null,
        },
      },
    });
  });

  test("En caso de agregar el producto correctamente, el método debe retornar el nuevo nodo creado con el nombre del producto", () => {
    const arbolDeProductos = new BinarySearchTree("Leche");
    expect(arbolDeProductos.agregarProductos("Pan")).toEqual({
      value: "Pan",
      left: null,
      right: null,
    });
    expect(arbolDeProductos.agregarProductos("Arroz")).toEqual({
      value: "Arroz",
      left: null,
      right: null,
    });
  });
});

