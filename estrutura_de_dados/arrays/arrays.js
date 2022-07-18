// let meuArray = ['Vanessa', 'Gabriel']
// let meuArray2 = new Array()
// let meuArray3 = new Array('Gabriel')
// console.table(meuArray) // tabular
// console.log(meuArray2)
// console.log(meuArray3)

let frutas = new Array('Abacaxi')
frutas.push('banana')
frutas.push('maçã')
frutas.push('Morango')
// o push vai ser inserido um valor no final do array


frutas.unshift('Tangerina') // Insere no início do array


console.table(frutas)
console.log(frutas.length)

frutas.pop(); // remove último elemento do array
frutas.shift(); // remove o primeiro elemento do array
const frutaRemovida = frutas.splice(2, 1) // splice ele remove qual índice eu escolher (
    //2 - número do índice,
    // 1 - quantidade, 
    //'nome' -> para fazer a troca)
console.table(frutas)
console.log(frutaRemovida)