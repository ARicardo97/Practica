
const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

//middleware
app.use( express.static(__dirname + '/public'));

//donde se guardan los parcialaes
hbs.registerPartials(__dirname + '/views/parciales');

//usando el hbs express
app.set('view engine', 'hbs');

//Helpers para el año
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});

//ejemplo 2
app.get('/', (req, res)=>{
    res.render('home',{
        nombre: 'ricardo matu',
        // anio: new Date().getFullYear()
    }); //cualquier peticion que entre en / va a renderizar en home

});

//realizar una dirreccion de about
app.get('/about', (req, res)=>{
    res.render('about',{
        // anio: new Date().getFullYear();
    });

});

//escuchando en el puerto
app.listen(3000)
console.log('escuchando...')



    //APUNTES
//todas las peticiones que entran en / van a ejecutar la funcion de flecha
// app.get('/', (req, res)=>{
//     res.send('Viendo tutoriales de webservice')
//     let salida ={
//         nombre: 'Ricardo Matu',
//         edad: 21,
//         estatura: 1.70,
//         ciudad: 'Mérida',
//         profecion: 'Aprendiz',
//         url: req.url
//     };
//     res.send(salida);//el send sirve para enviar respuesta con datos 
//     res.status(404).end(); //el end sirve para enviar respuesta sin datos
// });


