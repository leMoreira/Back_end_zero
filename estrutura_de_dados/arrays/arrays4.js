// const aPagarEmReais = [10, 20, 40, 100];
// const cotacaoDolar = 5;
// const aPagarEmDolar = aPagarEmReais.map( (valor) => valor * cotacaoDolar);
// console.table(aPagarEmReais);
// console.table(aPagarEmDolar);

// const aPagarEmReais = [10, 20, 40, 100];
// const aPagarVanessa = aPagarEmReais.filter( (valor) => valor > 30);
// console.table(aPagarEmReais);
// console.table(aPagarVanessa);

// const aPagarEmReais = [10, 20, 40, 100];
// const aPagarVanessa = aPagarEmReais.find( (valor) => valor > 30); 
// console.table(aPagarEmReais);
// console.table(aPagarVanessa);

// const aPagarEmReais = [10, 20, 40, 100];
// const aPagarVanessa = aPagarEmReais.findIndex( (valor) => valor > 30); 
// console.table(aPagarEmReais);
// console.table(aPagarVanessa);

// const aPagarEmReais = [10, 20, 30, 100];
// const totalAPagar = aPagarEmReais.reduce( 
//     (acumulador, valor) => acumulador + valor, 0 ); 
// console.table(aPagarEmReais);
// console.table(totalAPagar);

// const aPagarEmReais = [10, 20, 30, 100];
// const contasBaixas = aPagarEmReais.every((valor) => {
//     return valor <= 1000;
// }); 
// console.table(aPagarEmReais);
// console.table(contasBaixas);

// const aPagarEmReais = [10, 20, 30, 100, 5000];
// const temContaAlta = aPagarEmReais.some((valor) => {
//     return valor < 20;
// }); 
// console.table(aPagarEmReais);
// console.table(temContaAlta);

// const contasDaVanessa = [10,20,30,40];
// const contasDoGabriel = [5,6,7,8];

// const contasDosCDFs = contasDaVanessa.concat(contasDoGabriel);
// console.table(contasDosCDFs)

// const contasDaVanessa = [10,20,30,40];
// const contasDoGabriel = [5,6,7,8];

// const contasDosCDFs = contasDaVanessa.concat(contasDoGabriel);
// console.table(contasDosCDFs)
// contasDosCDFs.fill(0) // zera todos os valores
// console.table(contasDosCDFs)

// const contasDaVanessa = [10,20,30,40, [1,2,3,4]];
// const novasContasdaVanessa = contasDaVanessa.flat();
// console.table(novasContasdaVanessa)

// const clientes = ['Vanessa', 'Gabriel', 'Andreia', 'Juliana', 'Gilberto']
// console.table(clientes)

// clientes.sort();
// console.table(clientes)

// const numeros = [10, 5, 1000, 89000, 1.99]
// console.table(numeros);
// numeros.sort((a,b)=> a - b);
// console.table(numeros);

// const numeros = [10, 5, 1000, 89000, 1.99]
// console.table(numeros);
// numeros.sort((a,b)=> b - a);
// console.table(numeros);


const clientes = [
    ['Vanessa',3],
    ['Gabriel',1],
    ['Andreia',4],
    ['Juliana',2], 
    ['Gilberto',5]];

    console.table(clientes);
    clientes.sort((a,b)=> b[1] - a[1]);
    console.table(clientes);