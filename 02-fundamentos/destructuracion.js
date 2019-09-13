let deapool = {
    nombre: 'wade',
    apellido: 'winton',
    poder: 'regeneracion',
    getNombre: function(){    //se puede usar getNombre()
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
};

//console.log(deapool.getNombre());

// let nombre = deapool.nombre;
// let apellido = deapool.apellido;

//forma de destructuracion
let {nombre, apellido, poder} = deapool;
console.log(nombre, apellido, poder);