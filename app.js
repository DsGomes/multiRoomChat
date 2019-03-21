// importar config do server
const app = require('./config/server')
const PORT = process.env.PORT || 8080;
// parametrizar a porta
//encapsulando para socket.io também escutar essa porta
const server = app.listen(PORT, function(){
    console.log('Server online')
})

const io = require('socket.io').listen(server)

app.set('io', io)

io.on('connection', function(socket){
    console.log('Usuário conectou')

    socket.on('disconnect', function(){
        console.log('Usuário desconectou')
    })
})
