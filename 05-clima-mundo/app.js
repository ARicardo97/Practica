const lugar = require('./lugar/lugar.js'); //traer este js
const clima = require('./clima/clima.js');
//var colors = require('colors');

const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirrección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

//Una funcion Async afuerza regresa una promesa
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log); //imprimimos la respuesta

// clima.getClima(37.779999, -122.419998)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion) =>{
    
    try{
        const coords = await lugar.getLugarLatLng(direccion); //obtener la info de coordenadas
        const temp = await clima.getClima(coords.lat, coords.lng); //obtener clima de acuerdo las coordenadas
        return `El clima de ${coords.direccion} es de ${temp}`;
    }catch(e){
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);