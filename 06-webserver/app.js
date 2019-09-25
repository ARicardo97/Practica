//declaramos una constante
const http = require('http');

//para escuchar peticiones que vienen del servidor
// recibimos un calback con las solicitude o req  
// junto con las respuestas que nuestro servidor le va enviar
http.createServer( (req, res)=>{
    res.write('hola servidor');
    res.end(); //para decir que ya tenemos la respuesta
})
//especificar que puerto va estar escuchando general: puerto 3000 o puerto: 8080 si es local
.listen(8080);

console.log('escuchando en el puerto 8080');