const http = require('http');

const servidor = http.createServer((req, res) => {
    // Proceso
    res.end('Hola, mundo');
});
//este es el puerto
const puerto = 3000;

// Lograr que el servidor escuche
servidor.listen(puerto , () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}...`);
});


