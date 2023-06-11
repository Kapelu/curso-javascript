const { LinkedList } = require('../06.js');
  
describe('EJERCICIO 2: indexOf', function () {
  it('indexOf debe retornar una nueva lista con los valores repetidos filtrados', function () {
    var linkedList = new LinkedList();
    var linkedList2 = new LinkedList();
    var linkedList3 = new LinkedList();
    var linkedList4 = new LinkedList();
    linkedList.add(2);
    linkedList.add(10);
    linkedList.add(2);
    linkedList.add(8);
    linkedList.add(8);
    linkedList.add(1);
    expect(linkedList.indexOf(8)).toEqual(3);
    expect(linkedList.indexOf(1)).toEqual(5);
    expect(linkedList.indexOf(2)).toEqual(0);
    expect(linkedList.indexOf(10)).toEqual(1);
    expect(linkedList2.indexOf(5)).toEqual(false);
    linkedList3.add(3);
    linkedList3.add(3);
    linkedList3.add(3);
    linkedList3.add(3);
    expect(linkedList3.indexOf()).toEqual(-1);
    expect(linkedList3.indexOf(3)).toEqual(0);
    linkedList4.add(1);
    linkedList4.add(2);
    linkedList4.add(3);
    linkedList4.add(4);
    linkedList4.add(5);
    linkedList4.add(6);
    linkedList4.add(7);
    linkedList4.add(8);
    expect(linkedList4.indexOf(5)).toEqual(4);
    expect(linkedList4.indexOf(12321)).toEqual(-1);
    expect(linkedList4.indexOf(8)).toEqual(7);
    expect(linkedList4.indexOf(1)).toEqual(0);
  });
});