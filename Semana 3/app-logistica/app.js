const yargs = require('yargs');
const dayjs = require('dayjs');

const argv = yargs
    .options('peso', {
        alias: 'p',
        type: 'number',
        demandOption: true,
        describe: 'Peso del paquete en libras'
    })
    .option('distancia', {
        alias: 'd',
        describe: 'Distancia del envio en kilometros',
        type: 'number',
        demandOption: true
    }).argv;


const costoBase = 50;
const tiempoProcesamiento = 2; // dias


const peso = argv.peso;
const distancia = argv.distancia;


let pesoExcedente = peso > 5 ? (peso - 5) * 20 : 0;
let distanciaExcedente = distancia > 50 ? (distancia - 50) * 10 : 0;


console.log('\n++++++++++++++++++++++++++++++++++\n');
console.log(`-- Detalles del envio --`);
console.log(`Peso del paquete: ${peso} libras`);
console.log(`Costo base: L.${costoBase}`);
console.log(`Costo por peso excedente: L.${pesoExcedente}`);
console.log(`Costo total: L.${costoBase + pesoExcedente}`);
console.log('\n++++++++++++++++++++++++++++++++++');





