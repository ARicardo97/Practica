const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirrección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
console.log(argv.direccion);

//headers
const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=mexico',
    headers: { 'X-RapidAPI-Key': 'd0c8152c6cmshd02c9c86f5ffb01p107be8jsnb77a4a8a2101' }
});

//recibimos la respuesta y error
instance.get()
        .then( resp =>{
            console.log(resp.data);
        })
        .catch( err =>{
            console.log('Error!!', err);
        });