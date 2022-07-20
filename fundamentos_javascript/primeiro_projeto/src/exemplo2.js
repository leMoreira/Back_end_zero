const chark = require('chalk')
const main = () =>{
    console.log(chark.bgGreen(chark.whiteBright("Fundamentos JavaScript")))

    let divisor = 'h';
    try{
        if(!isNaN(divisor)){
            console.log(1/divisor)
        } else{
            throw new Error(`${divisor} não é um número`)
        }
        

    }catch (error){
        console.log(error);
    } finally{
        console.log("Fim")
    }

}


module.exports = {main}