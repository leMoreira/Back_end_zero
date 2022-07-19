const meuConjunto = new Set();

meuConjunto.add('Leandro Moreira');
meuConjunto.add('Carol Pivesso');
meuConjunto.add('Alexandre Carlos');
meuConjunto.add('Alexandre Carlos');
meuConjunto.add(2022);
meuConjunto.add(true);
meuConjunto.add({
    nome: 'Vanessa'
})

meuConjunto.add(['Gabriel', 'Vanessa']);

const cdfs = ['Gabriel', 'Vanessa'];
meuConjunto.add(cdfs);

const entradas = meuConjunto.entries();
for (let entrada of entradas){
    console.log(entrada);
}

// const valoresConjunto = meuConjunto.values()
// console.table(valoresConjunto.next().value);
// console.table(valoresConjunto.next().value);
// meuConjunto.forEach((valor) =>{
//     console.table(valor);
// })
// console.table(meuConjunto)
// const times = [
//     'São Paulo', 
//     'Flamengo', 
//     'Fluminense', 
//     'Palmeiras', 
//     'São Paulo'];

//     const meuCampeonato = new Set(times);

//     console.table(meuCampeonato)

// for (let valor of valoresConjunto){
//     console.log(valor);
// }

