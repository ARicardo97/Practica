const axios = require('axios');

//Creamos una funcion para que sea mas optima de usar
//es una funcion de asignacion, cuando sea constante no se va poder reasignar
const getLugarLatLng = async (dir)=>{

    const encodeUlr = encodeURI(dir); //para no mal interpretar el espacio en blanco en la terminal

//headers
    const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    headers: { 'X-RapidAPI-Key': 'd0c8152c6cmshd02c9c86f5ffb01p107be8jsnb77a4a8a2101' }
});

//recibimos la respuesta y error
    const resp = await instance.get();

    if( resp.data.Results.length == 0){
        //si es 0 quiere decir que no existe un resultado
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0]; //si hay resultados solo me interesa la primera posición
    //obtener los siguientes datos
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    //Esperamos una respuesta
    return{
        direccion,
        lat,
        lng
    }
}

module.exports={
    getLugarLatLng
}

