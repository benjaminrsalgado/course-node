const fs = require ('fs');

// Leer un archivo aqui estoy haciendolo solo con Sync
const archivo = fs.readFileSync ('inde.html', 'utf-8');

console.log(archivo)

// cambia el nombre de un archivo
fs.rename('index.html', 'main.html', (err) => {
    if(err){
        throw err;
    }else{
    console.log('Nombre cambiado exitosamente');
}
})

// Agregar contenido al fina de un archivo 

fs.appendFile('index.html', '<p> Hola <p>', (err) => {
    if(err){
        throw err;
    }else{
        console.log('archivo actualizado')
    }
});

//Remplazar todo el contenido del archivo

fs.writeFile('index.html', 'contenido nuevo', (err) =>{
    if(err){
        throw err;
}
    console.log('contenido remplazado exitosamente');
});

//Eliminar archivos
fs.unlink('main.html', (err) => {
    if (err){
    throw err;
    }
    console.log('archivo eliminado')
} )



