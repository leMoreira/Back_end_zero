const {readFile, writeFile, write} = require('fs')
const { join } = require('path')


const packageJasonPath = join(__dirname, 'package.json')

const destPath = join(__dirname, 'package.copy.json')

// Sem tratamento de erro
readFile(packageJasonPath, (errorRead, data) => {
console.log("Terminei de Ler! Sem tratamento de erro");
    writeFile(destPath, data, (errorWrite) =>{
console.log("Terminei de escrever!  Sem tratamento de erro");
    })
})


// Com tratamento de erro rudimentar

const notExistsPath = join(__dirname,'nao-existe')
readFile(notExistsPath, (errorRead, data) =>{
    if(!errorRead){

        console.log("> Terminei de ler!")
        write(destPath, (errorWrite) =>{
            if(!errorWrite){
                console.log(">> Terminei de Escrever!")
            }
        })
    }
})

// Com tratamento de erro: logar + early return
readFile(notExistsPath,(errorRead, data) =>{
    if(errorRead){
        console.log("> Erro de Leitura", errorRead);
        return
    } 

    console.log("> Terminei de Ler! logar + early return")

    writeFile(destPath,  data, (errorWrite) =>{
        if(errorWrite){
            console.log(">> Erro de escrita!")
            return
        }

        console.log(">> Terminei de escrever! logar + early return")
    })
})