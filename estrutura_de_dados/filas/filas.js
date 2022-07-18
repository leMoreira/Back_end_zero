class Fila {
    constructor(){
        this.itens = []
    }

    enqueue(item){
        this.itens.push(item);
    }

    isEmpty(){
        return this.itens.length == 0
    }
    dequeue(){
        if ( this.isEmpty()) return undefined

        return this.itens.shift();
    }

    front(){
        return this.itens[0];
    }

    rear(){
        return this.itens[this.itens.length - 1];
    }
}


const fila = new Fila()
console.table(fila.isEmpty())
    fila.enqueue('Ferrari')
    fila.enqueue('Fiat')
    fila.enqueue('Chevrolet')
    fila.enqueue('Ford')
    fila.dequeue();
    console.table(fila.itens)
    console.table(fila.isEmpty())
    console.table(fila.front())
    console.table(fila.rear())
