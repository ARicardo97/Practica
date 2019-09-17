//MULTIPLICACIÓN

//Requireds
const fs = require('fs');

let crearArchivo = (base) =>{
    return new Promise( (resolve, reject) =>{

        if(!Number(base)){
            reject(`La base introducido ${base} No es un número`);
            return;
        }

        let data = ''; //se inicializa en vacio
        // i= 10 Empiezas.. i<=15 Terminas..
        for(let i = 1; i<= 10; i++){
            data += `${base} * ${i} = ${base * i}\n`; //salto de linea se le agrega \n
        }
        
        
        //CREANDO UNA TABLA DE DATOS
        //navegamos en la carpeta tablas/ donde se guardaran los archivos
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {  //guardamos los archivos que contiene en data
          
            if (err) reject (err)
          else
             resolve(`tabla-${base}.txt`)
          //console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
}

//Exportar archivo
module.exports = {
   crearArchivo
}