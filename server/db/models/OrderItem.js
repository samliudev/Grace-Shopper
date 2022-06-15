const Sequelize = require('sequelize');
const db = require('../db');

const OrderItem = db.define('orderItem', {
  Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1
    },
  Price: {
    type: Sequelize.DECIMAL(10,2),
    validate: {
      isDecimal: true,
  }
  }
  }

})

module.exports = OrderItem
