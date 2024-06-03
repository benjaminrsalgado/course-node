const http = requiere ('http');

const servidor = http.createServer((req, res)=>{
console.log('===> req (solicitud)');
console.log(req);
})

servidor.listen(puerto, ()=>{
    console.log(`el servidor esta escuchando en el ${puerto}...`)
})