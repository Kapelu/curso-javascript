const dateSort = require("../10");

describe("EJERCICIO 10: dateSort", function () {
  it("dateSort Debe devolvar un array ordenado con los números del array y el objeto recibido.", function () {
    let array1 = [
      new Date('2002-09-05'),
      new Date('2022-05-12'),
      new Date('2013-04-28'),
      new Date('1996-10-01')
    ];
    let array2 = [
      new Date('2022-01-01'),
      new Date('2022-05-05'),
      new Date('2022-02-02'),
      new Date('2022-04-04'),
      new Date('2022-06-06'),
      new Date('2022-03-03')
    ];
    expect(dateSort(array1)).toEqual([
      new Date('2022-05-12'),
      new Date('2013-04-28'),
      new Date('2002-09-05'),
      new Date('1996-10-01')
    ]);
    expect(dateSort(array2)).toEqual([
      new Date('2022-06-06'),
      new Date('2022-05-05'),
      new Date('2022-04-04'),
      new Date('2022-03-03'),
      new Date('2022-02-02'),
      new Date('2022-01-01')
    ]);
  });
});
