const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const server = express();

//configurações
server.use(cors());
server.use(express.json())

//Conexão com o banco de dados
mongoose.connect('mongodb+srv://brunopazitto:admin@cluster0-esdzh.mongodb.net/integraGit?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology : true})
/*mongodb://localhost:27017/databaseName */

/*Models*/
requireDir('./src/models');

//Routes
server.use('/api',require('./src/routes'));

server.listen(3002);
console.log('Servidor esta ouvindo na porta 3002');