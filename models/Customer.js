const Sequelize = require('sequelize');
const db = require('../config/database');
const Model = Sequelize.Model;

class Customer extends Model {}

Customer.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  email: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  phone: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  gender: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  lastname: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  password: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  idFb: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  offers: {
    type: Sequelize.TINYINT
    // allowNull defaults to true
  },
  verified: {
    type: Sequelize.TINYINT
    // allowNull defaults to true
  },
  date: {
    type: Sequelize.DATE
    // allowNull defaults to true
  },
  token: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
}, {
  sequelize: db,
  modelName: 'customer',
  timestamps: false,
  freezeTableName: true,
  // options
});

module.exports = Customer;