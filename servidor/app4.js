const http = require ('http')


const servidor = http.createServer((req, res)=>{
    console.log('===> res (respuesta)') 

    console.log(res.statusCode) // 200 Ok
    res.end('Hola Mundo')
});


const puerto = 3000

servidor.listen(puerto, ()=> {
    console.log(`El servidoro esta escuchando en el puerto ${puerto}...`)
})