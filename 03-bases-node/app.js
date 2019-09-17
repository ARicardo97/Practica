//const argv = require('yargs').argv;

//cuando viene llaves despues de un let o un cost...significa que es una destructuración
const { crearArchivo} = require('./multiplicar/multiplicar');

//let base = 7;

//Recibiendo parametros desde la Terminal
let argv = process.argv;  //el proceso que se envia segun la posicion en el argv
let parametro = argv[2]
let base = parametro.split('=')[1] //split para separar areglos...en este caso se cambia por el =

//console.log(base)
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e =>console.log(e));