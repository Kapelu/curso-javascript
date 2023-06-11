const { LinkedList } = require('../08.js');
  
describe('EJERCICIO 1: oddList', function () {
  it('oddList debe ordenar los elementos de la lista de mayor a menor', function () {
    var linkedList = new LinkedList();
    linkedList.add(2);
    linkedList.add(5);
    linkedList.add(7);
    linkedList.add(8);
    linkedList.add(12);
    linkedList.add(3);
    let filteredList = linkedList.oddList();
    expect(filteredList.head.value).toEqual(2);
    expect(filteredList.head.next.value).toEqual(8);
    expect(filteredList.head.next.next.value).toEqual(12);
    expect(filteredList.head.next.next.next).toEqual(null);
    var linkedList2 = new LinkedList();
    linkedList2.add(1);
    linkedList2.add(2);
    linkedList2.add(3);
    linkedList2.add(4);
    linkedList2.add(5);
    var filteredList2 = linkedList2.oddList();
    expect(filteredList2.head.value).toEqual(2);
    expect(filteredList2.head.next.value).toEqual(4);
    var linkedList3 = new LinkedList();
    expect(linkedList3.oddList()).toEqual(false);
  })
});
