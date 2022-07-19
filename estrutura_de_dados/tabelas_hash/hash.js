class HashTable{
    constructor(){
        this.table = new Array(127)
        this.size = 0

    }

    _hash(key){
        let hash = 0
        for (let i = 0; i<key.length; i++){
            hash += key.charCodeAt(i)

        }
        return hash % this.table.length;
    }
    put(key, value){
        const index = this._hash(key)
        this.table[index] = [key, value]
        this.size++;
    }
    get(key){
        const index = this._hash(key);
        return this.table[index];
    }
    delete(key){
        const index = this._hash(key);
        if(this.table[index] && this.table[index].length){
            this.table[index] = undefined
            this.size--;
            return true
        } else return false;
    }
    clear(){
        this.table = [];
        this.size = 0;
    }
}


const listaContatos = new HashTable();
listaContatos.put('gabriel',    '9988557744')
listaContatos.put('vanessa',    '9900122244')
listaContatos.put('Leandro',    '9988007744')
listaContatos.put('Romeu',      '1188557744')

console.table(listaContatos.table);

console.log(listaContatos.get('Romeu'))