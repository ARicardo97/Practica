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

//promesa empleados
let getEmpleado = (id)=>{
     return new Promise( (resolve, reject) =>{
        let empleadoBD = employes.find(empleado => empleado.id === id)
    if(!empleadoBD){
        //[simple mensaje para que se vea el num de ID]
        reject(`El empleado con el [ID ${ id }] No existe`);
    }else {
        //en resolove solo se regresa un dato, si se regresa mas de uno se debe regresar un objeto
        resolve(empleadoBD);
    } 
     });
}

//promesa salarios
let getSalarios = (empleado)=>{
    return new Promise( (resolve, reject)=>{
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if(!salarioDB){
            reject(`No se encontro el salario del usuario: ${empleado.nombre}`);
        }else{
            //SI EXISTE DEVOLVEMOS NOMBRE Y SALARIO
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

//llamamos el getEmpleado y le mandamos el ID 1
getEmpleado(2).then(empleado =>{
    console.log('Empleado de BD', empleado);

    //llamamos el getSalario
    getSalarios(empleado).then(resp =>{
        console.log(`El salario de: ${resp.nombre} es de $${resp.salario}`);
    });

},(err)=>{
   console.log(err);
});