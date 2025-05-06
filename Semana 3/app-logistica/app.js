const yargs = require('yargs');
const dayjs = require('dayjs');
const colors = require('colors');

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
    })
    .argv;


const costoBase = 50;
const tiempoProcesamiento = 2; // dias


const peso = argv.peso;
const distancia = argv.distancia;
const diasEntrega = Math.ceil(distancia / 100); // redondear hacia arriba 0.6 a 1, 1.2 a 2, etc.

let pesoExcedente = peso > 5 ? (peso - 5) * 20 : 0;
let distanciaExcedente = distancia > 50 ? (distancia - 50) * 10 : 0;

// fecha actual, sumar tiempo de procesamiento y dias de entrega 'day' y convierte a formato 'DD/MM/YYYY'
let fechaEntrega = dayjs().add((tiempoProcesamiento + diasEntrega), 'day').format('DD/MM/YYYY');

let costoTotal = costoBase + pesoExcedente + distanciaExcedente;


console.log('\n++++++++++++++++++++++++++++++++++\n'.green);
console.log(`-- Detalles del envio --`.bold.cyan);
console.log(`Peso del paquete: ${peso} libras`);
console.log(`Costo base: L.${costoBase}`);
console.log(`Costo por peso excedente: L.${pesoExcedente}`.yellow);
console.log(`Costo por distancia excedente: L.${distanciaExcedente}`.yellow);
console.log(`Fecha estimada de entrega: ${fechaEntrega}`);
console.log(`Costo total: L.${costoTotal}`.underline.cyan.bold);
console.log('\n++++++++++++++++++++++++++++++++++'.green);





