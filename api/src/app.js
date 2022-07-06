const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');


const server = express();

require('./db.js');//lee el archivo db

server.name = 'API';
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));//analiza el texto como datos codificados de URL y expone el objeto resultante en req.body. Para comparacion; en PHP todo esto se hace automáticamente y se expone en $_POST
server.use(bodyParser.json({ limit: '50mb' }));// analiza el texto como JSON y expone el objeto resultante en req.body.

server.use(cookieParser());
//ubica en el objeto req, bajo req.cookies con un objeto que identifica las cookies por un nombre, un string. Para definir una cookie nueva se define una nueva ruta en la aplicación Express.js de la siguiente manera

server.use(morgan('dev'));//es un Middleware que registra las requests junto con alguna otra información dependiendo de su configuración y el valor predeterminado utilizado.

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });//El encabezado de respuesta Access-Control-Allow-Headers es usado en la respuesta  a una solicitud preflight para indicar cuáles encabezados HTTP pueden ser usados durante dicha solicitud.



server.use('/', routes);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
  
  module.exports = server;  