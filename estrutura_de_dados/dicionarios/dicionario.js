const meuDicionario = new Map();

// meuDicionario.set('oi', 'Oi tudo bem?')
// meuDicionario.set('blz', 'beleza')
// meuDicionario.set('vc', 'Você')

// console.table(meuDicionario);

// const palavra = meuDicionario.get('blz');
// console.log(palavra)

const indiceContatos = [
    ['gabriel',     '99887766'],
    ['leandro',     '99676544'],
    ['carol',       '44298800'],
    ['karina',      '12331188'],
];


meuDicionario.set(indiceContatos[0], {nascimento: '04/07/1980'})
meuDicionario.set(indiceContatos[1], {nascimento: '04/08/1982'})
meuDicionario.set(indiceContatos[2], {nascimento: '04/02/1989'})

console.table(meuDicionario)

const vanessa = meuDicionario.get(indiceContatos[1])
console.table(vanessa)