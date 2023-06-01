import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if (this.listHead == null) this.prepend(value); //Si el primer node esta vacio, este sera el primero
        else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(value);
        }
    }

    prepend(value) {
        let tmp = null;
        if (this.listHead != null) tmp = this.listHead; //Si el node inicial no esta vacio, lo pasa al tmp
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp; //El siguiente node pasa a ser el tmp
    }


    size() {
        let tmp = this.listHead;
        let counter = 0;
        while (tmp != null) {
            counter++;
            tmp = tmp.nextNode; //Mientras el proximo node no este vacio, se incrementa el counter
        }
        return counter;
    }

    head() {
        return this.listHead; //Devuelve el primer node
    }

    tail() {
        let tmp = this.listHead;
        while (tmp.nextNode != null) tmp = tmp.nextNode; //Detecta el ultimo node si el proximo esta vacio
        return tmp;
    }

    at(index) {
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode; //Empieza por el primer indice, y llega hasta el indicado, si esta vacio devuelve un error.
            if (tmp == null) return 'No hay un item para este indice';
        }
        return tmp;
    }

    pop() {
        let current = this.listHead;
        let prev = null;
        while (current.nextNode != null) { //Cuando el proximo node este vacio, el ultimo node es null;
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value) {
        let tmp = this.listHead;
        while (tmp != null) {
            if (tmp.value === value) return true; //Mientras el proximo node no este vacio, si el actual node es igual al value, devuelve true, si no esta, devuelve false
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.listHead;
        let index = 0;
        while (tmp != null) {
            if (tmp.value === value) return index; //Mientras el proximo node no este vacio, aumenta el index hasta que encuentra el correcto, sino devuelve null. 
            tmp = tmp.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let tmp = this.listHead;
        let stringList = '';
        while (tmp != null) {
            stringList += `( ${tmp.value} ) -> `;
            tmp = tmp.nextNode;
        }
        return (stringList += 'null');
    }
}