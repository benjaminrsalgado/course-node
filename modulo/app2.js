const EventEmitter = require('events')

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () =>{
    console.log('se realizo una compra.')
})
emisorProductos.emit('compra')