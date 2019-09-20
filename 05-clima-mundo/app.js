const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirrección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

