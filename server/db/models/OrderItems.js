const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('OrderItems', {
  OrderItemID:{
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  OrderDetailsID:{
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  PokemonID:{
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  }

})
