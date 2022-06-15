const Sequelize = require('sequelize');
const db = require('../db');

const Order_Products = db.define('orderProducts', {
  Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1
    },
  Price: {
    type: Sequelize.INTEGER,
    validate: {
      isDecimal: true,
  }
  }
  }

})

module.exports = Order_Products
