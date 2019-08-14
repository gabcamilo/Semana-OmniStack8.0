const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
//express é uma função, que quando chamada, cria um novo servidor
const app = express();
const server = require('http').Server(app)
//importa o modlo http padrao do node (ja vem no node), para extrair o servidor http do express para uni-lo com o server websocket
//isto fará com que o servidor aceite os protocolos http e websocket

const io = require('socket.io')(server);//retorna uma função q recebe um servidor http


io.on('connection', socket =>{
  console.log('Nova Conexão', socket.id);

  socket.on('oi', message => {
    console.log(message);
  })

  setTimeout(() => {
    socket.emit('oi', {
      message: "oie do Back"
    })
  }, 5000);
} )

mongoose.connect('mongodb+srv://gabcamilo:0611@cluster0-0o4zm.mongodb.net/oministack8?retryWrites=true&w=majority', {
  useNewUrlParser:true
});

//app.use: necessario quando é alguma configuuração está em outo arquivo ou módulo

app.use(cors()); //deve ficar antes das rotas
app.use(express.json()); //permite ao express entender requisições json
app.use(routes);

server.listen(3333);
