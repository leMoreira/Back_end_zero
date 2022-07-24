const {promises:{ readFile, writeFile}} = require('fs')
const { join } = require('path')

// Promise - vai acontecer alguma coisa no futuro
// Promise rejeitada - Rejected 
// Promise resolvida - Fulfilled

//.then((data) =>{})
//.catch((error) =>{}) 

const packageJsonPath = join(__dirname, 'package.json')
const destPath = join(__dirname, 'pakage.copy.promise.json');

const notExistsPath = join(__dirname, 'arquivo-nao-existe.json');

readFile(packageJsonPath)
.catch((error) =>{
    console.error("Deu erro, usando o valor padrão ", error.message)
    return '{"message: "oooops"}'
})
    .then((data) =>{
        console.log(data)
        console.log("Terminou de ler")
   return  writeFile(destPath, data)
        
    }) 
    
    // resultado da promise da escrita
    .then(() =>{
    console.log("Terminou de escrever");
})

.catch((error) =>{
    console.error("Deu erro novamente ", error.message)
})



// const readPromise = redFile(packageJsonPath)

// const copyPromise = readPromise.then((data) =>{
//     console.log("Terminei de ler")
// return  writeFile(destPath, data)
    
// }) 

// const endPromise = copyPromise.then(() => {
//     console.log('Terminei de escrever')
// })