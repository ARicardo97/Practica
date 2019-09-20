const axios = require('axios');

//Creamos una funcion para que sea mas optima de usar
//es una funcion de asignacion, cuando sea constante no se va poder reasignar
const getLugarLatLng =(direccion)=>{

    const encodeUlr = encodeURI(argv.direccion); //para no mal interpretar el espacio en blanco en la terminal
    console.log(encodeUlr);

//headers
    const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    headers: { 'X-RapidAPI-Key': 'd0c8152c6cmshd02c9c86f5ffb01p107be8jsnb77a4a8a2101' }
});

//recibimos la respuesta y error
    instance.get()
        .then( resp =>{
            console.log(resp.data.Results[0]);
        })
        .catch( err =>{
            console.log('Error!!', err);
        });

    //Esperamos una respuesta
    return{
        direccion,
        lat,
        lng
    }
}

