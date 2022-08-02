const {
    promises:{
        readFile,
        writeFile
    }
} = require('fs')
const { join } = require('path');


const copyFile = async (source, dest) =>{

    try{
        const data = await readFile(source)
        await writeFile(dest, data) //Promise 
    } catch(error){
        console.error('Peguei no catch', error);
    }
    
}


const packageJsonPath = join(__dirname, 'package.json');
const destPath = join(__dirname, 'package.copy.json');
copyFile(packageJsonPath + 'dsfsdfdsfds', destPath)
.then(()=> console.log('deu certo'))