
//la funcion que esta dentro del setTimeout se le conoce como callback
// setTimeout(function(){
//     console.log('Hola callbackk');
// }, 3000);

//se puede remplazar el funcion CON FUNCION FLECHA =>
// setTimeout(()=>{
//     console.log('Hola callback con funcion flecha');
// }, 3000);
//funcion =>
let getUsuarioById = (id, callback) => {
   let usuario = {
       nombre: 'Ricardo',
       id
   }
   //callback
   callback(usuario);
}
//le pasamos el id e imprimimos el usuario
//traen datos de base de datos
getUsuarioById(10, (usuario)=>{
    console.log('usuario de base de datos:', usuario);
});

