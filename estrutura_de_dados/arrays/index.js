// const saldoGabriel = 1000
// const saldoVanessa = 10000
// const total = saldoGabriel + saldoVanessa
// console.log(total)

const saldoContas = [100, 200, 40, 1.90, 300, 1000, 9.99];
// função do javascript

const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);

console.log(total)