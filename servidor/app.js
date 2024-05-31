const http = requiere('http');

const servidor = http.creatServer((req, res)=> {
    //Proceso
    res.end('Hola, mundo')
})
//lograr que el servidor escuhe 
servidor.listen()