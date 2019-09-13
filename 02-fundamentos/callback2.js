//MINI BASE DE DATOS DE EMPLEADOS Y SU SALARIO
let employes = [{
    id:1,
    nombre: 'Ricardo'
},{
    id:2,
    nombre: 'Dalia'
},{
    id:3,
    nombre: 'Magda'
}];

//SALARIO DE LOS EMPLEADOS
let salarios = [{
    id:1,
    salario: 1000
},{
    id:2,
    salario: 2000
}];

//recibir datos
let getEmpleado = (id, callback)=>{
    //lo que se emcuentre se almacena en getEmpleadoBD
   let empleadoBD = employes.find(empleado => empleado.id === id)
        //console.log(empleadoBD);
    if(!empleadoBD){
                                //backtiks ``
        callback(`El empleado con el ID ${ id }`);
    }else {
        callback(null, empleadoBD);
    }    
}

let getSalario = (empleado, callback) =>{
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if(!salarioDB){
        callback(`No se encontro el salario del usuario: ${empleado.nombre}`);
    }else{
        //SI EXISTE DEVOLVEMOS NOMBRE Y SALARIO
        callback(null,{
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

getEmpleado(2, (err, empleado)=>{

    if(err){
        //ERROR
        return console.log(err);
    }
    getSalario(empleado, (err, resp)=>{
        if(err){
            return console.log(err);
        };
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    });
});

//imprimimos los resultados
// getEmpleado(1, (err, empleado)=>{

//     if(err){
//         //ERROR
//         return console.log(`EL ID no existe`);
//     }
//     console.log(empleado);
// });