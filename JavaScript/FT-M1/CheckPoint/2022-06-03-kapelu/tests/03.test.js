const { LinkedList } = require("../DS");
const devuelvePares = require("../03");
const miLista1 = new LinkedList();
[1, 2, 3, 4, 6, 7, 8, 9].forEach((e) => {
  miLista1.add(e);
});
const miLista2 = new LinkedList();
[20, 30, 40, 60, 70, 80, 91].forEach((e) => {
  miLista2.add(e);
});
const miLista3 = new LinkedList();
[201, 301, 401, 601, 701, 801, 91].forEach((e) => {
  miLista3.add(e);
});

describe("Test del ejercicio 03 - Función devuelvePares", () => {
  test("La función debe retornar un array con los números pares que encontró en el recorrido de la lista", () => {
    expect(devuelvePares(miLista1)).toEqual([2, 4, 6, 8]);
    expect(devuelvePares(miLista2)).toEqual([20, 30, 40, 60, 70, 80]);
  });
  test("La función debe retornar false en caso de no encontrar ningún número par en la lista", () => {
    expect(devuelvePares(miLista3)).toEqual(false);
  });
});

