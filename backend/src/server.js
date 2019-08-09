const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
//express é uma função, que quando chamada, cria um novo servidor
const server = express();
mongoose.connect('mongodb+srv://gabcamilo:0611@cluster0-0o4zm.mongodb.net/oministack8?retryWrites=true&w=majority', {
  useNewUrlParser:true
});

//server.use: necessario quando é alguma configuuração está em outo arquivo ou módulo

server.use(cors()); //deve ficar antes das rotas
server.use(express.json()); //permite ao express entender requisições json
server.use(routes);

server.listen(3333);
