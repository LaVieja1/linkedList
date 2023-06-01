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