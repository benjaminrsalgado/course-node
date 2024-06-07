const http = require ('http')

//Creamos el servidor con ese modulo 
const servidor = http.createServer((req, res)=>{
    console.log('===> req(solicitud)') //Aqui se muestra un mensaje descriptivo 
    // req.url es una propiedad de req. Aquí estás imprimiendo la URL de la solicitud que se ha recibido
    console.log(req.url)
    //re.method es una propiedad de req
    console.log(req.method)
    // Aquí simplemente estás imprimiendo 'Hola, mundo' en la consola cada vez que se recibe una solicitud
    console.log('Hola, mundo')
});

const puerto = 3000;


servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})
