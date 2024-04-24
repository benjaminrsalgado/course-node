function mostarTema(tema){
    console.log(`estoy aprendiendo ${tema}`)
}
// esto es sincrono
console.log('Antes de setImmediate()')

// esto es asincrono
setImmediate(mostarTema, 'Node.js');

// esto es sincrono
console.log('Despues de setImmediate()')