const secuenciaHenry = require("../04");

describe("EJERCICIO 4: secuencia Henry", function () {
  var obj = {
    1: true,
    first: 2,
    7: ["F", "r", "a", "n", "c", "o!"],
    h: { a: 1 },
    z: [],
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  it("Debería devolver 2 cuando n es 0 y obj el mostrado en el ejemplo", function () {
    expect(secuenciaHenry(obj, 0)).toEqual(2);
  });
  it("Debería devolver 9 cuando n es 1 y obj el mostrado en el ejemplo", function () {
    expect(secuenciaHenry(obj, 1)).toEqual(9);
  });
  it("Debería devolver 289305 cuando n es 5 y obj el mostrado en el ejemplo", function () {
    expect(secuenciaHenry(obj, 5)).toEqual(289305);
  });
  it("Debería devolver null cuando n es negativo", function () {
    expect(secuenciaHenry(obj, -3)).toEqual(null);
  });
});

