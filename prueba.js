function saludar(){
    return 'hola'
}
function saludarHolaMundo(){
    return 'hola Mundo'
}
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo, 
}
console.log(module.exports)