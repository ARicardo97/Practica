console.log('inicio del programa');

setTimeout( function(){
   console.log('primer timeout');
}, 3000);

setTimeout( function(){
    console.log('segundo timeout');
 }, 0);

 setTimeout( function(){
    console.log('tercero timeout');
 }, 0);