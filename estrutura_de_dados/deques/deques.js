class Deque{
    constructor(){
        this.itens = []
    }

    insertFront(item){
       return  this.itens.unshift(item); //  no início
    }

    insertLast(item){
       return  this.itens.push(item);// no final
    }

    deleteFront(){
        if(this.isEmpty()) return undefined
       return  this.itens.shift()
    }

    deleteLast() {
        if(this.isEmpty()) return undefined
        return this.itens.pop();
    }

    front(){
    return this.itens[0]
    }

    rear(){
    return this.itens[this.itens.length - 1]
    }

    isEmpty(){

        return this.itens.length == 0;
    }

   
}

const deque = new Deque();
console.log(deque.isEmpty())


deque.insertFront('Ferrari')
deque.insertFront('Fusca')
deque.insertFront('Del Rey')

console.table(deque.itens)

deque.insertLast('Uno Fiat 147')
console.table(deque.itens)

deque.deleteFront();
deque.deleteLast();
console.table(deque.itens)

console.log(deque.front())
console.log(deque.rear())

