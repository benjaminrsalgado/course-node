const estatusPedido = () => {
    return Math.random() < 0.8;
}
const miPedidoDePizza = new Promise ((resolve,reject) => {
    setTimeout(() => {
        if(estatusPedido()){
            resolve('pedido exitoso')
        } else{
            reject ('ocurrio un error')
        }
    }, 3000);
}); 


//Primera manera de hacerlo
const manejarPedido1 = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
}
const rechazarPedido = (mensajeDeRechazo) =>{
    console.log(mensajeDeRechazo)
}

miPedidoDePizza.then(manejarPedido1, rechazarPedido);

//Segunda manera de hacerlo Asi se hace si se quiere juntar todo el valor en un codigo 
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    }, (mensajeDeRechazo) => {
        console.log(mensajeDeRechazo);
    });

//Otra manera de hacerlo es con catch()

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeRechazo) => {
        console.log(mensajeDeRechazo);
    });
    
// Utilizar .catch() solamente escribiendo el nombre de dos funciones 

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}

const manejarRechazo = (mensajeDeError) => {
    console.log(mensajeDeError);
}

miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);
