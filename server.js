const http = require('http');
const db = require('./config/database');
const Customer = require('./models/Customer');

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
  console.log('initServer');
  const server = http.createServer((req, res) => {
    console.log('createServer');
    Customer.findAll()
      .then((users) => {
        users.forEach((user) => {
          console.log(user.id);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}