const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


var corsOptions ={
    origin:  'http://localhost:3000',
    optionsSuccessStatus : 200
}

//configurações
app.use(cors());
app.use(express.json());

//Conexão com o banco de dados
mongoose.connect(process.env.MONGODB,{useNewUrlParser : true, useUnifiedTopology : true})
/*mongodb://localhost:27017/databaseName */

/*Models*/
requireDir('./src/models');

//WebSocket - middleware
app.use((req,res,next)=>{
    req.io = io;
    next();
})

//Routes
app.use('/api',require('./src/routes'));

app.listen(process.env.PORT || 3002);
console.log('Servidor esta ouvindo na porta 3002');