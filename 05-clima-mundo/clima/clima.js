const axios = require('axios');

//funcion async para regresar una promesa, solo es una peticion get y no hay que configurar headers
//la latitud y longitud se cambian por eso debemos recibirlos 
const getClima = async (lat, lng) => {
    //le mandamos el URL
    //await esperamos que se resuelva antes de mandar el return
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6d658d78a47116cfb51f67716e3760ee&units=metricos`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}