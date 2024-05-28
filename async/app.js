function ordenarProducto(producto){ 
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando: ${producto} de benja`);
        setTimeout(() => {
            if (producto === 'taza'){
                resolve('Ordenando una taza con el logo de benja')
            } else{
                reject('este producto no esta disponible')
            }
        }, 2000);
    }) 
}

function procesarPedido(respuesta){
    return new Promise((resolve) => {
        console.log('procesando respuesta...')
        console.log(`La respuesta fue: "${respuesta}"`)
        setTimeout(()=> {
            resolve('gracias por tu compra')
        }, 4000)
    });
}

// Esto se le conoce como encadenar promesas 
ordenarProducto('lapiz') // Aqui va a salir `Ordenando: taza de benja`
.then(respuesta => {
    console.log('Respuesta recibida') //Respuesta recibida 
    console.log(respuesta) //ordenando una taza con el logo de benja 
    return procesarPedido(respuesta) //procesando respuesta... despues, La respuesta fue ${respuesta}ordenando una taza con el logo de benja 
})
.then(respuestaProcesada => { 
    console.log(respuestaProcesada) // Gracias por tu compra
})
.catch(error => {
    console.log(error); //en caso de que salga error saldria aqui 
})

