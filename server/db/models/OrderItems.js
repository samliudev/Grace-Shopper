const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('OrderItems', {
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
