const express = require('express')
const app = express()

//todas las peticiones que entran en / van a ejecutar la funcion de flecha
app.get('/', (req, res)=>{
    // res.send('Viendo tutoriales de webservice')
    let salida ={
        nombre: 'Ricardo Matu',
        edad: 21,
        estatura: 1.70,
        ciudad: 'Mérida',
        profecion: 'Aprendiz',
        url: req.url
    };
    res.send(salida); //el send sirve para enviar respuesta con datos 
    // res.status(404).end(); //el end sirve para enviar respuesta sin datos
});

//escuchando en el puerto
app.listen(3000)
console.log('escuchando...')



