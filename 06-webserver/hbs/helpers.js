
const hbs = require('hbs');

//helpers para el texto
hbs.registerHelper('capitalizar', (texto)=>{
    //creamos un arreglo q contenga todas las palabras
    let palabras = texto.split('  '); //lo separo espacio vacio con spli 
    //barremos todo ese arreglo con un forEach, recibo lo que es palabra  y la posicion index donde se encuentra
    palabras.forEach( (palabra, idx) =>{
        //actualizar la posicion de las palabras, actualizar esa palabra en particular en posicion del arreglo
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
        return palabras.join(''); //juntamos todo el arreglo pero separarlos con ' '
});