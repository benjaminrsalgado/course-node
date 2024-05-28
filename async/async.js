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

//codigo async await 

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto)
        console.log('Respuesta recibida')
        console.log(respuesta)
        const respuestaProcesada = await procesarPedido (respuesta)
        console.log(respuestaProcesada)
    }catch (error){
        console.log(error)
    }
}

realizarPedido('lapiz')