const express = require('express');
const app = express();
const db = require('./config/database');
const CustomerController = require('./controllers/CustomerController');

const hostname = '127.0.0.1';
const port = 3000;


db.authenticate()
  .then(() => {
    initServer();
  })
  .catch((err) => {
    console.log('connection error: ', err);
  });

initServer = () => {
  app.use('/customer', CustomerController);
  app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });
}