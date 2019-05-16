
const Sequelize = require('sequelize');
const sequelize = new Sequelize('stage', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;