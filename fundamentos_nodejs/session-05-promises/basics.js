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

readFile(notExistsPath)
.catch((error) =>{
    console.error("Deu erro, to logando para avisar, mas vou deixar subir ", error.message)
    //return '{"message: "oooops"}'
    //return readFile(packageJsonPath)
    return Promise.reject(error)
})
    .then((data) =>{ // valor puro que você retornou ou dado promise  fulfilled
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



console.log('*'.repeat(20))
Promise.resolve(
    // valor puro
    // outra promise
)
let cachedContent = null

const readPackageJson = () =>{
    console.log('Vou ler o arquivo')
return readFile(packageJsonPath, { encoding: 'utf8'}).then(data =>{
    console.log('Eu li o arquivo')
    cachedContent = data
    return data
})
}
const getPacjageJsonContent = () => 
Promise.resolve(
    cachedContent ?? readPackageJson()
)
// getPacjageJsonContent()
// .then(data => console.log(data))
// .then(() => getPacjageJsonContent())
// .then(data => console.log(data))


const bagulhoBaseadoEmCallbacks = (param, calback) =>{
    setTimeout(() =>{
        calback(undefined, param)
    }, 1000)
}

const bagulhoBaseadoEmPromise = param =>
    new Promise((resolve, reject) =>{
        bagulhoBaseadoEmCallbacks(param, (error, data) =>{

            if(error){
                reject(error)
            } else {
                resolve(data)
            }

        })
    })

    bagulhoBaseadoEmPromise('Será mesmo?')
    .then((data) => console.log(`${data}\né mesmo heim`))

// const readPromise = redFile(packageJsonPath)

// const copyPromise = readPromise.then((data) =>{
//     console.log("Terminei de ler")
// return  writeFile(destPath, data)
    
// }) 

// const endPromise = copyPromise.then(() => {
//     console.log('Terminei de escrever')
// })