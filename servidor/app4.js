const http = require ('http')

//Creamos el servidor con ese modulo 
const servidor = http.createServer((req, res)=>{
    console.log('===> req(solicitud)') //Aqui se muestra un mensaje descriptivo 
    console.log(req)
    
});

//Que el servidor escuche nuestras solicitudes:
const puerto = 3000

servidor.listen(puerto, ()=> {
    console.log(`El servidoro esta escuchando en el puerto ${puerto}...`)
})