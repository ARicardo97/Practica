  //MINI BASE DE DATOS PARA JUGADORES
let jugadores = [{
    id:1,
    nombre:'Carlos',
    goles:15,
    posición:'Medio',
    número:5
},{
    id:2,
    nombre:'Juan',
    goles:8,
    posición:'Defensa',
    número:17
},{
    id:3,
    nombre:'Messi',
    goles:27,
    posición:'Delantero',
    número:10
},{
    id:4,
    nombre:'Chicharito',
    goles:20,
    posición:'Delantero',
    número:14
},{
    id:5,
    nombre:'Jimenez',
    goles:16,
    posición:'Delantero',
    número:9
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
    id:3,
    forma:'penal',
    contra:'León'
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
            reject(`El jugador ${jugador.nombre} No existe`);
        }
    });
}


//OBTENER FORMA GOL
let getFormaGol = (jugador)=>{
    return new Promise( (resolve, reject)=>{

    });
}