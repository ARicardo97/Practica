  //MINI BASE DE DATOS PARA JUGADORES
let jugadores = [{
    id:1,
    nombre:'Carlos',
    goles:15,
    posicion:'Medio',
    numero:5
},{
    id:2,
    nombre:'Juan',
    goles:8,
    posicion:'Defensa',
    numero:17
},{
    id:3,
    nombre:'Messi',
    goles:27,
    posicion:'Delantero',
    numero:10
},{
    id:4,
    nombre:'Chicharito',
    goles:20,
    posicin:'Delantero',
    numero:14
},{
    id:5,
    nombre:'Jimenez',
    goles:16,
    posicion:'Delantero',
    numero:9
}];

let formaGol = [{
    id:1,
    forma: 'cabeza',
    contra:'Chivas'
},{
    id:2,
    forma:'pase de gol',
    contra:'America'
},{
    id:3,
    forma:'tiro libre',
    contra:'Veracruz'
},{
    id:4,
    forma:'cañonazo',
    contra:'Tigres'
},{
    id:5,
    forma:'bombazo',
    contra:'Monterrey'
}];

//OBTENER JUGADORES
let getJugador = (id)=>{
    return new Promise( (resolve, reject)=>{
        let jugadorBD = jugadores.find(jugador => jugador.id === id);
        if(!jugadorBD){
            reject(`El jugador No existe`);
        }else{
            resolve(jugadorBD);
        }
    });
}


//OBTENER FORMA GOL
let getFormaGol = (jugador)=>{
    return new Promise( (resolve, reject)=>{
        let formaBD = formaGol.find(forma => forma.id === jugador.id);
        if(!formaBD){
            reject(`El jugador del Gol No existe`);
        }else{
            resolve({
                id:jugador.id,
                nombre:jugador.nombre,
                forma:formaBD.forma
            })
        }
    });
}



//Llamanos el getJugador
getJugador(2).then(jugador=>{
    console.log('El jugador', jugador);
    //LLAMAMOS EL getformaGol
    getFormaGol(jugador).then(resp=>{
        //obtener la forma de gol segun ID del jugador
        console.log(`La forma de Gol del jugador: ${resp.nombre} es de ${resp.forma}`);
    });
}, (err)=>{
    console.log(err);
});
//console.log(formaGol);