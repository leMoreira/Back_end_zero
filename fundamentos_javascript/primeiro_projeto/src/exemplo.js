const chark = require('chalk')
const main = () =>{
    console.log(chark.bgGreen(chark.whiteBright("Fundamentos JavaScript")))

const pessoa = {
    nome: "Ada",
    sobrenome: "Lovelace",
    idade: "35"
}

// const [min, max] = [10, 20]

// console.log(min)
// console.log(max)
const [primeiro, ... resto] = [10, 20, 30, 40]

console.log(resto)

imprimeDados(pessoa)

}

const imprimeDados = (pessoa) =>{

    const {nome, sobrenome, idade} = pessoa;

    console.log(`Nome ${nome} ${sobrenome}`)
    console.log(`Idade: ${idade}`)
}

module.exports = {main}