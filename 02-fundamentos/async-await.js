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


let getEmpleado = async (id)=>{

   let empleadoBD = employes.find(empleado => empleado.id === id)
   if(!empleadoBD){
       //[simple mensaje para que se vea el num de ID]
       throw new Error(`El empleado con el [ID ${ id }] No existe`);
   }else {
       //en resolove solo se regresa un dato, si se regresa mas de uno se debe regresar un objeto
       return empleadoBD;
   } 
}

let getSalarios = async (empleado)=>{

        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if(!salarioDB){
            throw new Error(`No se encontro el salario del usuario: ${empleado.nombre}`);
        }else{
            //SI EXISTE DEVOLVEMOS NOMBRE Y SALARIO
            return {
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            };
        }
}

//ASYNC - AWAIT
// let getInformacion = async (id) =>{
//     let empleado = await getEmpleado(id);
//     let salario = await getSalarios(empleado);
//     console.log(salario);
// }
//llamamos a la funcion
// getInformacion(2);



//ASYNC - AWAIT prueba 2
let getInformacion = async (id) =>{
    let empleado = await getEmpleado(id);
    let resp = await getSalarios(empleado);
    
    return `${resp.nombre} tiene un salario de $${resp.salario}`;
}
//llamamos a la funcion
getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));