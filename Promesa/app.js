const promesaCumplida = false; 

const miPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida){
            resolve ('promesa cumplida!')
        } else{
            reject('promesa rechazada...')
        }
    }, 3000);
})

// si la promesa fue cumplida sigue despues esto

//miPromesa.then((pepe)=> {
//    console.log(pepe)
//})

const manejarExito = (mensaje) => {
    console.log(mensaje); // Imprime el mensaje si la promesa se cumple
};

const manejarError = (error) => {
    console.log(error); // Imprime el error si la promesa es rechazada
};

// Ya que el orden es (primero el valor de resolve, despues el valor de reject)
miPromesa.then(manejarExito, manejarError);


