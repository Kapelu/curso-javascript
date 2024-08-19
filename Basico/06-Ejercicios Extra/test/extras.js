/* eslint-disable no-undef */
const {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
} = require("../extras");

describe("EJERCICIOS EXTRA", function () {
  describe("mayuscula(nombre)", function () {
    it("Debe retornar el mismo nombre, pero con la primera letra en mayúscula", function () {
      expect(mayuscula("mario")).toBe("Mario");
      expect(mayuscula("ana")).toBe("Ana");
    });
  });

  describe("invocarCallback(cb)", function () {
    it("Debe invocar/ejecutar el callback", function () {
      const cb = jest.fn();
      invocarCallback(cb);
      expect(cb).toHaveBeenCalled();
    });
  });

  describe("operacionMatematica(n1, n2, cb)", function () {
    it("Debe retornar el resultado del callback habiéndole pasado como arguemnto los números recibidos.", function () {
      const cb = jest.fn();
      operacionMatematica(100, 20, cb);
      expect(cb).toHaveBeenCalled();
    });
  });

  describe("sumarArray(arrayOfNumbers, cb)", function () {
    it("Debe sumar todos los números del arreglo y pasarle el resultado como argumento al callback.", function (done) {
      sumarArray([1, 2, 3, 4, 5], function (sum) {
        expect(sum).toBe(15);
        done();
      });
    });
  });

  describe("forEach(array, cb)", function () {
    it("Debe pasarle como argumento cada elemento del arreglo al callback", function () {
      const nums = [];
      forEach([1, 2, 3, 4, 5], function (num) {
        nums.push(num);
      });
      expect(nums).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("map(array, cb)", function () {
    it("Debe retornar un arreglo con el resultado de todos los elementos del arreglo pasados por el callback", function () {
      const squares = map([1, 2, 3, 4, 5], function (num) {
        return num * num;
      });
      expect(squares).toEqual([1, 4, 9, 16, 25]);
    });
  });

  describe("filter(arrayOfStrings)", function () {
    it('Debe retornar un arreglo con todos los elementos que comiencen con la letra "a"', function () {
      var array = [
        "abajo",
        "pera",
        "escalera",
        "alerta",
        "indice",
        "azteca",
        "arbol",
        "buzo",
      ];
      expect(filter(array)).toEqual(["abajo", "alerta", "azteca", "arbol"]);
    });
  });

  describe("deObjetoAarray(objeto)", function () {
    it("Debe retornar un arreglo donde cada sub-arreglo contiene el par clave:valor del objeto", function () {
      expect(deObjetoAarray({ x: 1, y: 2 })).toEqual([
        ["x", 1],
        ["y", 2],
      ]);
      expect(deObjetoAarray({ x: 10, y: 25 })).toEqual([
        ["x", 10],
        ["y", 25],
      ]);
    });
  });

  describe("numberOfCharacters(string)", function () {
    it("Debe retornar un objeto donde cada par clave:valor sea una letra:cantidadDeRepeticiones del string recibido", function () {
      expect(numberOfCharacters("sktpwrroqstkrpwwsqtqopwktsd")).toEqual({
        s: 4,
        k: 3,
        t: 4,
        p: 3,
        w: 4,
        r: 3,
        o: 2,
        q: 3,
        d: 1,
      });
      expect(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")).toEqual({
        a: 5,
        b: 2,
        c: 2,
        d: 4,
        f: 4,
        h: 1,
        j: 4,
        s: 5,
      });
    });
  });

  describe("capToFront(string)", function () {
    it("Debe enviar todas las letras en mayúsculas al comienzo del string", function () {
      expect(capToFront("soyHENRY")).toEqual("HENRYsoy");
      expect(capToFront("DESArrollaDOR")).toEqual("DESADORrrolla");
    });
  });

  describe("asAmirror(frase)", function () {
    it("Debe transformar la frase en una frase espejo.", function () {
      expect(asAmirror("I love you so much!")).toBe("I evol uoy os !hcum");
      expect(asAmirror("The Henry Challenge is close!")).toBe(
        "ehT yrneH egnellahC si !esolc"
      );
    });
  });

  describe("capicua(numero)", function () {
    it("Debe retornar el string esperado dependiendo si el número es o no capicúa.", function () {
      expect(capicua(12321)).toEqual("Es capicua");
      expect(capicua(1111)).toEqual("Es capicua");
      expect(capicua(105217)).toEqual("No es capicua");
      expect(capicua(7878700)).toEqual("No es capicua");
    });
  });

  describe("deleteAbc(string)", function () {
    it('Debe retornar el mismo string, pero eliminando las letras "a", "b" y "c"', function () {
      expect(deleteAbc("abcefgh")).toEqual("efgh");
      expect(deleteAbc("abc")).toEqual("");
      expect(deleteAbc("plural")).toEqual("plurl");
      expect(deleteAbc("limon")).toEqual("limon");
    });
  });

  describe("sortArray(arrayOfStrings)", function () {
    it("Debe retornar un nuevo arreglo con los elementos en orden de crecimiento a partir de sus longitudes", function () {
      expect(sortArray(["You", "are", "beautiful", "looking"])).toEqual([
        "You",
        "are",
        "looking",
        "beautiful",
      ]);
      expect(sortArray(["pera", "manzana", "alcaucil", "papa"])).toEqual([
        "pera",
        "papa",
        "manzana",
        "alcaucil",
      ]);
    });
  });

  describe("buscoInterseccion(array1, array2)", function () {
    it("Debe retornar un arreglo con los elementos en común de cada arreglo. Si no hay elementos en común, retornar un arreglo vacío", function () {
      expect(buscoInterseccion([1, 2, 3], [1, 5, 8, 3])).toEqual([1, 3]);
      expect(buscoInterseccion([7, 23, 4], [23, 70])).toEqual([23]);
      expect(buscoInterseccion([1, 20, 3], [22, 5, 7])).toEqual([]);
    });
  });
});
