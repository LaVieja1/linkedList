import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.prepend('1');
linkedList.append('2');
linkedList.append('3');
console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(2));
console.log(linkedList.at(5));
linkedList.pop();
console.log(linkedList.toString());
console.log(linkedList.contains('2'));
console.log(linkedList.find('1'));
linkedList.prepend('3');
console.log(linkedList.toString());
linkedList.insertAt('4', 2);
console.log(linkedList.toString());
linkedList.insertAt('5', 8);
console.log(linkedList.toString());
linkedList.removeAt(2);
console.log(linkedList.toString());