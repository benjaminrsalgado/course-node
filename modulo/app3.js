const EventEmitter = require('events')

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total) =>{
    console.log(`Se realizó una compra por ${total}`);
})
emisorProductos.emit('compra', 500)