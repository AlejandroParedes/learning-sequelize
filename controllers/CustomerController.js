const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.get('/', function(req, res) {
  Customer.findAll()
    .then((users) => {
      users.forEach((user) => {
        console.log(user.id);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  res.send('Hola Mundo!');
});

module.exports = router;