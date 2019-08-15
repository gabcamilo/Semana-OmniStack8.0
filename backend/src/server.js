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

const connectedUsers = {}


io.on('connection', socket =>{
  const {user} = socket.handshake.query;

  console.log(user, socket.id);

  connectedUsers[user] = socket.id;
} )

mongoose.connect('mongodb+srv://gabcamilo:0611@cluster0-0o4zm.mongodb.net/oministack8?retryWrites=true&w=majority', {
  useNewUrlParser:true
});

//app.use: necessario quando é alguma configuuração está em outo arquivo ou módulo

//middleware
app.use((req, res, next) =>{
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(cors()); //deve ficar antes das rotas
app.use(express.json()); //permite ao express entender requisições json
app.use(routes);

server.listen(3333);
