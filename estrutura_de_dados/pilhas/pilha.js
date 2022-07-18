class Pilha{
    constructor(){
        this.itens = []
    }

push(item ){
    this.itens.push(item);
}

pop(){
    this.itens.pop();
}

top() {
    return this.itens[this.itens.length - 1];
}

isEmpty(){
    return this.itens.length == 0;
}

}

const pilha = new Pilha();

pilha.push(10)
pilha.push(80)
pilha.push(1233)
pilha.push(90)
pilha.push(45)
pilha.push(78)

pilha.pop();
console.table(pilha.itens);
console.table(pilha.top())
console.table(pilha.isEmpty())