const meuDicionario = new Map();

meuDicionario.set('oi', 'Oi tudo bem?')
meuDicionario.set('blz', 'beleza')
meuDicionario.set('vc', 'Você')

// console.table(meuDicionario);

// console.log(meuDicionario.delete('filho'));
// meuDicionario.clear();
// // cuidado com sace sensitive
// if(meuDicionario.has('vc')) console.log('Vc existe')
// console.table(meuDicionario)

// meuDicionario.forEach((value, key) =>{
//     console.log(`${key}: ${value}`);
// })

for (let entrada of meuDicionario.entries()){
    console.log(entrada);
}

for (let valor of meuDicionario.values()){
    console.log(valor);
}

for (let chave of meuDicionario.keys()){
    console.log(chave);
}

console.log(meuDicionario.size)